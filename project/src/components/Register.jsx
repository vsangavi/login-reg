import React from "react";
import "../styles/Register.css";
const Register = () => {
  return (
    <div className="divclass1">
      <p className="sign">
        <i className="fas fa-user-plus"style={{color:'gray'}}></i>
        <span> </span>
        SIGN UP
      </p>
      <form className="form1">
        <input className="un" type="text" placeholder="Username" />
        <input className="un" type="email" placeholder="Email" />
        <input className="pass" type="password" placeholder="Password" />
        <button className="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Register;
