module.exports = {
  productionSourceMap: false,
  css: {
    sourceMap: true,
    loaderOptions:
      {
        sass:
          {
            data: '@import "~@/assets/sass/main.sass";',
          },
      },
  },
  pwa: {
    themeColor: '#7540EE',
    msTileColor: '#7540EE',
  },
};
