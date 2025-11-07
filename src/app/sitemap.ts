// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yourdomain.com'; // Replace with your actual domain

  const staticPages = [
    '/',
    '/convert/docx-to-pdf',
    '/convert/pdf-to-docx',
    '/convert/md-to-html',
    '/convert/md-to-pdf',
    '/convert/html-to-md',
    '/convert/pdf-to-html',
    '/history',
  ];

  const sitemapEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1.0 : 0.8,
  }));

  return sitemapEntries;
}

