import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
import "./App.css";

class App extends Component {
  state = {
    userName: "Andriy"
  };
  onChageHandler = event => {
    this.setState({ userName: event.target.value });
  };
  remove = index => {
    const str = this.state.userName;
    const userName = str.slice(0, index) + str.slice(index + 1);
    this.setState({ userName });
  };

  render() {
    const nameChars = this.state.userName.split("");
    return (
      <div className="App">
        <UserInput
          onChange={this.onChageHandler}
          userName={this.state.userName}
        />
        <Validation userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <hr />
        {nameChars.map((e, i) => (
          <Char symbol={e} key={e + i} remove={() => this.remove(i)} />
        ))}
      </div>
    );
  }
}

export default App;
