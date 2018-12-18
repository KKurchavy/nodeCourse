import React, { Component } from "react";
import Manager from "./Manager";

export class Managers extends Component {
  renderTemplate() {
    const { managers } = this.props.workers;

    if (!managers.length) {
      return <p>Нет нанятых менеджеров...</p>;
    } else {
      return managers.map(elem => <Manager key={elem.id} elem={elem} />);
    }
  }

  render() {
    return <div className="list managers">{this.renderTemplate()}</div>;
  }
}
