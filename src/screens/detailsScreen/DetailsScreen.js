import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import { useHistory, useParams } from "react-router";
import {IoMdArrowRoundBack} from "react-icons/io"
import LabelValue from "../../components/common/labelValue/LabelValue";
import Rating from "../../components/common/rating/Rating";

function DetailsScreen() {
  const [apiCalled, setApiCalled] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [plot,setPlot] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [length, setLength] = useState("")

  const history = useHistory()

  const { movieId } = useParams();
  useEffect(() => {
    getMovieDetails(movieId);
  }, []);
  const getMovieDetails = (movieId) => {
    axios
      .get(
        `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${movieId}`,
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
        console.log(response.data);
        const movieData = response.data;
        setVideoId(movieData.trailer.id);
        setYear(movieData.year);
        setTitle(movieData.title);
        setRating(movieData.rating);
        setImageUrl(movieData.poster);
        setPlot(movieData.plot);
        setLength(movieData.length);
        setApiCalled(true);
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

  const backClickHandler = () =>{
    history.push("/")
  }

  return (
    <div className="details-screen">
        <div className="back-button" onClick={backClickHandler} ><IoMdArrowRoundBack/>Back</div>
      {apiCalled && (
        <Fragment>
          <div className="trailer-container">
            <video controls>
              <source
                src={`https://imdb-video.media-imdb.com/${videoId}/1434659607842-pgv4ql-1556354704370.mp4?Expires=1621616022&Signature=rQS3cbl0pcGxa3KMtJi~vj1GqeMVm7zG5DtTmIYSPQa1rQsS6GfeGKVOEYOlBrA6NAlAdxH194SMyepz~kx1XC4ZN1TGryFjDLyllZGj2f5caZUYLjvl~lxuDDBT6aSP~lyCQmWdicF8SMxmiU74x5GaRkERfjm7QG3vZKZ~PtqGoYbcuKmC3Zm-67mdOFGmxQLWvFfFD0rV5IBcp55WIe4Ke28eXfDi4oER7GCnmA31bnTa8M8VT7igJQHQXEC6t4rZp8JDVCr8zpNJUCKIXqIfLfk7I2xb8dFUuOVchSUvCtF93CMCRGkAFyhbr4sHcL~eSchjT3oK10Wgsn84nQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`}
              />
            </video>
          </div>
          <div className="details-container">
            <div className="image-container">
              <img src={imageUrl} alt="poster" onError={setImageToFallback} />
            </div>
            <div className="movie-details">
                <div>
                    <LabelValue label="Title" value={title}/>
                    <LabelValue label="Release Year" value={year}/>
                    <LabelValue label="Length" value={length}/>
                </div>
                <div className="rating">
                    <Rating rating={rating}/>
                </div>
            </div>
            <div className="description">
                <h4>About:</h4>
                <p>
                {plot}
                </p>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default DetailsScreen;
