import  "../App.css"
import React from 'react'
import logo from '../images/profile-1.jpg'
export const About = ()=>{
    return (
        <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About us</h2>
          <div className="about-content">
            <div className="column left">
              <img src={logo} alt />
            </div>
            <div className="column right">
              <div className="text">Why choosing TuniJob ? </div>
              <br/>
              <p><ul type="circle">
                <li>Our mission to create economic opportunities so people have better lives has taken us so much further.</li>
                <li>We create opportunities for anyone in the world to build their business, brand, or dream. </li>
                <li> We’re all about providing a conducive environment so that everyone can learn, thrive, and be the best version of themselves.</li>
                <li>Cultivate your design career on a national stage.</li>
                <li>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</li>
                </ul>
                </p>
              <a href="/signinWork">Join us!</a>
            </div>
          </div>
        </div>
      </section>
    )
}