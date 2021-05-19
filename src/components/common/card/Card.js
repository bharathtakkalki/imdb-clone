import React from 'react';
import {AiFillStar} from 'react-icons/ai';

function Card({imageUrl,title,year,rating}) {
    return (
        <div className="card">
            <div className="image-container">
                <img src={imageUrl} alt="poster"/>
            </div> 
            <h4>{title}</h4>
            <div className="year-rating-container">
                <p>{year}</p>
                <p><AiFillStar/>{rating}</p>
            </div>      
        </div>
    )
}

export default Card;
