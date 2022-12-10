/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'audio.fizztheband.com',
              pathname: '/images/fizz-website/**',
          },
      ],
  }
}

module.exports = nextConfig;
