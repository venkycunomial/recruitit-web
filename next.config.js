const nextTranslate = require('next-translate');
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'deny',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // {
  //   key: 'Content-Security-Policy',
  //   value: "default-src 'self'; font-src 'self'; img-src 'self' '*.amazonaws.com'; script-src 'self'",
  // },
];

/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'azurewebsites.net',
      'vercel.app',
      'accubate.app',
      'accubatebeta.app',
      'calendia.app',
      'calendiabeta.app',
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/',
        headers: securityHeaders,
      },
    ];
  },
});

module.exports = nextConfig;
