import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [userData, setUserData] = useState();
  const [name, setName] = useState();
  const [job, setJob] = useState();

  useEffect(() => {
    console.log('movies did mounted');
    getUserData();
  }, []);

  const getUserData = () => {
    const xhrUserData = new XMLHttpRequest();
    xhrUserData.open('GET', 'https://reqres.in/api/users');
    xhrUserData.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        console.log(JSON.parse(xhrUserData.responseText).data);
        setUserData(JSON.parse(xhrUserData.responseText).data);
      }
    });
    xhrUserData.send();
  };
  const postUserData = () => {
    const xhrUserData = new XMLHttpRequest();
    xhrUserData.open('POST', 'https://reqres.in/api/users');
    // xhrUserData.addEventListener('readystatechange', function () {
    //   if (this.readyState === 4) {
    //     console.log(xhrUserData.responseText);
    //   }
    // });
    
    xhrUserData.onreadystatechange = function(){
      console.log("Here Iam")
      console.log(this)
      if (this.readyState === 4) {
        console.log(xhrUserData.responseText);
      }
    };
    xhrUserData.send(`name:${name}, job:${job}`);
  };

  const nameHandler = event => setName(event.target.value);
  const jobHandler = event => setJob(event.target.value);

  return (
    <div className="movies">
      Here Goes all the movies
      <hr />
      <label htmlFor="name">name</label>
      <input
        type="text"
        name="name"
        placeholder="name"
        id="name"
        onChange={nameHandler}
      />
      <hr />
      <label htmlFor="job">job</label>
      <input
        type="text"
        name="job"
        placeholder="job"
        id="job"
        onChange={jobHandler}
      />
      <hr />
      <label htmlFor="btn">btn</label>
      <button name="btn" id="btn" onClick={postUserData}>
        btn
      </button>
    </div>
  );
};

export default Movies;
