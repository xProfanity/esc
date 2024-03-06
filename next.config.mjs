/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_GOOGLE_MAP_API: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
        NEXT_PUBLIC_SANITY_PROJECTID: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
        NEXT_PUBLIC_SANITY_TOKEN: process.env.NEXT_PUBLIC_SANITY_TOKEN
    }
};

export default nextConfig;
