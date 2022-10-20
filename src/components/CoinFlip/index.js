import { Component, Fragment } from "react";
import CoinFlipImg from "../CoinFlipImg";
import Data from "../Data/FlipCoinData";
import "./CoinFlip.css";

class CoinFlip extends Component {
  constructor() {
    super();

    this.state = {
      data: Data,
      randomImg: "",
      score: { head: 0, flip: 0 },
    };
  }

  coinFlip = () => {
    let randomNum = Math.floor(Math.random() * 2);
    let flip = this.state.score.flip;
    let head = this.state.score.head;
    if (randomNum) {
      this.setState({
        randomImg: this.state.data[randomNum],
        score: { head: head + 1, flip },
      });
    } else {
      this.setState({
        randomImg: this.state.data[randomNum],
        score: { head, flip: flip + 1 },
      });
    }
  };

  render() {
    return (
      <Fragment>
        <h1>Let's Flip A Coin!</h1>
        <div className="container">
          <CoinFlipImg randomImg={this.state.randomImg.image} />
          <button onClick={this.coinFlip}>Flip Me !</button>
          <p>
            <span>Flips : {this.state.score.flip} </span>
            <span>Heads: {this.state.score.head} </span>
          </p>
        </div>
      </Fragment>
    );
  }
}

export default CoinFlip;
