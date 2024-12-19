import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./MoviesCategory/NavBar";
import TrendingMovies from "./MoviesCategory/TrendingMovies";
import TopRatedMovies from "./MoviesCategory/TopRatedMovies";
import ActionMovies from "./MoviesCategory/ActionMovies";
// import RomanceMovies from "./MoviesCategory/RomanceMovies";
import Banner from "./components/Banner";
import HorrorMovies from "./MoviesCategory/HorrorMovies";
import MovieDetails from "./components/MovieDetails";
import "./App.css";
import requests from "./tmdb";
import MovieRow from "./components/MovieRow";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Footer from "./footer/Footer.jsx";

function AppContent() {
  const location = useLocation();

  // Check if the current route is '/signin' or '/signup'
  const shouldShowNavbar = !["/signin", "/signup"].includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route
          path="/"
          element={
            <>
              <Banner />
              <MovieRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
              <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
              <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
              <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow />
              <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow />
              {/* <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow /> */}
            </>
          }
        />
        <Route path="/trending-now" element={<TrendingMovies />} />
        <Route path="/top-rated" element={<TopRatedMovies />} />
        <Route path="/action-movies" element={<ActionMovies />} />
        <Route path="/horror-movies" element={<HorrorMovies />} />
        {/* <Route path="/romance-movies" element={<RomanceMovies />} /> */}
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

function NetflixApp() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default NetflixApp;
