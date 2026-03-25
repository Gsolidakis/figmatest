/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Ensure .html extension for all pages
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/Home': { page: '/Home' },
      '/The-Hike': { page: '/The-Hike' },
      '/How-to-get-there': { page: '/How-to-get-there' },
      '/FAQ': { page: '/FAQ' },
      '/Gallery': { page: '/Gallery' },
      '/Live-camera': { page: '/Live-camera' },
      '/Live-Camera-Omalos': { page: '/Live-Camera-Omalos' },
      '/Live-Camera-Samaria': { page: '/Live-Camera-Samaria' },
      '/BookVilla': { page: '/BookVilla' },
      '/Travel-Agencies-Chania': { page: '/Travel-Agencies-Chania' },
      '/Travel-Agencies-Rethymnon': { page: '/Travel-Agencies-Rethymnon' },
      '/Travel-Agencies-Heraklion': { page: '/Travel-Agencies-Heraklion' },
      '/Disclaimer': { page: '/Disclaimer' },
    };
  },
};

module.exports = nextConfig;
