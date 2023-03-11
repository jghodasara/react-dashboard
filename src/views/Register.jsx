import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Register.css";
import { useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase";

const Register = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  // The below function validates the data entered by the user and shows errors accordingly
  const onSubmitClicked = async () => {
    if (fName === "") {
      alert("Please enter first name");
      return false;
    } else if (lName === "") {
      alert("Please enter last name");
    } else if (gender === "") {
      alert("Please select gender");
    } else if (email === "") {
      alert("Please enter email Id");
    } else if (!isValidEmail(email)) {
      alert("Please enter valid email Id");
    } else if (password === "") {
      alert("Please enter password");
    } else {
      let response = await registerWithEmailAndPassword(
        fName,
        lName,
        gender,
        email,
        password
      );
      if (response === true) {
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
          <h3 className="Auth-form-title">Create an account</h3>
          <div className="text-center">
            Already registered? <Link to={"/signIn"}>Sign In</Link>
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              value={fName}
              onChange={(event) => {
                setFName(event.target.value);
              }}
              type="text"
              className="form-control mt-1"
              placeholder="e.g John"
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              value={lName}
              onChange={(event) => {
                setLName(event.target.value);
              }}
              type="text"
              className="form-control mt-1"
              placeholder="e.g Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Gender</label>
            <select
              onChange={(e) => {
                setGender(e.target.value);
              }}
              style={{
                width: "100%",
                height: 35,
                borderColor: "lightgray",
                borderRadius: 5,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <option>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
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
              placeholder="Password"
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
        </div>
      </form>
    </div>
  );
};

export default Register;
