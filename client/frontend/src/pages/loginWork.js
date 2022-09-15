import React, { useState, useEffect } from "react"
import { Link ,useNavigate} from "react-router-dom"
import "./styles.css"
import registers from "../img/register.svg"
import log from "../img/log.svg"
import axios from 'axios'

export const Signn = ({ location, history }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    city: "",
    phone :"",
    experience:"",
    speciality:""
  });
  const navigate = useNavigate();
  const {email,password,username,city,phone,experience,speciality}=user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [image, setImage] = useState("")

  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`http://localhost:8800/apis/signup`,user);
   // navigate('/signinTalent')
    window.location.reload();
  };
  const SignIn =  (e) => {
    e.preventDefault()
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post(`http://localhost:8800/apis/login`,{emaill,passwordd},config)
    .then(res=>{console.log("true");
        let token=res.data.token;
        window.localStorage.setItem("token",JSON.stringify(token));
        //console.log(token);
         navigate('/');
     })
    .catch((err)=>{console.log("false");
     alert("try again");})
   
}
  const [emaill,setEmaill]=useState("")
  const [passwordd,setPasswordd]=useState("")
  const [sign, setSign] = useState(false)
  return (
    <div>
    
    <div className={sign ? "sign-up-mode container-sign" : "container-sign"}>
    
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form forms" >
            <h2 className="title"> Sign in</h2>
           
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="email"
                name="emaill"
                value={emaill}
                onChange={(e) => setEmaill(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={passwordd}
                onChange={(e) => setPasswordd(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="btns solid"  onClick={SignIn}/>
            <Link to="/"><button className="btns solid">Home</button></Link>
           
          </form>

          <form className="sign-up-form forms" onSubmit={e => onSubmit(e)}>
            <h2 className="title">Sign up</h2>
            
           
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="username"
                name="username"
                value={username}
                onChange={e => onInputChange(e)}
              />
            </div>
            
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-phone"></i>
              <input
                type="text"
                placeholder="phone"
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="input-field">
            <i class="fas fa-city"></i>
              <input
                type="text"
                placeholder="city"
                name="city"
                value={city}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="experience"
                name="experience"
                value={experience}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="speciality"
                name="speciality"
                value={speciality}
                onChange={e => onInputChange(e)}
              />
            </div>
            
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onInputChange(e)}
              />
            </div>
            <input type="submit" className="btns" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              You should have an account to get new opportunities.
            </p>
            <button
              className="btns transparent"
              id="sign-up-btn"
              onClick={() => setSign(true)}
            >
              Sign up
            </button>
          </div>
          <img src={log} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>if you already have an account just sign in and join us</p>
            <button
              className="btns transparent"
              id="sign-in-btn"
              onClick={() => setSign(false)}
            >
              Sign in
            </button>
          </div>
          <img src={registers} className="image" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

//export default Sign