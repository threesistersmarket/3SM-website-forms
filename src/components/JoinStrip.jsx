import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoChevronForward } from 'react-icons/io5';

/*
 * Behavior story: A visitor who has read enough on any page and wants to
 * take part sees the same small, friendly invitation in the same spot
 * right above the footer, every time, and can act on it in one tap.
 * It's skipped on /ownership, where they're already on the sign-up page.
 */
function JoinStrip() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/ownership')) return null;

  return (
    <div className="bg-accent-3 px-[5%] text-white">
      <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-base md:text-lg">
          <span className="font-bold">Ready to join our co-op?</span>{' '}
          <span className="text-white/90">Own a piece of the neighborhood grocery store.</span>
        </p>
        <Link
          to="/ownership"
          className="inline-flex items-center gap-1 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-accent-3 hover:text-accent-1 whitespace-nowrap"
        >
          Become an owner
          <IoChevronForward aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export default JoinStrip;
