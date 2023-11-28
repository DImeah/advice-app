import React from "react";
import "./app.css";
import axios from "axios";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchRandomAdvice();
  }

  fetchRandomAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <>
        <div className="app">
          <div className="card">
            <h1 className="heading">{advice}</h1>
            <button className="button" onClick={this.fetchRandomAdvice}>
              <span>GIVE ME ADVICE</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
