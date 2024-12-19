import React from "react";
import requests from "../tmdb";
import MovieRow from "../components/MovieRow";

const FamilyComedies = () => {
  return (
    <div className=" my-4">
      <MovieRow title="Family Comedies" fetchUrl={requests.FamilyComedies} isLargeRow />
    </div>
  );
};

export default FamilyComedies;
