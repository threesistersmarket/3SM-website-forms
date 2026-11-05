# Three Sisters Market: messaging, voice and merchandising plan

## 1. What we looked at

- **Website**: the source for threesistersmarket.coop (this repo). The live URL and
  Instagram (@3smclt) couldn't be fetched from the build environment, so the
  Instagram comparison below is based on what the site links to and on how
  community co-op accounts usually post. **Confirm it against 8–10 recent
  @3smclt captions** and update the voice guide if anything differs.

## 2. Website messaging vs. Instagram: the gap

| | Website (before) | Instagram-style voice (target) |
|---|---|---|
| Tone | Formal, institutional ("Empower Our Community", "Making a Difference") | Warm, neighborly, first person ("we", "y'all are invited") |
| Focus | The organization and its milestones | Neighbors, food, events, West Blvd pride |
| Asks | "Join" on almost every section | Invitations: come by, come learn, come eat |
| Headline style | Abstract nouns ("Understanding Co-ops") | Plain talk that sounds spoken ("Our food, our say") |
| Language | "Food Justice" as the frame | Food sovereignty: ownership, control, culture |

## 3. Working brand voice

- **Neighborly.** Talk like someone on the porch, not a press release. Short sentences.
- **Rooted.** Name the place: West Blvd, Charlotte, the Carolinas, our elders.
- **Inviting, never pushy.** "Come on in" beats "Join now". Give one clear ask per page, plus the footer strip.
- **Proud and specific.** Real neighbors, real farms, real numbers. Skip the vague claims.
- **Honest about where we are.** The store isn't open yet. Say "coming", "building", "on the way".
- **Food sovereignty first.** Use food justice language inside the copy (access, equity, fairness), but lead with ownership and control.

Words to use: neighbors, own, our table, grown close to home, West Blvd, come on in.
Words to avoid: empower, leverage, stakeholders, underserved (say who and what instead).

## 4. Behavior stories by page

Each section in the code begins with a `Behavior story` comment. Here's a summary.

### Global
- **Join strip (above footer, every page except /ownership):** a visitor who's ready
  sees the same small invitation in the same spot and can act in one tap.

### Home (laid out like a first visit to the store)
1. **Hero**: get the gist in 5 seconds: a grocery store on the way, owned by neighbors, and you're welcome.
2. **Take a walk through the store** *(new)*: browse future aisles and picture your own grocery run.
3. **Our food, our say**: why West Blvd needs this, with a link to Food Sovereignty.
4. **Co-op model → Community → Gallery**: how it's owned, and who's already here.
5. **Timeline → Partners**: proof of progress.
6. **Three ways to grow with us**: own it, stock it, wear it. *(The volunteer card is gone.)*
7. **Membership → News**.

### Food Sovereignty (was Food Justice; /food-justice redirects here)
1. **Hero**: what the term means in plain words, and how it goes a step beyond food justice.
2. **Six big ideas**: the Nyéléni pillars, translated to West Blvd.
3. **From the shelf to the register**: where sovereignty shows up on a shopping trip (also a template for in-store signs).
4. **Neighbors are already doing the work**: proof that builds trust.
5. **Where to next?**: learn, shop, or give. Doesn't repeat the join ask.

### Learn (Co-op Education)
Its purpose is exploration. **No join asks on this page** (the global strip is the only one).
1. **Hero**: "Why food, why here, why together", with a link to the issues.
2. **The issues behind the aisles** *(new)*: food apartheid, redlining, Black
   cooperatives in the South, Black land loss, and the Three Sisters way. Each issue
   has four layers: what's happening, how we got here, who's pushing back, and where to read more.
3. **Co-op Principles**: how co-ops work.
4. **Gallery**.
5. **Keep Reading**: outside sources only. "Membership benefits" and "Getting involved" were removed.
- Removed: "Why Join Our Co-op?" and the large "Ready to Join Our Co-op?" CTA.

### Shop (new, /shop)
1. **Hero**: wear the West Blvd love; every purchase helps open the store.
2. **Collection grid**: filter by category, preview colors, see prices. Shows "Buy now" when live and "Coming soon: notify me" until then.
3. **Made to order**: explains dropshipping so buyers know why shipping takes a little longer.

### Donate
- New **"Give a gift you can wear"** section linking to the shop.

### Removed
- Volunteer section, footer link, FAQ, contact-form topic, and CTA card.

## 5. Merch via dropshipping: how to go live

1. Pick a print-on-demand provider. **Fourthwall** is the simplest standalone storefront.
   **Printful** or **Printify** with Shopify or Square Online give more control.
   (Square is already used for payments, see `netlify/functions/square-webhook.js`.)
2. Create the 6 starter products listed in `src/data/merch.js` (tee, hoodie, tote, cap, mug, sticker pack).
3. Paste each product URL into `url`, **or** set `VITE_MERCH_STORE_URL` in Netlify to link every card to the storefront.
4. Replace the illustrated mockups with real product photos via `image`.
5. **Prices in `merch.js` are placeholders.** Set them from the provider's base cost plus your margin.

## 6. Retail and online merchandising principles used

- **Storefront first.** The homepage hero is the shop window: say what it is, who it's for, and invite people in.
- **Aisle logic.** Group content the way a shopper moves: browse → understand → decide → act.
- **One primary action per section**, with a quieter secondary option.
- **Consistent placement.** The join strip always sits in the same spot, so people learn where to find it.
- **Make the price and the next step obvious.** Product cards show the price, options, and one button.
- **No dead ends.** Unavailable items offer "notify me" instead.
