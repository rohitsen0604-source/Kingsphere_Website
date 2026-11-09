import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kingsphere.in';
  const routes = [
    '',
    '/about',
    '/business-sectors',
    '/our-approach',
    '/projects-capabilities',
    '/partnerships',
    '/vision-mission',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}

