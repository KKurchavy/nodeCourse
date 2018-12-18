import React, { Component } from "react";
import { connect } from "react-redux";
import { fireManager } from "../../actions/workers.actions/fireWorker.action";

class Developer extends Component {

  fireManager(id) {
    this.props.fireManager(id);
  }

  render() {
    const { id, name, surname, experience, salary } = this.props.elem;

    return (
      <div className="worker developer">
        {name}
        <hr />
        {surname}
        <hr />
        {experience}
        <hr />
        {salary}$
        <hr />
        <button className="fire-button" onClick={() => { this.fireManager(id) }}>
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
  fireManager: id => dispatch(fireManager(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Developer);
