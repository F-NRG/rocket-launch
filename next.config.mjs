/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images2.imgbox.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
