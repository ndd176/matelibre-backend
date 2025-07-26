export default ({ env }) => ({
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      'connect-src': ["'self'", 'https:'],
      'img-src': [
        "'self'",
        'data:',
        'blob:',
        'market-assets.strapi.io',
        'res.cloudinary.com',
        'ethanecom.com',
        'api.ethanecom.com'
      ],
      'media-src': [
        "'self'",
        'data:',
        'blob:',
        'market-assets.strapi.io',
        'res.cloudinary.com',
        'ethanecom.com',
        'api.ethanecom.com'
      ],
      upgradeInsecureRequests: null,
    },
  },
});
