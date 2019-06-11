import React from 'react';
import StepOne from './fromstep';
import StepTwo from './tostep';
import StepThree from './weightstep';
import StepFour from './shippingstep';
import Confirm from './confirmstep';

const steps = [
  <StepOne shippinglabelmakerContext={'from'} onAction={'handleNested'} />,
  <StepTwo shippinglabelmakerContext={'to'} onAction={'handleNested'} />,
  <StepThree shippinglabelmakerContext={'weight'} onAction={'handleState'} />,
  <StepFour shippinglabelmakerContext={'shippingOption'} onAction={'handleState'} />,
  <Confirm shippinglabelmakerContext={'shippinglabelmakerContext'} onAction={'confirm'} />
];
/*const steps = [
  StepOne, StepTwo, StepThree, StepFour, Confirm
]*/

export default steps;
