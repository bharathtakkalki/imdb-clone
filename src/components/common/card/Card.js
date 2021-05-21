import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useHistory } from "react-router";

function Card({ movieId,getDataFromChild }) {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  const history = useHistory();

  useEffect(() => {
    getMoviesDetails(movieId.split("/")[2]);
  }, []);
  const getMoviesDetails = (id) => {
    axios
      .get(
        `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${id}`,
        {
          headers: {
            "x-rapidapi-key":
              "542711802bmshcb5eeae83cc2d5ep1d5c0fjsnbd0ffe90ff1a",
            "x-rapidapi-host":
              "imdb-internet-movie-database-unofficial.p.rapidapi.com",
            useQueryString: true,
          },
        }
      )
      .then((response) => {
        const movieData = response.data;
        setRating(movieData.rating || "N/A");
        setYear(movieData.year);
        setTitle(movieData.title);
        setImageUrl(movieData.poster);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setImageToFallback = () => {
    setImageUrl(
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
    );
  };

  const redirectToDetailsPage = () => {
      history.push(`/movies/${movieId.split("/")[2]}`)
    // getDataFromChild(movieId.split("/")[2])

  };

  return (
    <div className="card" onClick={redirectToDetailsPage}>
      <div className="image-container">
        <img src={imageUrl} alt="poster" onError={setImageToFallback} />
      </div>
      <div>
        <h4>{title}</h4>
        <div className="year-rating-container">
          <p>{year}</p>
          <p>
            <AiFillStar />
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
