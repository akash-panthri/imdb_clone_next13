/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    missingSuspenseWithCSRBailout: false
  },
  images: {
    domains: ["image.tmdb.org"],
  },
}

module.exports = nextConfig
