import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { Card, CardBody, Col } from "reactstrap";
import { db } from "../firebase";

const User = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    let uid = localStorage.getItem("uid"); // While login & register we are storing the user id in localStorage and here we are getting that user id to fetch information from firebase
    getCurrentUserData(uid);
  }, []);

  // The below function fetches the current users data from firebase.
  const getCurrentUserData = async (uid) => {
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const docs = await getDocs(q);
    docs.forEach((user) => {
      let data = user.data();
      setFName(data.firstName);
      setLName(data.lastName);
      setGender(data.gender);
      setEmail(data.email);
      setUid(data.uid);
    });
  };

  return (
    <div className="userContent">
      <Col md="8">
        <Card className="card-user">
          <div className="image"></div>
          <CardBody>
            <div className="author">
              <a href="/" onClick={(e) => e.preventDefault()}>
                <img
                  alt="..."
                  className="avatar border-gray"
                  src={require("../assets/img/default-avatar.png")}
                />
                <h5 className="title">
                  {fName} {lName}
                </h5>
              </a>
              <p className="description">{uid}</p>
              <p className="description">{email}</p>
              <p className="description">{gender}</p>
            </div>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default User;
