import React from 'react';
import { Link } from 'react-router-dom';
import MerchMockup from './MerchMockup';

/*
 * Behavior story: A supporter who wants to give but would rather get
 * something back sees a second way to help. They buy a tee or tote, so
 * their support shows up on West Blvd every time they wear it.
 */
function DonateMerch() {
  return (
    <section className="section bg-background-secondary/20">
      <div className="container grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4" aria-hidden="true">
          <div className="aspect-square rounded-lg bg-white p-4 natural-shadow"><MerchMockup type="tee" color="#879e3c" /></div>
          <div className="aspect-square rounded-lg bg-white p-4 natural-shadow"><MerchMockup type="tote" color="#e6b374" /></div>
        </div>
        <div>
          <p className="eyebrow">Another way to give</p>
          <h2 className="mb-5 text-4xl font-bold md:text-5xl">Give a gift you can wear</h2>
          <p className="mb-8 text-lg">
            Tees, totes, and mugs that help fund the store. You rep the co-op, and the proceeds help
            us open the doors.
          </p>
          <Link to="/shop" className="btn-primary">Shop merch</Link>
        </div>
      </div>
    </section>
  );
}

export default DonateMerch;
