import axios from 'axios'
import React, { useState ,useEffect} from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import Card from '../../components/common/card/Card'


function Movies() {
    const [moviesData,setMoviesData] =  useState([])
    useEffect(() =>{
        getMoviesTitle()
    },[])


    const getMoviesTitle = () => {
        axios.get("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre",{
            headers:{
                "x-rapidapi-key": "",
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "useQueryString": true
            },
            params:{
            "genre": "/chart/popular/genre/adventure",
        }})
        .then(response =>{
            setMoviesData(response.data)
        })
        .catch(error => console.log(error))

    }

    const getDataFromChild = (data) =>{console.log(data)}


    return (
        <div className="movies">
            {moviesData.length !== 0 && Array(30).fill().map((item,index) =>(
                <Card key={moviesData[index]} movieId={moviesData[index]} getDataFromChild={getDataFromChild}/>
            ))}
        </div>
    )
}

export default Movies



//<Card key={moviesData[index]} movieId={moviesData[index]} imageUrl="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" year="2019" rating="115"/>
