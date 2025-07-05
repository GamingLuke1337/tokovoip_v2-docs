import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const basePath = '';

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src={`${basePath}/cardinal.png`} width="36" />
      <h1 className="nx-font-bold nx-text-2xl">Cardinal</h1>
    </>
  ),
  head: (
    <>
      <link rel="icon" type="image/png" href={`${basePath}/cardinal.png`} />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Cardinal',
    };
  },
  editLink: {
    component: () => <></>,
  },
  feedback: {
    content: () => <></>,
  },
  project: {
    link: '',
  },
  docsRepositoryBase: 'https://github.com/cardinalhq/cardinal-docs',
  footer: {
    text: '© 2025 GamingLuke1337. Template by Cardinal HQ.',
  },
};

export default config;
