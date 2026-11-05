import React from 'react';
import { Link } from 'react-router-dom';
import { IoNutrition, IoBasket, IoPeople, IoStorefront } from 'react-icons/io5';

/*
 * Behavior story: A visitor who is mostly wondering "what will I actually
 * be able to buy there?" walks the future store aisle by aisle, the way
 * they would on a first visit. They picture their own grocery run and
 * know the store is for them. This layout is also our model for in-store
 * aisle signs and online merchandising later on.
 */
const aisles = [
  {
    icon: IoNutrition,
    aisle: 'Aisle 1',
    title: 'Fresh produce',
    body: 'Fruits, greens, and vegetables, with as much as we can from Carolina farms.',
    image: 'https://static.wixstatic.com/media/c73eb8_b1a9cfa38d8a4bd98a03bae60428b47a~mv2.jpg',
  },
  {
    icon: IoBasket,
    aisle: 'Aisle 2',
    title: 'Everyday staples',
    body: 'The basics your kitchen runs on, at prices that make sense for the neighborhood.',
    image: 'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: IoPeople,
    aisle: 'Aisle 3',
    title: 'Local makers',
    body: 'Sauces, baked goods, and more from Charlotte growers and small businesses.',
    image: 'https://static.wixstatic.com/media/c73eb8_fb4bfb05acbc474a974c5f2b3c5eb2be~mv2.jpg',
  },
  {
    icon: IoStorefront,
    aisle: 'Up front',
    title: 'A place to gather',
    body: 'Not just a checkout line. Neighbors will run into each other here, and that is the point.',
    image: 'https://jaytxitcypjelvxzcaif.supabase.co/storage/v1/object/public/media//3SM%20group%20shot%203.jpg',
  },
];

function ShelfPreview() {
  return (
    <section id="shelves" className="section scroll-mt-24">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Coming to West Blvd</p>
            <h2 className="text-4xl font-bold md:text-6xl">Take a walk through the store</h2>
          </div>
          <p className="max-w-md text-lg">
            Owners help decide what goes on the shelves. Here's what we're stocking up on so far.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aisles.map(({ icon: Icon, aisle, title, body, image }) => (
            <article key={title} className="group overflow-hidden rounded-lg bg-white natural-shadow">
              <div className="relative h-44 overflow-hidden">
                <img src={image} alt="" className="h-full w-full object-cover group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded bg-accent-3 px-2 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  {aisle}
                </span>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-accent-1" aria-hidden="true" />
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-lg">
          Got a product you'd love to see?{' '}
          <Link to="/contact" className="font-semibold text-accent-3 underline">Tell us what to stock</Link>
        </p>
      </div>
    </section>
  );
}

export default ShelfPreview;
