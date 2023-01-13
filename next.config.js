/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'audio.fizz.band',
            'fizz.band'
        ]
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
}

module.exports = nextConfig;
