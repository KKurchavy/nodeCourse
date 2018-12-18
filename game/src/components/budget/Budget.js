import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div className="info">
        <div className="butget">{this.props.money}$</div>
        <div className="company-name">MY COMPANY</div>
      </div>
    );
  }
}
