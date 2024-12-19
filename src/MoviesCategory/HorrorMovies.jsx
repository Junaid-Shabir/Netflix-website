import React, { useEffect, useState } from "react";
import requests from "../tmdb"; // Import your API requests
import MovieRow from "../components/MovieRow";


const HorrorMovies = () => {
    
  return (
    <div className=" my-4">
      <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow />
    </div>
  )
}

export default HorrorMovies