import React from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import FoodIllustration from './FoodIllustration';

/*
 * Behavior story: A visitor who's ready to help but isn't sure how scans
 * three clear paths (own it, stock it, wear it), picks the one that fits,
 * and lands on the right page.
 */
function CallToAction() {
  const opportunities = [
    {
      title: "Own a piece of it",
      description: "Co-op owners get a vote, a voice, and a real stake in the neighborhood grocery store.",
      image: "https://static.wixstatic.com/media/c73eb8_3b97634282b44d2aa514d113de567f59~mv2.jpg",
      buttonText: "Become an owner",
      buttonLink: "/ownership"
    },
    {
      title: "Stock our shelves",
      description: "Are you a farmer, grower, or maker? We want local goods on our shelves. Let's talk.",
      image: "https://static.wixstatic.com/media/c73eb8_68d7ac7c88d34648a425993f3ecec698~mv2.jpg",
      buttonText: "Become a supplier",
      buttonLink: "/contact"
    },
    {
      title: "Wear the mission",
      description: "Tees, totes, and mugs made to order. Every purchase helps open the store.",
      image: "https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//3SM%20group%20shot%202.jpg",
      buttonText: "Shop merch",
      buttonLink: "/shop"
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 wood-texture opacity-15"></div>
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
            Three ways to grow with us
          </h2>
          <div className="absolute top-0 right-10 w-24 h-24 opacity-20">
            <FoodIllustration type="sunflower" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-accent-3/20 group-hover:bg-accent-3/0 transition-colors duration-300 z-10"></div>
                <img
                  src={opportunity.image}
                  alt={opportunity.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-accent-3">
                  {opportunity.title}
                </h3>
                <p className="mb-6 text-text-primary">
                  {opportunity.description}
                </p>
                <Link 
                  to={opportunity.buttonLink}
                  className="inline-flex items-center gap-2 text-accent-3 font-semibold group-hover:text-accent-1 transition-colors duration-300"
                >
                  {opportunity.buttonText}
                  <IoChevronForward className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-20">
                <FoodIllustration type="leaf" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CallToAction;