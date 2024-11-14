import './src/env.mjs';
/** @type {import('next').NextConfig} */

// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'randomuser.me',
//         pathname: '/api/portraits/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'cloudflare-ipfs.com',
//         pathname: '/ipfs/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'avatars.githubusercontent.com',
//         pathname: '/u/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'picsum.photos',
//       },
//       {
//         protocol: 'https',
//         hostname: 'flagcdn.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'utfs.io',
//       },
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 's3.amazonaws.com',
//         pathname: '/redqteam.com/isomorphic-furyroad/public/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'isomorphic-furyroad.s3.amazonaws.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'localhost',
//       },
//     ],
//   },
//   reactStrictMode: false,
// };

const nextConfig = {
  images: {
    domains: [
      'localhost', // Add 'localhost' to allow images from this domain
      'randomuser.me',
      'cloudflare-ipfs.com',
      'avatars.githubusercontent.com',
      'picsum.photos',
      'flagcdn.com',
      'utfs.io',
      'images.unsplash.com',
      's3.amazonaws.com',
      'isomorphic-furyroad.s3.amazonaws.com',
      'img.freepik.com',
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
