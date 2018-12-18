import React, { Component } from "react";
import { connect } from "react-redux";

import { removeOne } from "../../../tools/server.tools";
import {
  removeDeveloper,
  removeManager,
  removeProject
} from "../../../actions/controllEntities.actions/removeEntities.action";

const OPTIONS = [];
class RemoveOptions extends Component {
  render() {
    return (
      <div className="del-opt">

        <input
          type="text"
          defaultValue="тип"
          onChange={evt => {
            OPTIONS[0] = evt.target.value;
          }}
        />

        <input
          type="text"
          defaultValue="ID"
          onChange={evt => {
            OPTIONS[1] = evt.target.value;
          }}
        />

        <hr />
        <button className="end" onClick={removeClickHandler.bind(this)}>
          удалить
        </button>
      </div>
    );
  }
}

function removeClickHandler() {
  const { id, type } = removeOne(OPTIONS);

  switch (type) {
    case "developer":
      this.props.removeDeveloper(id);
      break;
    case "manager":
      this.props.removeManager(id);
      break;
    case "project":
      this.props.removeProject(id);
      break;
    default:
      return;
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  removeDeveloper: elem => dispatch(removeDeveloper(elem)),
  removeManager: elem => dispatch(removeManager(elem)),
  removeProject: elem => dispatch(removeProject(elem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveOptions);
