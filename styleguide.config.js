const path = require('path');

module.exports = {
    propsParser: require('react-docgen-typescript').withDefaultConfig([]).parse,
    template: {
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href: '/stylesDocs/colors.css',
                },
            ],
        },
    },
    sections: [
        {
            name: 'Colors',
            content: 'src/docs/Colors.md',
        },
        {
            name: 'Typography',
            content: 'src/docs/Typography.md',
        },
        {
            name: 'Components',
            components: 'src/components/**/!(*index)/*.{js,ts,tsx}',
        },
    ],
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    include: path.resolve(__dirname, 'src'),
                    loader: 'ts-loader',
                    options: { transpileOnly: true },
                },
                {
                    test: /\.sass$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.svg$/,
                    use: ['file-loader'],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
            alias: {
                '@src': path.resolve(__dirname, 'src'),
            },
        },
    },
};
