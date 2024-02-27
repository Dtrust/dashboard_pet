const path = require('path');

module.exports = function override(config, env) {
    // Добавьте настройку resolve.alias в конфигурацию webpack
    config.resolve.alias = {
        ...config.resolve.alias,
        '@src': path.resolve(__dirname, 'src'),
    };

    return config;
};
