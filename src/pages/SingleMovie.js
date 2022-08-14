import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './Context';

const SingleMovie = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading, isError, setIsError] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => { //parameter
    try {
      const reqData = await fetch(url);
      const resData = await reqData.json();
      console.log(resData);

      if (resData.Response === "True") {
        setIsLoading(false);
        setMovie(resData);
      } else {
        setIsError({
          show: true,
          msg: resData.error
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let waitTime = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`); //Argument
    }, 600);
    return () => clearTimeout(waitTime);

  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt={movie.imdbID} />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text" style={{ color: "black" }}>Released: <span className="card-text">{movie.Released}</span></p>
          
            <p className="card-text" style={{ color: "black" }}>BoxOffice: <span className="card-text">{movie.BoxOffice}</span></p>
          <p className="card-text" style={{ color: "black" }}>imdbRating: <span className="card-text">{movie.imdbRating}</span></p>
          <p className="card-text" style={{ color: "black" }}>Actors: <span className="card-text">{movie.Actors}</span></p>

          <p className="card-text" style={{ color: "black" }}>Language: <span className="card-text">{movie.Language}</span></p>
          <p className="card-text" style={{ color: "black" }}>Writer: <span className="card-text">{movie.Writer}</span></p>

          <p className="card-text" style={{ color: "black" }}>Director: <span className="card-text">{movie.Director}</span></p>
          <NavLink to="/" className="back-btn">Go Back</NavLink>
        </div>

      </div>

    </section>


  )
}

export default SingleMovie