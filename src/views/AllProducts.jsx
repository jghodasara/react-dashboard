import axios from "axios";
import React from "react";
import Products from "../components/Products";
import "../assets/css/AllProducts.css";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  // The below function fetches the products data from the API and shows to the user
  async getProducts() {
    const response = await axios.get(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`
    );
    this.setState({ productsData: response.data });
  }

  render() {
    return (
      <div className="content">
        <div style={{ marginTop: 30 }}>
          <div className="img-wrapper-products">
            {this.state.productsData.length > 0
              ? this.state.productsData.map((product) => {
                  return (
                    <div
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
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

export default AllProducts;
