/*
 * Merch catalog.
 *
 * Built for print-on-demand dropshipping (Printful, Printify, Fourthwall,
 * Shopify + Printful, etc.). Each item is made when someone orders it and
 * ships straight from the provider, so the co-op holds no inventory.
 *
 * To go live:
 *   1. Set up the products with your dropship provider.
 *   2. Paste each product's checkout/product URL into `url` below, OR set
 *      VITE_MERCH_STORE_URL in Netlify and leave `url` empty. The card
 *      then links to the storefront home.
 *   3. Swap the mockup for a real photo by setting `image`.
 *
 * Prices below are PLACEHOLDERS. Confirm them against the provider's base cost.
 */
export const MERCH_STORE_URL = import.meta.env.VITE_MERCH_STORE_URL || '';

export const categories = ['All', 'Apparel', 'Bags', 'Kitchen', 'Little extras'];

export const products = [
  {
    id: 'west-blvd-tee',
    name: 'West Blvd Grown Tee',
    tagline: 'Soft cotton. Neighborhood pride.',
    price: 28,
    category: 'Apparel',
    mockup: 'tee',
    colors: ['#879e3c', '#64503f', '#FFFFFF'],
    badge: 'Bestseller',
    url: '',
    image: '',
  },
  {
    id: 'three-sisters-hoodie',
    name: 'Three Sisters Hoodie',
    tagline: 'Corn, beans, squash, and you.',
    price: 48,
    category: 'Apparel',
    mockup: 'hoodie',
    colors: ['#d06129', '#64503f'],
    url: '',
    image: '',
  },
  {
    id: 'market-tote',
    name: 'Market Day Tote',
    tagline: 'Built for heavy grocery runs.',
    price: 22,
    category: 'Bags',
    mockup: 'tote',
    colors: ['#e6b374', '#FFFFFF'],
    badge: 'Most useful',
    url: '',
    image: '',
  },
  {
    id: 'owner-cap',
    name: 'Co-op Owner Cap',
    tagline: 'For the ones who own the store.',
    price: 26,
    category: 'Apparel',
    mockup: 'cap',
    colors: ['#64503f', '#879e3c'],
    url: '',
    image: '',
  },
  {
    id: 'kitchen-mug',
    name: 'Kitchen Table Mug',
    tagline: 'Where every plan really starts.',
    price: 16,
    category: 'Kitchen',
    mockup: 'mug',
    colors: ['#FFFFFF', '#879e3c'],
    url: '',
    image: '',
  },
  {
    id: 'sticker-pack',
    name: 'Food Sovereignty Sticker Pack',
    tagline: 'Put it on your water bottle.',
    price: 8,
    category: 'Little extras',
    mockup: 'sticker',
    colors: ['#d06129', '#879e3c', '#e6b374'],
    url: '',
    image: '',
  },
];

export function productUrl(product) {
  return product.url || MERCH_STORE_URL || '';
}
