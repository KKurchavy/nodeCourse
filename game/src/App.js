import React, { Component } from "react";
import { connect } from "react-redux";
import { entitiesAction } from "./actions/entities.action";
import { addMoney, getSalary } from "./actions/budget.actions";
import { removeProject } from "./actions/controllEntities.actions/removeEntities.action";

import { DevelopersList } from "./components/entities/DevelopersList";
import { ManagersList } from "./components/entities/ManagersList";
import { ProjectsList } from "./components/entities/ProjectsList";
import { Developers } from "./components/workers/Developers";
import { Managers } from "./components/workers/Managers";
import process from "./process/process"
import Budget from "./components/budget/Budget";
import Menu from "./components/menu/menu";

import "./App.css";

class App extends Component {
  componentWillMount() {
    this.props.entitiesLoad();
  }

  render() {
    const { entities, addProfit, getSalary, removeProject } = this.props;
    const proc = process(entities, addProfit, getSalary, removeProject);

    return (
      <div className="App">
        <header className="App-header">
          <Budget money={this.props.budget.money} />
        </header>

        <div className="game-run">
            <div className="button start" onClick={ proc.start } >START</div>
            <div className="button pause" onClick={ proc.stop }>PAUSE</div>
        </div>

        <Menu pressButton={this.props.pressButton} />

        <div className="list-box workers">
          <div className="column-name">Нанятые программисты</div>
          <div className="column-name">Нанятые менеджеры</div>
          <Developers workers={this.props.entities.workers} />
          <Managers workers={this.props.entities.workers} />
        </div>

        <div className="list-box applicants">
          <div className="column-name">Ненанятые программисты</div>
          <div className="column-name">Ненанятые менеджеры</div>
          <DevelopersList entities={this.props.entities} />
          <ManagersList entities={this.props.entities} />
        </div>

        <div className="list-box projects">
          <ProjectsList entities={this.props.entities} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  entitiesLoad: () => dispatch(entitiesAction()),
  addProfit: (money) => dispatch(addMoney(money)),
  getSalary: (money) => dispatch(getSalary(money)),
  removeProject: (id) => dispatch(removeProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
