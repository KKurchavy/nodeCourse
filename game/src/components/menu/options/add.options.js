import React, { Component } from "react";
import { connect } from "react-redux";

import { addOne } from "../../../tools/server.tools";
import {
  addDeveloper,
  addManager,
  addProject
} from "../../../actions/controllEntities.actions/addEntities.action";

const OPTIONS = [];

class AddOptions extends Component {
  render() {
    return (
      <div className="add-opt">
        <input
          type="text"
          className="type"
          defaultValue="тип"
          onChange={evt => {
            OPTIONS[0] = evt.target.value;
          }}
        />
        <input
          type="text"
          onChange={evt => {
            OPTIONS[1] = evt.target.value;
          }}
        />
        <input
          type="text"
          onChange={evt => {
            OPTIONS[2] = evt.target.value;
          }}
        />
        <input
          type="text"
          onChange={evt => {
            OPTIONS[3] = evt.target.value;
          }}
        />
        <input
          type="text"
          onChange={evt => {
            OPTIONS[4] = evt.target.value;
          }}
        />
        <hr />
        <button className="end" onClick={addClickHandler.bind(this)}>
          добавить
        </button>
      </div>
    );
  }
}

function addClickHandler() {
  const { entity, type } = addOne(OPTIONS);

  switch (type) {
    case "developer":
      this.props.addDeveloper(entity);
      break;
    case "manager":
      this.props.addManager(entity);
      break;
    case "project":
      this.props.addProject(entity);
      break;
    default:
      return;
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addDeveloper: elem => dispatch(addDeveloper(elem)),
  addManager: elem => dispatch(addManager(elem)),
  addProject: elem => dispatch(addProject(elem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOptions);
