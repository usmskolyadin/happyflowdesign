module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '6db96ccb-05f8ff90-4c5f-427b-9d14-b830aeef9606.s3.twcstorage.ru',
        pathname: '/**',
      }]
    },
};
