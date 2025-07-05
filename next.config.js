const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
});

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  // basePath: '/tokovoip_v2-docs',
};
