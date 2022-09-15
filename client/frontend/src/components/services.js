import  "../App.css"
import React from 'react'

export const Services = ()=>{
    return (
        <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">Our services</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <div className="text">1 <br/>Join us </div>
                <p>Are you looking for a job provider ? So, you should have an account on our platform . </p>
                < a href="/signinTalent" className="serv-link">Sign Up</a>
              </div>
            </div>
            <div className="card">
              <div className="box">
                
                <div className="text">2<br/>Search & Contact </div>
                <p>Specify your need , then start looking for a suitable job provider . Contact him to make a deal. </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
  
                <div className="text">3 <br/>Evaluate</div>
                <p>After you get your job done feel free to evaluate the job provider to make a better experience for users.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}