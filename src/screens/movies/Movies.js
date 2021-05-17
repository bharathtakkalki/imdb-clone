import React, { Fragment, useEffect, useState } from 'react'

const Movies = () => {
    const [userData,setUserData] = useState({});
    const [name,setName] = useState("");
    const [job,setJob]  = useState("");

    useEffect(()=>{
        getUserData()
    },[])
    const getUserData = () => {
        // AJAX calls =====> Asynchronous Javascript XML
        // JSON ====> JavaScript Object Notation
        const xhrUserData = new XMLHttpRequest();

        // Different Methods of API GET,POST,PUT,DELETE,PATCH
        console.log(" Opening the connection")
        xhrUserData.open("GET","https://reqres.in/api/users?page=1")
        console.log("Make the api calls")
        xhrUserData.send()
        // Readystatechange
        xhrUserData.addEventListener("readystatechange",function(){
            console.log("Ready State Change",this.readyState)
            if(this.readyState === 4){
                if(this.status !== 200){
                    // Handler error here 
                }
                console.log("Status",this.status)
                console.log(typeof this.responseText)
                console.log(typeof JSON.parse(this.responseText))
                console.log(JSON.parse(this.responseText))
                const users = JSON.parse(this.responseText)
                setUserData(users)
            }
        })
    }

    const nameChangeHandler = (event) => setName(event.target.value)
    const jobChangeHandler = (event) => setJob(event.target.value)

    const createUserClickHandler = () =>{
        console.log("Create User API Calls")

        const xhrCreateUser = new XMLHttpRequest();

        const postObject = {
            name:name,
            job:job
        }
        console.log("Post Data", postObject)
        // Different Methods of API GET,POST,PUT,DELETE,PATCH
        console.log(" Opening the connection")
        xhrCreateUser.open("POST","https://reqres.in/api/users")
        console.log("Make the api calls")
        xhrCreateUser.send(JSON.stringify(postObject))

        // Readystatechange
        xhrCreateUser.addEventListener("readystatechange",function(){
            console.log("Ready State Change",this.readyState)
            if(this.readyState === 4){
                if(this.status !== 201){
                    // Handle Error 
                }
                console.log("Status",this.status)
                console.log(typeof this.responseText)
                console.log(typeof JSON.parse(this.responseText))
                console.log(JSON.parse(this.responseText))
                // const users = JSON.parse(this.responseText)
                // setUserData(users)
            }
        })
    }

    return (
        <Fragment>
        <div></div>
        <div></div>
        <div></div>
        <div className="movies">
            Here Goes all the Movies
        
            <p>
                {JSON.stringify(userData)}
            </p>
            <label>Name</label>
            <input type="text" value={name} onChange={nameChangeHandler}/>
            <label>Job</label>
            <input type="text" value={job} onChange={jobChangeHandler}/>
            <button onClick={createUserClickHandler}>Create User</button>
        </div>
        </Fragment>
    )
}

export default Movies;
