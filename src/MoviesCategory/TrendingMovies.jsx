import React, { useEffect, useState } from "react";
import MovieRow from "../components/MovieRow"; // Ensure you import the `MovieRow` component
import requests from "../tmdb"; // Import your API requests

function TrendingMovies() {
  return (
    <div className=" my-4">
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
    </div>
  );
}

export default TrendingMovies;
