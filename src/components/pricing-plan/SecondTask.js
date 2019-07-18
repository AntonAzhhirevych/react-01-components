import React from 'react';
import PricingPlan from './PricingPlan/PricingPlan';
import plan from '../pricing-plan/pricing-plan.json';

const SecondTask = () => {
  return <PricingPlan items={plan} />;
};

export default SecondTask;
