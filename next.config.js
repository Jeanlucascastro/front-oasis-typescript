/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://192.168.0.104:8080/:path*', // Substitua pelo seu endpoint de API
          },
        ]
      },
}

module.exports = nextConfig
