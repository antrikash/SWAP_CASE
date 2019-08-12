import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    input: "",
    newLetter: "xsd"
  };

  handleChange = e => {
    const input = e.target.value;
    this.setState({
      input
    });
  };

  handleRadio = e => {
    if (e.target.value === "crazy") {
      const letter = this.state.input.split("");
      const newLetter = letter.map((elem, i) => {
        if (elem === elem.toLowerCase()) {
          return elem.toUpperCase();
        } else {
          return elem.toLowerCase();
        }
      });

      this.setState({
        newLetter: newLetter.join("")
      });
    } else {
      this.setState({
        newLetter: this.state.input
      });
    }
  };

  render() {
    return (
      <div>
        <input id="input" onChange={this.handleChange} />
        <input
          type="radio"
          value="crazy"
          name="crazy"
          onChange={this.handleRadio}
        />
        crazy
        <input
          type="radio"
          value="notCrazy"
          name="crazy"
          onChange={this.handleRadio}
        />
        Not crazy
        <br />
        <label>`You text is ${this.state.newLetter}`</label>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
