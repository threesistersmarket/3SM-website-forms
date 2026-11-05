import React from 'react';
import FoodSovereigntyHero from '../components/FoodSovereigntyHero';
import FoodSovereigntyPillars from '../components/FoodSovereigntyPillars';
import FoodSovereigntyOnTheShelf from '../components/FoodSovereigntyOnTheShelf';
import FoodSovereigntyImpact from '../components/FoodSovereigntyImpact';
import FoodSovereigntyNext from '../components/FoodSovereigntyNext';

function FoodSovereignty() {
  return (
    <div className="min-h-screen bg-white">
      <FoodSovereigntyHero />
      <FoodSovereigntyPillars />
      <FoodSovereigntyOnTheShelf />
      <FoodSovereigntyImpact />
      <FoodSovereigntyNext />
    </div>
  );
}

export default FoodSovereignty;
