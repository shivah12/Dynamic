import React, { useState, SetStateAction, useContext } from "react";
import Layout from "../../Layout";
import {
  Box,
  Paper,
  InputBase,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "../../assets/icons/icon-search.svg";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";

const Movie = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };

  return (
    <Layout>
      <Box
        sx={{
          background: "white",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          minHeight: "100vh",
          borderRadius: "15px",
          border: "0.5px solid rgba(77, 149, 212, 0.69)",
          padding: "20px",
        }}
      >
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "30px",
            boxShadow: "2px 3px rgba(77, 149, 212, 0.69)", // Fixed typo
            p: 1,
            backgroundColor: "transparent",
            border: "1px solid rgba(77, 149, 212, 0.69)",
            color: "rgba(77, 149, 212, 0.69)",
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{
              ml: 1,
              flex: 1,
              color: "rgba(77, 149, 212, 0.69)",
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  alt="search icon"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
          />
        </Paper>
        <Box py={2} px={4}>
          {search === "" ? (
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400} color="rgba(77, 149, 212, 0.69)">
                Movies
              </Typography>
              <MovieList recommendList={search === "" ? movies : searchList} />
            </Box>
          ) : (
            <Box width="100%">
              <Typography color="rgba(77, 149, 212, 0.69)">
                Found {searchList.length} results for "{search}"
              </Typography>
              <MovieList recommendList={searchList} />
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default Movie;
