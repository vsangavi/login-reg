import React from "react";
//import Home from "./Home";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="divclass1">
      <p className="sign">
        <i className="fas fa-sign-in-alt"style={{color:'gray'}}></i>
        <span> </span>SIGN IN
      </p>
      <form className="form1">
        <input className="un" type="text" placeholder="Username" />

        <input className="pass" type="password" placeholder="Password" />
        <Link to="/home">
          <button className="submit">Login</button>
        </Link>
        <p className="reg">
          <Link to="/register">New user?Create an account!</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
