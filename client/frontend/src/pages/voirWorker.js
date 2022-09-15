import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
//import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



import {Rating} from 'react-simple-star-rating'
import logo from '../images/imageC.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	faFacebook,
  faApple,
	faInstagram
  } from "@fortawesome/free-brands-svg-icons";


 
export const VoirWorker = () => {
   
  const navigate = useNavigate(); 
  const { id } = useParams();  
  const [user, setUser] = useState({});
 
  
 
  useEffect(() => {
    loadUser();
  }, []);


  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)
  }

 
 
 
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8800/api/services/${id}`);
    setUser(result.data);
    //console.log(result.data.resp._source);
  };
  return (
    <section className="job" id="job">
    <div className="max-width">
      <h2 className="title">Freelancer Name</h2>
      <br/> 
      <br/>
      <div className="job-content">
        <div className="column left">
        <img src={logo} alt="Logo" />
        </div>
        <div className="column right">
          <div className="text">What i can do ?<span className="typing-2" /></div>
          <p>Martins is an experienced web developer who specializes in JavaScript and frameworks like Angular, React, and Express.js (Node.js) as well as React Native. Martins is also an expert in creating responsive, mobile-first websites and has excellent communication and teamwork skills.</p>
          <a href="#">Contact me </a>
        </div>
      </div>
    </div>
    <br/> 
    <br/>
    <br/> 
    <div className="max-width">
        <h2 className="title">Who am i ?</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              
              <div className="text">Experience</div>
            <p>
            React Native, Bootstrap, Express.js, Node.js, MongoDB, Flux, React, Angular...
            Boston Consulting Group
           </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
             
              <div className="text">Location </div>
              <p>Freelancer Location</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              
              <div className="text">Contact </div>
              <div class="job-social-container">
             

                <a href="#"
                className="job-facebook social">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
      
                <a href="#"
                className="job-instagram social">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
                <br/>
                <br/>
                <div
                className="job-telephone social">
                <FontAwesomeIcon icon={faApple} size="3x" />
                <br/>
                <p>+216 XX XXX XXX</p>
                </div>
                
      </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="max-width">
        <h2 className="title">Rate me </h2> 
        <Rating
            onClick={handleRating}
            ratingValue={rating}
            size={60}
            label
            transition
            fillColor='red'
            emptyColor='white'
            className='foo'
          />
        </div>
      
    <hr/>
        
    </section>
  );
};