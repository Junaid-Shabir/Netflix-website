import React, { useEffect, useState } from "react";
import MovieRow from "../components/MovieRow"; // Ensure you import the `MovieRow` component
import requests from "../tmdb"; // Import your API requests

function ActionMovies() {
  return (
    <div className=" my-4">
      <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow />
    </div>
  );
}

export default ActionMovies;
