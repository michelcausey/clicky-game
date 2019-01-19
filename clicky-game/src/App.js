import React, { Component } from "react";
import clicks from "./clicks.json";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import _ from "lodash";

const Styling = {
  jumbo: {
    background: "#ff2400",
    color: "#e2bf0b",
    textAlign: "center"
  },
  h1: {
    fontSize: "100px"
  },
  h2: {
    fontSize: "75px"
  },
  p: {
    fontSize: "50px"
  }
};

class App extends Component {
  state = {
    clicks,
    count: 0
  };

  cardIncrement = id => {
    // We always use the setState method to update a component's state
    let clickedCard = false;
    this.setState({
      count: this.state.count + 1
      
    });
    this.setState({
      clicks: this.state.clicks.map(god => {
        if (god.id === id) {
          if (god.clicked === true) {
            clickedCard = true;
          }
          god.clicked = true;
        }
        return god;
      })
    });
    if (clickedCard === true) {
      this.reset();
    }
    this.shuffle();
  };

  reset = () => {

    alert(`You've already clicked that one!`);

    this.setState({
      clicks: this.state.clicks.map(god => {
        god.clicked = false;
        return god;
      }),
      count: 0
    });

  };

  shuffle = () => {
    let godarray = this.state.clicks;
    let shufflegods = _.shuffle(godarray);
    this.setState({ clicks: shufflegods });
  };

  render() {
    return (
        <Wrapper>
          <div className="App">
            <div className="jumbotron jumbotron-fluid" style={Styling.jumbo}>
              <div className="container">
                <h1 className="display-4" style={Styling.h1}>
                  <b>Clicky Game</b>
                </h1>
                <p className="lead" style={Styling.p}>
                  <i>can you click each image once?</i>
                </p>
                <hr />
                <p>
                  <h2>Your Score: {this.state.count} out of 12</h2>
                </p>
              </div>
            </div>
          </div>

          {this.state.clicks.map(god => (
            <ImgCard
              id={god.id}
              image={god.image}
              cardIncrement={this.cardIncrement}
            />
          ))}
        </Wrapper>
    );
  }
}

export default App;
