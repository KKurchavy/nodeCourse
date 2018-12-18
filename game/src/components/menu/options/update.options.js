import React, { Component } from "react";
import { connect } from "react-redux";

import { updateOne } from "../../../tools/server.tools";
import {
  updateDeveloper,
  updateManager,
  updateProject
} from "../../../actions/controllEntities.actions/updateEntities.action";

const OPTIONS = [];

class UpdateOptions extends Component {
  render() {
    return (
      <div className="upd-opt">

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
        <input
          type="text"
          onChange={evt => {
            OPTIONS[5] = evt.target.value;
          }}
        />
        <hr />


        <button className="end" onClick={updateClickHandler.bind(this)}>
          изменить
        </button>

      </div>
    );
  }
}

function updateClickHandler() {
  const { entity, type } = updateOne(OPTIONS);

  switch (type) {
    case "developer":
      this.props.updateDeveloper(entity);
      break;
    case "manager":
      this.props.updateManager(entity);
      break;
    case "project":
      this.props.updateProject(entity);
      break;
      
    default:
      return;
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  updateDeveloper: elem => dispatch(updateDeveloper(elem)),
  updateManager: elem => dispatch(updateManager(elem)),
  updateProject: elem => dispatch(updateProject(elem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateOptions);
