import React from 'react';
import CoopEducationHero from '../components/CoopEducationHero';
import CoopEducationIssues from '../components/CoopEducationIssues';
import CoopEducationPrinciples from '../components/CoopEducationPrinciples';
import CoopEducationResources from '../components/CoopEducationResources';
import Gallery2 from '../components/Gallery2';

function CoopEducation() {
  return (
    <div className="min-h-screen bg-white">
      <CoopEducationHero />
      <CoopEducationIssues />
      <CoopEducationPrinciples />
      <Gallery2 />
      <CoopEducationResources />
    </div>
  );
}

export default CoopEducation;
