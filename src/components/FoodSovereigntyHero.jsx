import React from 'react';
import FoodIllustration from './FoodIllustration';

/*
 * Behavior story: A visitor who heard "food sovereignty" on our Instagram
 * or at an event lands here and, within one screen, learns what the words
 * mean in plain language and why a grocery store on West Blvd is part of it.
 * They scroll on to see what it looks like in real life.
 */
function FoodSovereigntyHero() {
  return (
    <section className="section relative overflow-hidden bg-background-secondary/20">
      <div className="absolute -top-10 -right-10 w-48 h-48 opacity-20" aria-hidden="true">
        <FoodIllustration type="sunflower" />
      </div>
      <div className="container relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="fade-in">
            <p className="eyebrow">Our food, our say</p>
            <h1 className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl text-text-primary">
              Food Sovereignty
            </h1>
            <p className="mb-4 text-lg md:text-xl">
              Food sovereignty means the people who eat the food get a say in how it's grown,
              where it comes from, and who profits from it.
            </p>
            <p className="text-lg">
              For decades, West Boulevard neighbors have had to leave the neighborhood just to buy
              groceries. Food justice asks for fair access. Food sovereignty goes one step further:
              we own the store, we choose what's on the shelves, and the money stays here.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pillars" className="btn-primary">What it looks like</a>
              <a href="#on-the-shelf" className="btn-secondary">See it in the store</a>
            </div>
          </div>
          <div className="relative scale-in">
            <img
              src="https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//garden%20shot.jpg"
              alt="Neighbors tending a community garden on West Boulevard"
              className="w-full aspect-[4/3] object-cover organic-border natural-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodSovereigntyHero;
