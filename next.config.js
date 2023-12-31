/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
      },
    reactStrictMode: true,
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/thestankela/blogposts/main/images/**'
        }
    ],
    domains: [
        "localhost:3000",
        "localhost",
        "ognjenstankovic.com",
        "githubusercontent.com",
        "raw.githubusercontent.com",
        "api.github.com",
        "github.com"
    ],
    }
}

module.exports = nextConfig
