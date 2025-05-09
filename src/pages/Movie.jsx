import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { BsGraphUp, BsWallet2, BsHourglassSplit } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieURL);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <div className="movie-card">
            <img className="img" src={import.meta.env.VITE_IMG + movie.poster_path} alt={movie.title} />
          </div>

          <div className="sideContent">
          <h2 className="title">{movie.title}</h2>
          <p className="tagline">{movie.tagline}</p>
            <p>
              <FaStar /> {Number(movie.vote_average).toFixed(1)}
            </p>
            <div className="info">
              <h3>
                <BsWallet2 /> Orçamento:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
              <h3>
                <BsGraphUp /> Receita:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
              <h3>
                <BsHourglassSplit /> Duração:
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>
            <div className="info description">
              <h3>Descrição:</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
