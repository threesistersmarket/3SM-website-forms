import React from 'react';
import { IoBasket, IoStorefront, IoChatbubbles, IoCash } from 'react-icons/io5';

/*
 * Behavior story: A shopper wants to know what's different about buying
 * groceries here. They walk the store like a shopper would (shelf, register,
 * owner meeting, profits) and see where food sovereignty shows up at each stop.
 * This is also our template for in-store signage.
 */
const stops = [
  {
    icon: IoBasket,
    label: 'On the shelf',
    title: 'Grown close to home',
    body: "We're building relationships with Carolina farmers and local makers, especially Black-owned and neighborhood businesses, so more of what you buy is grown and made nearby.",
  },
  {
    icon: IoChatbubbles,
    label: 'In the aisles',
    title: 'Stocked by request',
    body: 'Owners and shoppers tell us what they want to see. The foods your family actually cooks belong here, not just what a distributor decides to send.',
  },
  {
    icon: IoStorefront,
    label: 'At the register',
    title: 'Fair prices, fair jobs',
    body: 'A store that answers to neighbors, not shareholders, can put fair prices and good local jobs first.',
  },
  {
    icon: IoCash,
    label: 'After the sale',
    title: 'Money that stays',
    body: 'When the co-op does well, owners vote on what happens with the surplus, whether that means patronage refunds, community programs, or reinvesting in the store.',
  },
];

function FoodSovereigntyOnTheShelf() {
  return (
    <section id="on-the-shelf" className="section scroll-mt-24 bg-accent-3/5">
      <div className="container">
        <div className="mb-12 max-w-3xl md:mb-16">
          <p className="eyebrow">Walk the store with us</p>
          <h2 className="mb-5 text-4xl font-bold md:text-6xl">From the shelf to the register</h2>
          <p className="text-lg">
            Food sovereignty isn't just a big idea. You can see it every time you shop.
          </p>
        </div>
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stops.map(({ icon: Icon, label, title, body }, i) => (
            <li key={title} className="relative rounded-lg bg-white p-6 natural-shadow">
              <div className="mb-4 flex items-center justify-between">
                <Icon className="h-8 w-8 text-accent-1" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest text-text-primary/70">
                  Stop {i + 1}
                </span>
              </div>
              <p className="text-sm font-semibold text-accent-3">{label}</p>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default FoodSovereigntyOnTheShelf;
