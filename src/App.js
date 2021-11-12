// import React, { Component } from 'react'
import "../src/App.css"
import React, {useState,useEffect} from "react";

function App() {
   
    const [users,setUsers] = useState([]);

    const getData = () => {
      fetch("https://api.github.com/users").then((response) => {
        return response.json();
      }).then((data)=>{
         setUsers(data);
        })
      
}

    useEffect(() => {
      getData();
    },[])

    return (<>
    <div className="bg-secondary">
      <div className="container-fluid text-center text-danger">
        <h1>Github Users</h1>
    </div>
    <br/>
    <br/>
    <div className = "row">
    {
      users.map((value) => {
        return(<>
        <div className = "col-sm-4">
        <div class="card width">
          <img src={value.avatar_url} className="card-img-top img-he-wi" alt="..." />
    <div className="card-body">
    <h5 className="card-title">{value.login}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={value.url} className="btn btn-primary">Visit Profile</a>
    </div>
    </div>
    <br/>
    </div>
    
    </>
        )
      })
    }
    </div>
    </div>
      </>
    )
  }


export default App;