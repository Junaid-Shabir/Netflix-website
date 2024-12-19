import React from 'react'
import MovieRow from '../components/MovieRow'
import requests from '../tmdb'

const RomanceMovies = () => {
  return (
    <div className='my-4'>
        <MovieRow title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies} isLargeRow />
    </div>
  )
}

export default RomanceMovies    