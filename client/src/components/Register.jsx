import React, { useState } from "react";
import "../styles/Register.css";
const Register = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  /*const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };*/
  return (
    <div className="divclass1">
      <p className="sign">
        <i className="fas fa-user-plus" style={{ color: "gray" }}></i>
        <span> </span>
        SIGN UP
      </p>
      <form className="form1">
        <input
          className="un"
          value={user}
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input
          className="un"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="pass"
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button className="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Register;
