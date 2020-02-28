import React from "react";
import StyleLoad from "../utils/StyleLoad";
import { CLASS_BIDING_STEPS, CHAR } from "../constants/DataCommon";
import "./Stepper.scss";

class Stepper extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.steps;
  }

  handleToggleClick(indexActive) {
    this.setState(state => ({
      activeStep: indexActive
    }));
  }

  render() {
    let stepState = this.state.stepState;

    const listItems = stepState.map((stepName, i) => (
      <div
        className={StyleLoad.loadClass(i, this.state)}
        onClick={this.handleToggleClick.bind(this, i)}
      >
        {i > 0 && i < stepState.length ? (
          <div className={CLASS_BIDING_STEPS.tail+CHAR.space+CLASS_BIDING_STEPS.tailBefore}></div>
        ) : (
          CHAR.empty
        )}

        {i < stepState.length - 1 ? (
          <div className={CLASS_BIDING_STEPS.tail+CHAR.space+CLASS_BIDING_STEPS.tailAfter}></div>
        ) : (
          CHAR.empty
        )}

        <div className={CLASS_BIDING_STEPS.order}>{i}</div>
        <div className={CLASS_BIDING_STEPS.description}>{stepName}</div>
      </div>
    ));

    return <div className={CLASS_BIDING_STEPS.stepper+CHAR.space+CLASS_BIDING_STEPS.horizontalRoot}>{listItems}</div>;
  }
}
export default Stepper;
