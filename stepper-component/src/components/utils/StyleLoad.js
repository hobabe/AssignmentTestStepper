import React from "react";
import { CLASS_BIDING_STEPS, CHAR,DEVICE } from "../constants/CommonConst";
//style load for step points or tabs steps
class StyleLoad extends React.Component {
  static loadClass(index, state) {

    //load class visited
    let activeClass =
      index < state.activeStep
        ? CLASS_BIDING_STEPS.visited +
          CHAR.space +
          CLASS_BIDING_STEPS.activeTailAfter
        : CHAR.empty;

    //check index active equals rendering step
    if (index === state.activeStep) {
      activeClass += CLASS_BIDING_STEPS.visited+ CHAR.space + CLASS_BIDING_STEPS.activated;
    }

    return (
      CLASS_BIDING_STEPS.rootStyle +
      CHAR.space +
      activeClass
    );
  }

  //check mobile size with
  static isMobileScreen() {
    if (window.innerWidth <= DEVICE.withMobile) {
      return true;
    } else {
      return false;
    }
  }
}
export default StyleLoad;
