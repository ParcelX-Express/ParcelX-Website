/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['pg'],
  // Allow all dev origins for Replit proxy
  allowedDevOrigins: ['*'],
  // Replit proxy support
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ]
  },
}

export default nextConfig
