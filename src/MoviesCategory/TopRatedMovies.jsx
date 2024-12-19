import React, { useEffect, useState } from "react";
import MovieRow from "../components/MovieRow"; // Ensure you import the `MovieRow` component
import requests from "../tmdb"; // Import your API requests

function TopRatedMovies() {
  return (
    <div className=" my-4">
      <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
    </div>
  );
}

export default TopRatedMovies;
