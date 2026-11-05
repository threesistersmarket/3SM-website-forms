import React from 'react';
import DonateHero from '../components/DonateHero';
import DonateWays from '../components/DonateWays';
import DonateImpact from '../components/DonateImpact';
import DonateCallToAction from '../components/DonateCallToAction';
import DonateMerch from '../components/DonateMerch';


function Donate() {
  return (
    <div className="min-h-screen bg-white">
      <DonateHero />
      <DonateWays />
      <DonateImpact />
      <DonateMerch />
      <DonateCallToAction />
    </div>
  );
}

export default Donate;