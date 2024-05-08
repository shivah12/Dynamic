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

const Bookmark = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const bookmarks = movies.filter((movie) => movie.isBookmarked);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase(); // Convert search term to lowercase
    setSearch(searchTerm);
    const newList = bookmarks.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm)
    );
    setSearchList(newList);
  };

  return (
    <Layout>
      <Box
        sx={{
          background: "linear-gradient(rgba(106, 13, 173, 0.7), rgba(0, 0, 0, 0.8))",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          minHeight: "100vh",
          borderRadius: "15px",
          border: "0.5px solid white",
          padding: "20px",
        }}
      >
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "30px",
            p: 1,
            backgroundColor: "transparent",
            border: "1px solid white",
            color: "white",
            boxShadow: "2px 3px white", // Adding box shadow with white color and opacity
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
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
              <Typography variant="h5" component="h1" my={6} fontWeight={400} color="white">
                Bookmarks
              </Typography>
              <MovieList recommendList={bookmarks} />
            </Box>
          ) : (
            <Box width="100%">
              <Typography color="white">
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

export default Bookmark;
