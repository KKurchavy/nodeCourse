import React, { Component } from "react";
import Manager from './Manager';


export class ManagersList extends Component {
  renderTemplate() {
    const { managers, isLoad } = this.props.entities;

    if (isLoad) {
      return <p>Loading...</p>;
    } else {
      return managers.map(elem => <Manager key={elem.id} elem={elem} />);
    }
  }


  render() {
    return (<div className="list managers">{ this.renderTemplate() }</div>)
  }
}
