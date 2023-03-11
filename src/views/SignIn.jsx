import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/SignIn.css";
import { logInWithEmailAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  // The below function validates the data entered by the user and shows errors accordingly
  const onSubmitClicked = async () => {
    if (email === "") {
      alert("Please enter email Id");
    } else if (!isValidEmail(email)) {
      alert("Please enter valid email Id");
    } else if (password === "") {
      alert("Please enter password");
    } else {
      let res = await logInWithEmailAndPassword(email, password);
      if (res === true) {
        navigate("/admin/dashboard");
      }
    }
  };

  // The below function validates the users entered email and checks if the email is in correct format
  const isValidEmail = (email: string) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              onClick={onSubmitClicked}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-center mt-2">
            Dont have an account? <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
