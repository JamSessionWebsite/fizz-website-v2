/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'audio.fizztheband.com',
            'fizztheband.com'
        ]
    }
}

module.exports = nextConfig;
