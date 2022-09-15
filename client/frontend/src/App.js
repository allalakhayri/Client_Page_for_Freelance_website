import './App.css';
import {BrowserRouter as Router , Route ,Routes} from "react-router-dom";
import {Home} from './pages/home'
import {Sign}from './pages/login'
import {Signn}from './pages/loginWork'
import {Adminn} from './components/Admin'
import React from 'react'
import { VoirWorker } from './pages/voirWorker';
function App() {
  return (
   <Router>
     <Routes>
       <Route exact path="/" element={<Home />}  />
       <Route exact path="/admin/*" element={<Adminn />}  />
       <Route exact path="/signinTalent" element={<Sign />}  />
       <Route exact path="/signinWork" element={<Signn />}  />
       <Route exact path="/api/services/:id" element={<VoirWorker />} />
       <Route path='/search/:keyword' element={<Home />}  />
     </Routes>
   </Router>
  );
 }


export default App;
