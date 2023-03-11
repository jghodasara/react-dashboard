import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import React from "react";

import { Card, CardBody, Row, Col, Table } from "reactstrap";
import Drinks from "../components/Drinks";
import Memes from "../components/Memes";
import Products from "../components/Products";
import { db } from "../firebase";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memesData: [],
      drinksData: [],
      productsData: [],
      usersData: [],
    };
  }

  componentDidMount() {
    this.getMemes();
    this.getDrinks();
    this.getMakeUpProducts();
    this.getAllUsers();
  }

  // The below function fetches the users data from the firebase and shows on the dashboard
  async getAllUsers() {
    const q = collection(db, "users");
    const docs = await getDocs(q);
    let userDocs = [];
    docs.forEach((doc) => {
      userDocs.push(doc.data());
    });
    this.setState({ usersData: userDocs });
  }

  // The below function fetches the memes data from the API and shows 3 memes to the user
  async getMemes() {
    const response = await axios.get(`https://api.imgflip.com/get_memes`);
    console.log("MEMES", response);
    let memesData = [];
    memesData.push(response.data.data.memes[3]);
    memesData.push(response.data.data.memes[1]);
    memesData.push(response.data.data.memes[2]);
    this.setState({ memesData: memesData });
  }

  // The below function fetches the drinks data from the API and shows 3 drinks to the user
  async getDrinks() {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
    );
    console.log("DRINKS", response);
    let drinksData = [];
    drinksData.push(response.data.drinks[0]);
    drinksData.push(response.data.drinks[1]);
    drinksData.push(response.data.drinks[2]);
    this.setState({ drinksData: drinksData });
  }

  // The below function fetches the products data from the API and shows 3 products to the user
  async getMakeUpProducts() {
    const response = await axios.get(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`
    );
    console.log("PRODUCTS", response);
    let productsData = [];
    productsData.push(response.data[0]);
    productsData.push(response.data[1]);
    productsData.push(response.data[2]);
    this.setState({ productsData: productsData });
  }

  render() {
    return (
      <div className="content">
        <h3>Registered Users</h3>
        <br />
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.usersData.map((user) => {
                      return (
                        <tr>
                          <td>{user.uid}</td>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.email}</td>
                          <td>{user.gender}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div style={{ marginTop: 30 }}>
          <h3>Top Drinks of the week</h3>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {this.state.drinksData.length > 0
              ? this.state.drinksData.map((drink) => {
                  return (
                    <div
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Drinks data={drink} />
                    </div>
                  );
                })
              : null}
          </div>
        </div>

        <div style={{ marginTop: 60 }} className="weatherContainer">
          <h3>Top Memes of the week</h3>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {this.state.memesData.length > 0
              ? this.state.memesData.map((meme) => {
                  return (
                    <div
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Memes data={meme} />
                    </div>
                  );
                })
              : null}
          </div>
        </div>

        <div style={{ marginTop: 30 }}>
          <h3>Top Products of the week</h3>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {this.state.productsData.length > 0
              ? this.state.productsData.map((product) => {
                  return (
                    <div
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: 350,
                      }}
                    >
                      <Products data={product} />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
