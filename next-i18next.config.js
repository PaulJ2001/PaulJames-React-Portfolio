const path = require('path');
//const { default: i18n } = require('./pages/components/i18n');

module.exports = {
    i18n: {
        defaultlocale: 'fr',
        locales: ['en', 'fr'],
        localePath: path.resolve('./public/locales')
    },
};