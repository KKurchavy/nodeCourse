import React, { Component } from "react";
import { connect } from "react-redux";
import { hireDeveloper } from "../../actions/workers.actions/hireWorker.action";

class Developer extends Component {

  hireDeveloper(id) {
    this.props.hireDeveloper(id);
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
        <button className="hire-button" onClick={() => { this.hireDeveloper(id) }}>
          Нанять
        </button>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  hireDeveloper: id => dispatch(hireDeveloper(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Developer);
