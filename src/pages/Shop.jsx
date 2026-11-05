import React, { useState } from 'react';
import { IoShirt, IoHeart, IoCube, IoLeaf } from 'react-icons/io5';
import MerchMockup from '../components/MerchMockup';
import NewsletterModal from '../components/NewsletterModal';
import { categories, products, productUrl } from '../data/merch';

/*
 * Behavior story (hero): A visitor who loves what we're building wants to
 * show it. They see right away that buying merch helps open the store, then
 * scroll to the products.
 */
function ShopHero() {
  return (
    <section className="section bg-background-secondary/20">
      <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">The market shop</p>
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">Wear the West Blvd love</h1>
          <p className="mb-8 text-lg md:text-xl">
            Tees, totes, and kitchen goods for everybody helping grow Three Sisters Market. Every
            purchase helps us get the doors open, and it gets people asking about the co-op.
          </p>
          <a href="#shop-grid" className="btn-primary">Shop the collection</a>
        </div>
        <div className="grid grid-cols-2 gap-4" aria-hidden="true">
          {products.slice(0, 4).map((p) => (
            <div key={p.id} className="aspect-square rounded-lg bg-white p-4 natural-shadow">
              <MerchMockup type={p.mockup} color={p.colors[0]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
 * Behavior story (grid): A shopper browses like they would at a store
 * display. They filter by type, preview colors, check the price, and go
 * straight to checkout. Items that aren't live yet invite them to get
 * notified instead of leading to a dead end.
 */
function ProductCard({ product, onNotify }) {
  const [color, setColor] = useState(product.colors[0]);
  const href = productUrl(product);

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg bg-white natural-shadow">
      <div className="relative aspect-square bg-neutral-lighter p-8">
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-accent-1 px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}
        {product.image ? (
          <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
        ) : (
          <MerchMockup type={product.mockup} color={color} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1 flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <span className="text-lg font-semibold text-accent-3">${product.price}</span>
        </div>
        <p className="mb-4 text-sm text-text-primary/80">{product.tagline}</p>
        {product.colors.length > 1 && (
          <div className="mb-4 flex gap-2" role="radiogroup" aria-label={`${product.name} color`}>
            {product.colors.map((c) => (
              <button
                key={c}
                type="button"
                role="radio"
                aria-checked={c === color}
                aria-label={`Color ${c}`}
                onClick={() => setColor(c)}
                className={`h-7 w-7 rounded-full border-2 hover:scale-100 ${c === color ? 'border-accent-1' : 'border-text-primary/20'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        )}
        <div className="mt-auto">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-base">
              Buy now
            </a>
          ) : (
            <button type="button" onClick={onNotify} className="btn-secondary w-full text-base hover:scale-100">
              Coming soon: notify me
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function ShopGrid() {
  const [active, setActive] = useState('All');
  const [notifyOpen, setNotifyOpen] = useState(false);
  const shown = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <section id="shop-grid" className="section scroll-mt-24">
      <div className="container">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-bold md:text-5xl">Shop the collection</h2>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter products">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold hover:scale-100 ${
                  active === c
                    ? 'border-accent-3 bg-accent-3 text-white'
                    : 'border-border-primary/40 bg-white text-text-primary hover:border-accent-1'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <ProductCard key={p.id} product={p} onNotify={() => setNotifyOpen(true)} />
          ))}
        </div>
      </div>
      <NewsletterModal isOpen={notifyOpen} onClose={() => setNotifyOpen(false)} />
    </section>
  );
}

/*
 * Behavior story (how it works): A first-time buyer wants to know what
 * happens after checkout. They learn it's made to order, shipped to their
 * door, and that the proceeds support the co-op. That answers the "why does
 * shipping take a little longer?" question before they have to ask.
 */
const steps = [
  { icon: IoShirt, title: 'You pick it', body: 'Choose your item, size, and color.' },
  { icon: IoLeaf, title: 'We make it', body: "Each piece is printed when you order, so nothing goes to waste in a warehouse." },
  { icon: IoCube, title: 'It ships to you', body: "Your order ships straight to your door. Made-to-order items take a little extra time." },
  { icon: IoHeart, title: 'The co-op grows', body: 'Proceeds go toward opening Three Sisters Market.' },
];

function ShopHowItWorks() {
  return (
    <section className="section bg-accent-3/5">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-5xl">Made to order, with love</h2>
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="rounded-lg bg-white p-6 text-center natural-shadow">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-3/10">
                <Icon className="h-7 w-7 text-accent-3" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold text-accent-1">Step {i + 1}</p>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Shop() {
  return (
    <div className="min-h-screen bg-white">
      <ShopHero />
      <ShopGrid />
      <ShopHowItWorks />
    </div>
  );
}

export default Shop;
