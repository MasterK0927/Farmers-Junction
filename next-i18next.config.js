// next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hy'], // Add more locales as needed
    localePath: path.resolve('./public/locales'),
  },
};
