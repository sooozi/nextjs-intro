// #2.06_Movie Detail 
/** @type {import('next').NextConfig} */

const API_KEY = "81a92362658e35f04c2b390845ea5f68";

const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: "/old-blog/:path*",
        destination:"/new-sexy-blog/:path*",
        permanent: false,
      }
    ]
  },
  async rewrites(){
    return [
      {
        source: "/api/movies",
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source: "/api/movies/:id",
        destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig

