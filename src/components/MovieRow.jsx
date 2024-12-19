import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const base_url = "https://image.tmdb.org/t/p/original/";

function MovieRow({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="my-4">
      <h2 className="text-white mb-3  mt-3 p-1 text-center " style={{ backgroundColor: "#E50914" }}>
        {title}
      </h2>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <Link to={`/movie/${movie.id}`}>
              <div className="movie-container">
                <img className={`img-fluid ${isLargeRow ? "movie-poster-large" : ""}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name || movie.title} />
                <div className="play-icon">
                  <i className="fas fa-play-circle"></i>
                </div>
              </div>
            </Link>
            <div className="movie-title text-center mt-2">
              <h5 className="text-white">{movie.title || movie.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
