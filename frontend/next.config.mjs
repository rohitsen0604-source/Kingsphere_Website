/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', 'gsap', 'lucide-react'],
  optimizeFonts: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
