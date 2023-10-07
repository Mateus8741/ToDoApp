module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: '.',
          alias: {
            '@DTOS': './src/dtos',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@utils': './src/utils',
            '@libs': './src/libs',
            '@services': './src/services',
            '@contexts': './src/contexts',
            '@routes': './src/routes',
            '@theme': './src/theme',
          },
        },
      ],
    ],
  };
};
