import { MetadataRoute } from 'next';
import { BUSINESS_SECTORS } from '@/config/sectors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kingsphere.in';
  const staticRoutes = [
    '',
    '/about',
    '/business-sectors',
    '/our-approach',
    '/projects-capabilities',
    '/partnerships',
    '/vision-mission',
    '/contact',
  ];

  const sectorRoutes = BUSINESS_SECTORS.map((sector) => `/business-sectors/${sector.id}`);
  const allRoutes = [...staticRoutes, ...sectorRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/business-sectors/') ? 0.85 : 0.8,
  }));
}
