import { Component, Fragment } from "react";
import "./App.css";
import CoinFlip from "./components/CoinFlip";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CoinFlip />
      </Fragment>
    );
  }
}

export default App;
