/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.DEV ? '' : '/my-portfolio',
  reactStrictMode: true,
};


export default nextConfig;
