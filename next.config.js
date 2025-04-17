/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // app router → statinis eksportas
  output: 'export',
  // Užtikrinti, kad galėtume naudoti paveiksliukus iš public katalogo
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;