/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins : ["192.168.1.22"],
  devIndicators: false,
  images: {
    domains: [],
  },
};

export default nextConfig;
