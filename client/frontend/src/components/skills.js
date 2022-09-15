import  "../App.css"
import React from 'react'
import {  useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
//import List from "./Components/List";
import noImage from '../img/user.jpg'
import "../tags.css"
import axios from "axios";
//import {BasicCard} from "./viewcandidat"
import ima from '../img/user.jpg'
import { Link ,useNavigate, useParams} from "react-router-dom"


export const Skills = ()=>{
  const [inputText, setInputText] = useState("");
  const [data,setData] = useState([]);
  

  let params = useParams();

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const navigate = useNavigate();

  const keyword = params.keyword || ''
  
  useEffect(() => {
   // const keyword = searchParams.get("keyword") ? searchParams.get("keyword") : ''
  
    loadUser();
    
  }, [keyword]);
  
  
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8800/api/services?keyword=${keyword}`);
    setData(result.data);
    console.log(keyword)
    console.log(result.data);
  };

  const submitHandler = (e) => {
    e.preventDefault()
    if (inputText.trim()) {
     navigate(`/search/${inputText}`)
    } else {
      navigate('/')
    }
  }

  return (
   
      
     <section className="teams" id="teams">
     <div className="max-width">
       <h2 className="title">Candidates Search</h2>
       <div className="search">
      <form onSubmit={submitHandler} inline className='search-bar'>
      <input
        type='text'
        name='search bar'
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Search for candidates...'
        className="search-col"
      />
      <button type='submit' variant='outline-success' className='search-btn'>
        Search
      </button>
    </form>
      </div> 
       <div className="carousel owl-caousel">
       {data.map((user, index) => (  
       <div key ={index} className="card">
      <div className="box">
        <img src={ima} alt />
        <div className="text">{user.username}</div>
         <a className=" mr-2" href={`/api/services/${user._id}`}>
                    <i className="fa fa-eye" aria-hidden="true"></i> 
                 </a>
      </div>
   
    </div>
       ))}
      </div> 
       
     </div>
   </section>
    
  );
}