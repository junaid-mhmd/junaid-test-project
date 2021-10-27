import React,{useState} from "react";
import axios from "axios";
import { BaseUrl } from "../utils/Base";
import './Login.css'

function Login() {
    const [loginData,setLoginData] = useState({email: null,password: null})

    const handleChange = (event)=> {
        setLoginData({...loginData, [event.target.name]: event.target.value})
    }

    const handleLogin = (event)=> {
    event.preventDefault();

    var data = JSON.stringify(loginData)


     var config = {
       method: "POST",
       url: BaseUrl + '/admin/login/',
       headers: {
           'Content-Type': 'application/json', 
       },
       data: data,
     };
     axios(config).then((res) => {

        let status = res.data.status
       if(status === "success"){
            localStorage.setItem("login_data",res.data.token)
            window.location.href = "/"
       }

     });

    }

  return (
      <div className="login">
          <div className="container">
              <div className="body">
                  <div className="loginBox">
                      <form onSubmit={handleLogin}>
                          <input required onChange={handleChange} name="email" type="email" placeholder="Enter your email" />
                          <input required onChange={handleChange} name="password" type="password" placeholder="Enter your password" />
                          <button type="submit">Login</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Login;
