import React from 'react';
import Stepper from '../stepper/Stepper'
import { SIMPLE_STEPS } from '../constants/CommonConst';
function App() {
  return (
    <Stepper steps={SIMPLE_STEPS}/>
  );
}

export default App;
