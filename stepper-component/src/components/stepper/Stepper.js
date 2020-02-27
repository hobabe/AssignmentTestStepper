import React from "react";
import "./Stepper.scss";

class Stepper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {activeStep: 1, stepState :  ["Supplier", "Basic Information", "Language", "Sample"]};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  };

  handleToggleClick(indexActive) {
    
    this.setState(state => ({
      activeStep: indexActive
    }))
  };

  loadClass(index){
    let state = this.state;
    let activeClass= index==state.activeStep||index<state.activeStep ?'visited___2DP activeTailAfter___3bp':'';
    return "root___jhJ ripple-effect "+activeClass+" horizontal___3z7 mdc-ripple-upgraded";
  }
  
  render() {
    let stepState = this.state.stepState;

    const listItems = stepState.map((stepName, i) => (
      <div
        className={this.loadClass(i)}
        role="button"
        onClick={this.handleToggleClick.bind(this, i)}
      >
        {i > 0 && i < stepState.length ? (
          <div class="tail___iPh tailBefore___3Bb"></div>
        ) : (
          ""
        )}

        {i < stepState.length - 1 ? (
          <div class="tail___iPh tailAfter___2AJ"></div>
        ) : (
          ""
        )}

        <div class="order___Kn1">{i}</div>
        <div class="description___2FJ">{stepName}</div>
      </div>
    ));

    return (
      <div class="stepper horizontal___1wo">
        {listItems}
        {/* <div class="root___jhJ ripple-effect visited___2DP activeTailAfter___3bp horizontal___3z7 mdc-ripple-upgraded" role="button">
            <div class="tail___iPh tailAfter___2AJ"></div>
            <div class="order___Kn1">1</div>
            <div class="description___2FJ">Supplier</div>
        </div>
        <div class="root___jhJ ripple-effect visited___2DP activeTailAfter___3bp horizontal___3z7 mdc-ripple-upgraded" role="button">
            <div class="tail___iPh tailBefore___3Bb"></div>
            <div class="tail___iPh tailAfter___2AJ"></div>
            <div class="order___Kn1">2</div>
            <div class="description___2FJ">Basic Infomation</div>
        </div>
        <div className={'root___jhJ ripple-effect visited___2DP active___j0s horizontal___3z7 mdc-ripple-upgraded'}role="button" >
            <div class="tail___iPh tailBefore___3Bb"></div>
            <div class="tail___iPh tailAfter___2AJ"></div>
            <div class="order___Kn1">3</div>
            <div class="description___2FJ">Lorem ispsum</div>
        </div>
        <div class="root___jhJ ripple-effect horizontal___3z7 mdc-ripple-upgraded"  role="button">
            <div class="tail___iPh tailBefore___3Bb"></div>
            <div class="order___Kn1">4</div>
            <div class="stepper description___2FJ">Language</div>
        </div> */}
      </div>
    );
  }
}
export default Stepper;
