import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const Movies = () => {
    const [userData,setUserData] = useState({});
    const [name,setName] = useState("");
    const [job,setJob]  = useState("");

    useEffect(()=>{
        getUsersUsingFetch()
        .then(users => console.log(users))


        getUsersUsingAxios()
        .then(response => console.log(response.data))
        // const users = getUserData(function(){
        //     console.log(" I have Made the api calls")
        //     console.log("Clean up")
        //     console.log("Some More Computation")
        //     getUserData(function(){
        //         console.log("Here is the Second API call")
        //         getUserData(function(){
        //             console.log("This is the Third API Call")
                    
        //         })
        //     })
        // })
        // console.log("Users",users)
        // console.log(getUserData())
        // getUserData()
        // .then(users => {
        //     console.log("User One",users)
        //     getUserData()
        //     .then(users =>{
        //         console.log("Users Two",users)
        //         getUserData()
        //         .then(users =>{
        //             console.log("User Three", users)
        //         })
        //     })
        // })
        // .catch(err=>{
        //     console.log("Error",err)
        // })
        // (async function(){
        //     const usersOne = await getUserData()
        //     console.log("Users One",usersOne)
        //     const usersTwo = await getUserData()
        //     console.log("Users Two",usersTwo)
        //     const usersThree =  getUserData()
        //     console.log("Users Three",usersThree)
        // })()


        // getUserData();
        // getUserData();
    },[])
    // const getUserData = (callback) => {
    //     return new Promise((resolve, reject) =>{

    //         // AJAX calls =====> Asynchronous Javascript XML
    //         // JSON ====> JavaScript Object Notation
    //         const xhrUserData = new XMLHttpRequest();

    //         // Different Methods of API GET,POST,PUT,DELETE,PATCH
    //         console.log(" Opening the connection")
    //         xhrUserData.open("GET","https://reqres.in/api/users?page=1?delay=20")
    //         console.log("Make the api calls")
    //         xhrUserData.send()
    //         // Readystatechange
    //         let users;
    //         xhrUserData.addEventListener("readystatechange",function(){
    //             console.log("Ready State Change",this.readyState)
    //             if(this.readyState === 4){
    //                 if(this.status !== 200){
    //                     reject()
    //                 }else{
    //                     // console.log("Status",this.status)
    //                     // console.log(typeof this.responseText)
    //                     // console.log(typeof JSON.parse(this.responseText))
    //                     // console.log(JSON.parse(this.responseText))
    //                     users = JSON.parse(this.responseText)
    //                     setUserData(users)
    //                     resolve(users)
    //                 }
    //             }
    //         })
    //     })
    // }

    const getUsersUsingFetch = () =>{
        return fetch('https://reqres.in/api/users?page=1?delay=20')
        .then(response => response.json())
        .catch(err => {
            console.log("error",err)
        })
    }
    const getUsersUsingAxios = () =>{
       return axios.get("https://reqres.in/api/users?page=1?delay=20")
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

