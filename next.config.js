/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Užtikrinti, kad galėtume naudoti paveiksliukus iš public katalogo
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;