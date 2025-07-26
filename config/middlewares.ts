const isProd = process.env.NODE_ENV === 'production';
const allowedOrigins = isProd
  ? ['https://ethanecom.com']
  : ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'];

export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: allowedOrigins
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

