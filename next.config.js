/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '/sinaf/site-viva-sinaf',
  images: {
    unoptimized: true
  },    
  assetPrefix: "/" ,
  trailingSlash: true
};

module.exports = nextConfig;
