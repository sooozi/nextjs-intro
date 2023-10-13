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
      }
    ]
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig


//1. redirect
//redirect를 이용해서 한 페이지에서 다른 페이지로 이동하게 할 수 있음
//아예 다른 url의 웹사이트로 이동하게 할 수도 있음
//source: "/old-blog/:path*",
//=> 뒤에 별표를 붙이는 건 뒤에 어떤 것이 오더라도 새로운 url 뒤에도 그대로 붙는다는 뜻!

//2. rewrite
//유저를 redirect시키기는 하지만 url은 변하지 않는다!!!!!
