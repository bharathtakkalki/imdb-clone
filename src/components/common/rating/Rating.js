import React, { useEffect,useState } from 'react'
import {BsStar, BsStarFill, BsStarHalf} from 'react-icons/bs';
function Rating({rating}) {
    const [userRating,setUserRating] = useState(rating ? rating/2 : 0)
    return (
        <div className="rating">
            <label>Average User Rating:</label>
            <div className="stars-container">
                <div className="stars">
                {Array(5).fill().map((item,index) =>{
                    const starNumber = index + 1
                    if(starNumber > userRating) return <BsStar className="empty"/>
                    if(starNumber < userRating) return <BsStarFill className="fill"/>
                    if(starNumber - userRating  < 1 && userRating - Math.floor(userRating) > 0.5 )return <BsStarHalf className="half"/>
                    return <BsStar className="empty"/>
                })}
                </div>
                <h3>{userRating}/5</h3>
            </div>
            
        </div>
    )
}

export default Rating;
