import {Header} from'../components/header'
import { HomeStart } from '../components/homestart'
import { About } from '../components/about'
import { Services } from '../components/services'
import { Skills } from '../components/skills'
//import { Teams } from '../components/teams'
import { Contact } from '../components/contact'
import {Footer} from'../components/footer'
import React from 'react'

export const Home = ()=>{
    return (
 <div>
  <div className="scroll-up-btn">
    <i className="fas fa-angle-up" />
  </div>
  <Header/>
  <HomeStart/>
  
  <Services/>
  <About/>
  <Skills/>
  
  <Contact/>
  <Footer/> 
 </div> 
    )
}