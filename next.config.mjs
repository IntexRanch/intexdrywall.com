/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static export that can be hosted on Cloudflare Pages
  // without a custom Next.js runtime.
  output: "export",
  images: {
    // Disable Image Optimization for static export compatibility
    unoptimized: true,
  },
};

export default nextConfig;
