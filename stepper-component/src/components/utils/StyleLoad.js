import React from "react";
import { CLASS_BIDING_STEPS, CHAR } from "../constants/DataCommon";
//style load for step points or tabs steps
class StyleLoad extends React.Component {
  static loadClass(index, state) {
    let activeClass =
      index < state.activeStep
        ? CLASS_BIDING_STEPS.visited +
          CHAR.space +
          CLASS_BIDING_STEPS.activeTailAfter
        : CHAR.empty;
    if (index === state.activeStep) {
      activeClass += CLASS_BIDING_STEPS.visited;
    }
    return (
      CLASS_BIDING_STEPS.rootStyle +
      CHAR.space +
      activeClass +
      CHAR.space +
      CLASS_BIDING_STEPS.horizontal 
    );
  }
}
export default StyleLoad;
