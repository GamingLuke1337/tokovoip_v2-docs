import React from 'react'

const basePath = ''

const config = {
  logo: (
    <>
      <img src={`${basePath}/tokovoip.png`} width="36" />
      <h1 className="nx-font-bold nx-text-2xl">TokoVoIP Docs</h1>
    </>
  ),
  head: (
    <>
      <link rel="icon" type="image/png" href={`${basePath}/tokovoip.png`} />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – TokoVoIP',
    }
  },
  editLink: {
    component: () => <></>,
  },
  feedback: {
    content: () => <></>,
  },
  project: {
    link: 'https://github.com/GamingLuke1337/tokovoip-docs',
  },
  docsRepositoryBase: 'https://github.com/GamingLuke1337/tokovoip-docs',
  footer: {
    text: '© 2025 GamingLuke1337.',
  },
}

export default config
