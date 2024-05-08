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
import MovieTrendList from "../../components/movie-list/movieTrendList";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const trendingList = movies.filter((item) => item.isTrending === true);
  const recommendList = movies.filter((item) => item.isTrending !== true);

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
          padding: "20px", // Add padding to give space around the content
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
            border: "1px solid rgba(77, 149, 212, 0.69)", 
            color: " rgb(150, 225, 234)", 
            backdropFilter:"blur(10px)",
            boxShadow: "2px 3px rgba(77, 149, 212, 0.69)",
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
              <Box width="100%">
                <Typography
                  variant="h5"
                  component="h1"
                  my={6}
                  fontWeight={400}
                  color="rgba(77, 149, 212, 0.69)"
                >
                  Trending
                </Typography>
                <MovieTrendList trendingList={trendingList} />
              </Box>
              <Box width="100%">
                <Typography
                  variant="h5"
                  component="h1"
                  my={6}
                  fontWeight={400}
                  color="rgba(77, 149, 212, 0.69)"
                >
                  Recommended For You
                </Typography>
                <MovieList recommendList={recommendList} />
              </Box>
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

export default Home;
