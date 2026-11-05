import React, { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

/*
 * Behavior story: A curious visitor (a student, a neighbor, a reporter)
 * wants to understand the problems behind the project, not be sold on it.
 * They pick one issue, open it, and read it in layers: what's happening,
 * how we got here, who's pushing back, and where to read more.
 * Nothing in this section asks them to join.
 */
const issues = [
  {
    id: 'food-apartheid',
    tag: 'Access',
    title: 'Food apartheid, not "food deserts"',
    summary: 'Why some neighborhoods have plenty of fast food and no full grocery store.',
    now: 'Many West Boulevard residents have gone years without a full-service grocery store nearby. Getting fresh food can mean two buses or a paid ride, while corner stores and fast food are a short walk away.',
    how: 'Farmer and activist Karen Washington helped popularize the term "food apartheid." Deserts happen naturally. This didn\'t. It came from decisions about where to invest, where to build, and which neighborhoods chains decided weren\'t worth serving.',
    response: 'Communities are building their own answers: co-op groceries, community gardens, mobile markets, and farm stands owned by the people they serve.',
    links: [
      { label: 'Karen Washington on food apartheid (Guernica)', href: 'https://www.guernicamag.com/karen-washington-its-not-a-food-desert-its-food-apartheid/' },
      { label: 'USDA Food Access Research Atlas', href: 'https://www.ers.usda.gov/data-products/food-access-research-atlas/' },
      { label: 'West Boulevard Market Assessment (PDF)', href: 'https://westblvdnc.org/wp-content/uploads/2020/05/WBNC-West-Boulevard-Market-Assessment-Strategic-Revitalization-Study.pdf' },
    ],
  },
  {
    id: 'redlining',
    tag: 'History',
    title: 'Redlining and the map we inherited',
    summary: 'How 1930s lending maps still shape where stores open today.',
    now: 'Neighborhoods that were cut off from investment generations ago often still have fewer businesses, fewer jobs, and fewer places to buy food.',
    how: 'In the 1930s, federal Home Owners\' Loan Corporation maps graded neighborhoods, including Charlotte\'s, and outlined many Black neighborhoods in red as "hazardous." Lending dried up there. Later, "urban renewal" and highway building broke up Black business districts like Charlotte\'s Brooklyn neighborhood.',
    response: 'Historians, organizers, and neighborhood coalitions are documenting this history so that new investment can repair the damage instead of repeating it.',
    links: [
      { label: 'Mapping Inequality: explore Charlotte\'s redlining map', href: 'https://dsl.richmond.edu/panorama/redlining/' },
    ],
  },
  {
    id: 'black-cooperatives',
    tag: 'Legacy',
    title: 'Black cooperatives in the South',
    summary: 'Co-ops have long been a survival strategy for Black communities.',
    now: 'Co-op groceries are opening again in Black neighborhoods across the country, built on a long tradition.',
    how: 'W.E.B. Du Bois studied Black cooperative businesses back in 1907. In 1967, the Federation of Southern Cooperatives formed to help Black farmers hold onto land and share resources. In 1969, Fannie Lou Hamer started Freedom Farm Cooperative in Mississippi so families could feed themselves when the people in power wouldn\'t. Economist Jessica Gordon Nembhard traces this history in her book "Collective Courage."',
    response: 'This legacy continues in today\'s food co-ops, credit unions, and land trusts.',
    links: [
      { label: 'Federation of Southern Cooperatives', href: 'https://www.federation.coop/' },
      { label: 'Fannie Lou Hamer', href: 'https://en.wikipedia.org/wiki/Fannie_Lou_Hamer' },
    ],
  },
  {
    id: 'land',
    tag: 'Land',
    title: 'Who gets to farm',
    summary: 'Black farmers lost most of their land over the 20th century.',
    now: 'Today only a small share of U.S. farmers are Black, even though Black farmers once owned millions of acres across the South.',
    how: 'Land was lost through discrimination in federal farm lending, legal loopholes around inherited "heirs\' property," and pressure to sell. In 1999, the Pigford v. Glickman settlement acknowledged USDA discrimination against Black farmers.',
    response: 'Land trusts, farmer co-ops, and buyers who commit to sourcing from Black growers are helping new farmers get started and keep their land.',
    links: [
      { label: 'Pigford v. Glickman', href: 'https://en.wikipedia.org/wiki/Pigford_v._Glickman' },
    ],
  },
  {
    id: 'three-sisters',
    tag: 'Growing',
    title: 'The Three Sisters way',
    summary: 'Corn, beans, and squash: an Indigenous model of growing together.',
    now: 'Modern farming often plants one crop over huge acreage and leans on chemical inputs to keep the soil producing.',
    how: 'Haudenosaunee and many other Indigenous nations plant corn, beans, and squash together. The corn gives the beans something to climb. The beans put nitrogen back into the soil. The squash shades the ground and holds in moisture. Each crop makes the others stronger.',
    response: 'Indigenous food sovereignty movements and regenerative growers are bringing these practices back. We named the market after this idea.',
    links: [
      { label: 'Three Sisters (agriculture)', href: 'https://en.wikipedia.org/wiki/Three_Sisters_(agriculture)' },
    ],
  },
];

function Layer({ label, children }) {
  return (
    <div>
      <h4 className="mb-1 text-sm font-semibold uppercase tracking-widest text-accent-1">{label}</h4>
      <p>{children}</p>
    </div>
  );
}

function CoopEducationIssues() {
  const [open, setOpen] = useState(issues[0].id);

  return (
    <section id="issues" className="section scroll-mt-24 bg-background-secondary/10">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Dig in</p>
          <h2 className="mb-5 text-4xl font-bold md:text-6xl">The issues behind the aisles</h2>
          <p className="text-lg">
            A grocery store is never just a grocery store. These are the histories and systems that
            explain why West Boulevard needs one, and how communities everywhere are responding.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {issues.map((issue) => {
            const isOpen = open === issue.id;
            return (
              <article key={issue.id} id={issue.id} className="rounded-lg bg-white natural-shadow scroll-mt-24">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : issue.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${issue.id}-panel`}
                    className="flex w-full items-center gap-4 p-6 text-left hover:scale-100"
                  >
                    <span className="hidden sm:inline-block rounded-full bg-accent-3/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-3">
                      {issue.tag}
                    </span>
                    <span className="flex-1">
                      <span className="block text-xl font-bold md:text-2xl">{issue.title}</span>
                      <span className="block text-text-primary/80">{issue.summary}</span>
                    </span>
                    <IoChevronDown
                      className={`h-6 w-6 shrink-0 text-accent-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div id={`${issue.id}-panel`} className="grid gap-6 border-t border-border-primary/10 p-6 md:grid-cols-2">
                    <Layer label="What's happening">{issue.now}</Layer>
                    <Layer label="How we got here">{issue.how}</Layer>
                    <Layer label="Who's pushing back">{issue.response}</Layer>
                    <div>
                      <h4 className="mb-1 text-sm font-semibold uppercase tracking-widest text-accent-1">Go deeper</h4>
                      <ul className="flex flex-col gap-1">
                        {issue.links.map((l) => (
                          <li key={l.href}>
                            <a href={l.href} target="_blank" rel="noopener noreferrer" className="underline">
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CoopEducationIssues;
