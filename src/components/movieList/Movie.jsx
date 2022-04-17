import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./movie.css";
import Play from "../../Assets/image/play-circle.png";
import { useDispatch } from "react-redux";
import { getmovieComment } from '../../redux/actions/movieAction'

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch()

  const getMovie = () => {
    axios
      .get("https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/movies")
      .then((res) => setMovies(res.data));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movies">
      <div className="content">
        {movies.slice(4).map((movie) => (
          <img src={movie.movieImageUrl} alt="" />
        ))}
        <h1 className="title-3">Continue Watching | 4 Movies</h1>
        <div className="secondary_wrapper">
          {movies.slice(0, 4).map((movie) => (
            <div key={movie.id} className="secondary_item" onClick={() => dispatch(getmovieComment(movie.id))}>
              <img src={movie.movieImageUrl} alt="" />
              <div className="secondary_info">
                <img src={Play} alt="" />
                <div className="play-info">
                  <h5>Spiderman: No way home</h5>
                  <p>Dec 2021</p>
                </div>
                <span>02:28:05</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
