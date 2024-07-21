/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
      },
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "images.unsplash.com",
            port: '',
            pathname: '/photos/**',
        }]
    }
};

export default nextConfig;
