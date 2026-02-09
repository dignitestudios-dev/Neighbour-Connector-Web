import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Neighbor Connector',
    short_name: 'Connector',
    description: 'Connect with your community and neighbors',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#07519B',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
