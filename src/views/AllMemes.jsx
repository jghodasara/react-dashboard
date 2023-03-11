import axios from "axios";
import React from "react";
import Memes from "../components/Memes";
import "../assets/css/AllMemes.css";

class Allmemes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memesData: [],
    };
  }

  componentDidMount() {
    this.getMemes();
  }

  // The below function fetches the memes data from the API and shows to the user
  async getMemes() {
    const response = await axios.get(`https://api.imgflip.com/get_memes`);
    console.log("MEMES", response);
    this.setState({ memesData: response.data.data.memes });
  }

  render() {
    return (
      <div className="content">
        <div style={{ marginTop: 30 }}>
          <div className="img-wrapper-memes">
            {this.state.memesData.length > 0
              ? this.state.memesData.map((meme) => {
                  return (
                    <div>
                      <Memes data={meme} />
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

export default Allmemes;
