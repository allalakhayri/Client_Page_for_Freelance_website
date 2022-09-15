import  "../App.css"
import React from 'react'

export const HomeStart = ()=>{
    return (
        <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Find the best talent</div>
            <div className="text-2"></div>
            <div className="text-3">Fill your job in hours,<br/> not weeks. Search for free.</div>
            <a href="/signinTalent">Find work</a>
          </div>
        </div>
      </section>
    )
}