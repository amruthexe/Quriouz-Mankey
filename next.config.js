const nextConfig = {
    /* Other config options */
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ["images.unsplash.com"], // Allow Unsplash images
    },
};

module.exports = nextConfig;
