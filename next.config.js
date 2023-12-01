/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['next-auth-sanity'],
  },
  images: {
    domains: ['cdn.sanity.io']
  },
  webpack: (config, { isServer }) => {
    return config;
  },

};

module.exports = nextConfig;
