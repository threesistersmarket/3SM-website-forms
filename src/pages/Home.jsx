import React from 'react';
import Hero from '../components/Hero';
import ShelfPreview from '../components/ShelfPreview';
import PartnerSlider2 from '../components/PartnerSlider2';
import Timeline from '../components/Timeline';
import Community from '../components/Community';
import CoopModel from '../components/CoopModel';
import FoodInsecurity from '../components/FoodInsecurity';
import Membership from '../components/Membership';
import CallToAction from '../components/CallToAction';
import Gallery from '../components/Gallery';
import LatestNews from '../components/LatestNews';

/*
 * Home is laid out like a first visit to the store:
 * walk in (Hero) -> browse the aisles (ShelfPreview) -> learn why it's here
 * (FoodInsecurity) -> how it's owned (CoopModel) -> meet the neighbors
 * (Community, Gallery) -> see the progress (Timeline, Partners) -> pick a way
 * in (CallToAction, Membership) -> catch up on news (LatestNews).
 */
function Home() {
  return (
    <>
      <Hero />
      <ShelfPreview />
      <FoodInsecurity />
      <CoopModel />
      <Community />
      <Gallery />
      <Timeline />
      <PartnerSlider2 />
      <CallToAction />
      <Membership />
      <LatestNews />
    </>
  );
}

export default Home;
