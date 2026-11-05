import React from 'react';
import { Link } from 'react-router-dom';
import { IoBook, IoShirt, IoHeart } from 'react-icons/io5';

/*
 * Behavior story: A visitor who finished the page and wants more picks
 * their own next step: go deeper, wear it, or give. The join invitation
 * already lives in the footer strip, so this section doesn't repeat it.
 */
const paths = [
  { to: '/coop-education', icon: IoBook, title: 'Go deeper', body: 'Read about food apartheid, Black cooperative history, and the Three Sisters way of growing.', cta: 'Start learning' },
  { to: '/shop', icon: IoShirt, title: 'Wear it', body: 'Tees, totes, and more. Every purchase helps build the store.', cta: 'Shop merch' },
  { to: '/donate', icon: IoHeart, title: 'Give', body: 'A gift of any size helps us get the doors open on West Blvd.', cta: 'Donate' },
];

function FoodSovereigntyNext() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-5xl">Where to next?</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {paths.map(({ to, icon: Icon, title, body, cta }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col rounded-lg border border-border-primary/30 bg-white p-6 natural-shadow hover:border-accent-1"
            >
              <Icon className="mb-4 h-8 w-8 text-accent-3 group-hover:text-accent-1" aria-hidden="true" />
              <h3 className="mb-2 text-2xl font-bold text-text-primary">{title}</h3>
              <p className="mb-4 flex-1 text-text-primary">{body}</p>
              <span className="font-semibold text-accent-3 group-hover:text-accent-1">{cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoodSovereigntyNext;
