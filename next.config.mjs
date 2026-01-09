/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['pg'],
  experimental: {
    allowedDevOrigins: ['fcd049fd-4b75-4cd0-b842-19ace21ad993-00-2agcr1m3jm5f5.spock.replit.dev', '*.replit.dev', '*.replit.app'],
  },
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
