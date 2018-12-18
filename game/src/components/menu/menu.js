import React, { Component } from "react";
import { connect } from "react-redux";

import { pressAddButton } from "../../actions/pressButton.action";
import { pressRemoveButton } from "../../actions/pressButton.action";
import { pressUpdateButton } from "../../actions/pressButton.action";

import AddOptions from "./options/add.options";
import RemoveOptions from "./options/remove.options";
import UpdateOptions from "./options/update.options";

class Menu extends Component {
  renderTemplate() {
    const { button } = this.props.pressButton;

    switch (button) {
      case "add":
        return <AddOptions />;
      case "remove":
        return <RemoveOptions />;
      case "update":
        return <UpdateOptions />;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="controller">
        <div className="menu">
          <button className="add" onClick={addHandler.bind(this)}>
            добавить
          </button>
          <button className="update" onClick={updateHandler.bind(this)}>
            изменить
          </button>
          <button className="delete" onClick={removeHandler.bind(this)}>
            удалить
          </button>
        </div>
        <div className="options">{this.renderTemplate()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  pressAddButton: () => dispatch(pressAddButton()),
  pressRemoveButton: () => dispatch(pressRemoveButton()),
  pressUpdateButton: () => dispatch(pressUpdateButton())
});

function addHandler() {
  this.props.pressAddButton();
}

function updateHandler() {
  this.props.pressUpdateButton();
}

function removeHandler() {
  this.props.pressRemoveButton();
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
