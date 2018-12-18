import React, { Component } from "react";
import Developer from './Developer';

export class DevelopersList extends Component {
  renderTemplate() {
    const { developers, isLoad } = this.props.entities;

    if (isLoad) {
      return <p>Loading...</p>;
    } else {
      return developers.map(elem => <Developer key={elem.id} elem={elem} />);
    }
  }


  render() {
    return <div className="list developers">{this.renderTemplate()}</div>;
  }
}
