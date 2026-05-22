export interface Tool {
  id: string;
  name: string;
  image: string;
  priceUSD: number;
}

export const toolsData: Tool[] = [
  {
    id: 'vercel',
    name: 'Vercel',
    image: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.svg',
    priceUSD: 76,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    image: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
    priceUSD: 0,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    image: 'https://www.svgrepo.com/show/374118/tailwind.svg',
    priceUSD: 0,
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    image: 'https://www.svgrepo.com/show/373597/postgres.svg',
    priceUSD: 50,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    image: 'https://www.svgrepo.com/show/353816/stripe.svg',
    priceUSD: 100,
  },
  {
    id: 'firebase',
    name: 'Firebase',
    image: 'https://www.svgrepo.com/show/354521/firebase.svg',
    priceUSD: 45,
  },
  {
    id: 'github',
    name: 'GitHub',
    image: 'https://www.svgrepo.com/show/343697/github-color.svg',
    priceUSD: 0,
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    image: 'https://www.svgrepo.com/show/354397/cloudflare.svg',
    priceUSD: 20,
  },
];
