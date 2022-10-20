import { Component, Fragment } from "react";

class CoinFlipImg extends Component {
  render() {
    return (
      <Fragment>
        <img src={this.props.randomImg} alt="" />
      </Fragment>
    );
  }
}

export default CoinFlipImg;
