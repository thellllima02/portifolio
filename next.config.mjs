/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
        MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
        RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
    },
};

export default nextConfig;