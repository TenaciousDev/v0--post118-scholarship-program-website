/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // This makes it fully static
  basePath: '/v0--post118-scholarship-program-website', // Replace with your GitHub repo name
  assetPrefix: '/v0--post118-scholarship-program-website/', 
  images: {
    unoptimized: true,        // Required for GitHub Pages TEST
  },
  trailingSlash: true,        // Optional but recommended
};

export default nextConfig;
