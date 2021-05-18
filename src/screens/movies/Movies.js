import axios from 'axios'
import React from 'react'

class NoUserFound extends Error {
    constructor(){
        super()
    }
}

axios.get()
.then()
.catch(error => {
    console.error(error)
    throw NoUserFound("My Message - No user found")
})

function Movies() {
    return (
        <div>
            This is a Movies Page
        </div>
    )
}

export default Movies
