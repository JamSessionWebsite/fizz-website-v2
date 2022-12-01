/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(["antd/es/layout/layout"])
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM(nextConfig);
