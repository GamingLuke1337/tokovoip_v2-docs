import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
})

export default {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  // basePath: '/tokovoip_v2-docs',
}
