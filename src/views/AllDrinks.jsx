import axios from "axios";
import React from "react";
import Drinks from "../components/Drinks";
import "../assets/css/AllDrinks.css";

class AllDrinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinksData: [],
    };
  }

  componentDidMount() {
    this.getDrinks();
  }

  // The below function fetches the drinks data from the API and shows to the user
  async getDrinks() {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
    );
    console.log("DRINKS", response);
    this.setState({ drinksData: response.data.drinks });
  }

  render() {
    return (
      <div className="content">
        <div style={{ marginTop: 30 }}>
          <div className="img-wrapper-drinks">
            {this.state.drinksData.length > 0
              ? this.state.drinksData.map((drink) => {
                  return (
                    <div>
                      <Drinks data={drink} />
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

export default AllDrinks;
