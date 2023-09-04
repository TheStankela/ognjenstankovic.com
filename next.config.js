/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/thestankela/blogposts/main/images/**'
        }
    ]
    }
}

module.exports = nextConfig
