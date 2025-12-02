/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static export that can be hosted on Cloudflare Pages
  // without a custom Next.js runtime.
  output: "export",
};

export default nextConfig;
