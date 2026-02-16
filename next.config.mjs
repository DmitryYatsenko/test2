/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep dev artifacts separate from production build output.
  // This prevents chunk mismatches when dev and build are run close together.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};

export default nextConfig;
