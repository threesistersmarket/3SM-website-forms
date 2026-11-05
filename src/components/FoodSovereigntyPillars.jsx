import React from 'react';
import { IoPeople, IoHeart, IoLocation, IoKey, IoSchool, IoLeaf } from 'react-icons/io5';

/*
 * Behavior story: A visitor wants to understand food sovereignty beyond a
 * slogan. They scan six short ideas, each one tied back to West Blvd, and
 * leave able to explain it to a friend.
 *
 * The six pillars come from the 2007 Declaration of Nyéléni, written by
 * farmers, fishers, and Indigenous peoples' movements from around the world.
 */
const pillars = [
  {
    icon: IoPeople,
    title: 'Food is for people',
    body: 'Food is a right, not just a product. Everyone deserves enough healthy, culturally meaningful food. That means people first, profits second.',
  },
  {
    icon: IoHeart,
    title: 'Respect the hands that feed us',
    body: 'Farmers, farmworkers, cooks, and grocery workers deserve fair pay and respect. That includes the Black and Brown growers who have fed the South for generations.',
  },
  {
    icon: IoLocation,
    title: 'Keep it local',
    body: 'Shorter trips from farm to shelf. More money circulating on West Blvd and less of it leaving for corporate headquarters.',
  },
  {
    icon: IoKey,
    title: 'Neighbors in control',
    body: 'The people who live here decide what our food system looks like. At a co-op, that means one owner, one vote.',
  },
  {
    icon: IoSchool,
    title: 'Pass the knowledge down',
    body: 'Growing, cooking, preserving, and sharing are skills our elders carried. We want to keep them alive and pass them on.',
  },
  {
    icon: IoLeaf,
    title: 'Work with the land',
    body: 'Like the Three Sisters (corn, beans, and squash), healthy food systems give back to the soil instead of using it up.',
  },
];

function FoodSovereigntyPillars() {
  return (
    <section id="pillars" className="section scroll-mt-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="eyebrow">Six big ideas</p>
          <h2 className="mb-5 text-4xl font-bold md:text-6xl">What food sovereignty looks like</h2>
          <p className="text-lg">
            These ideas were written by farmers and food movements from around the world. Here's what
            they mean on our corner of Charlotte.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <article
              key={title}
              className="rounded-lg border-t-4 border-accent-3 bg-white p-6 natural-shadow"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-3/10">
                  <Icon className="h-6 w-6 text-accent-3" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-accent-1">0{i + 1}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-text-primary/80">
          Source:{' '}
          <a
            href="https://nyeleni.org/IMG/pdf/DeclNyeleni-en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Declaration of Nyéléni (2007)
          </a>
        </p>
      </div>
    </section>
  );
}

export default FoodSovereigntyPillars;
