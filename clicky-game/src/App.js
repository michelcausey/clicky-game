import React, { Component } from "react";
import clicks from "./clicks.json";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score"

const Styling = {
  background: "#defcec",
  color: "black",
  textAlign: "center"
};

class App extends Component {
  state = {
    clicks,
    count: 0
  };

  render() {
    return (
      <Wrapper>
        <div className="App">
          <div className="jumbotron jumbotron-fluid" style={Styling}>
            <div className="container">
              <h1 className="display-4">Clicky Game</h1>
              <p className="lead">only click each image once!</p>
            </div>
            <Score />
          </div>
        </div>

        {this.state.clicks.map(god => (
          <ImgCard id={god.id} image={god.image} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
