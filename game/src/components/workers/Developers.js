import React, { Component } from "react";
import Developer from './Developer';

export class Developers extends Component {
  renderTemplate() {
    const { developers } = this.props.workers;

    if (!developers.length) {
      return <p>Нет нанятых разработчиков...</p>;
    } else {
      return developers.map(elem => <Developer key={elem.id} elem={elem} />);
    }
  }


  render() {
    return <div className="list developers">{this.renderTemplate()}</div>;
  }
}
