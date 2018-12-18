import React, { Component } from "react";

export class ProjectsList extends Component {
  renderTemplate() {
    const { projects, isLoad } = this.props.entities;

    if (isLoad) {
      return <p>Loading...</p>;
    } else {
      return projects.map(elem => this.createManager(elem));
    }
  }

  createManager(elem) {
    return (
      <div key={elem.id} className="worker developer">
        {elem.name}
        <hr />
        {elem.linesCount}
        <hr />
        {elem.cost}$
      </div>
    );
  }

  render() {
    return this.renderTemplate();
  }
}
