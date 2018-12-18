import React, { Component } from "react";
import { connect } from "react-redux";
import { fireDeveloper } from "../../actions/workers.actions/fireWorker.action";

class Developer extends Component {

  fireDeveloper(id) {
    this.props.fireDeveloper(id);
  }

  render() {
    const { id, name, surname, salary, level } = this.props.elem;

    return (
      <div className="worker developer">
        {name}
        <hr />
        {surname}
        <hr />
        {salary}$
        <hr />
        {level}
        <hr />
        <button className="fire-button" onClick={() => { this.fireDeveloper(id) }}>
          Уволить
        </button>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fireDeveloper: id => dispatch(fireDeveloper(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Developer);
