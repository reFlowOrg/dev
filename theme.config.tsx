import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { StoreIcon, AboutIcon, BridgeIcon, UnitTesting, NotifyIcon, MerchantIcon, FreeIcon, PayCheckIcon, StashesIcon, MenuIcon, KeyPadIcon } from '@components/Icons';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://dev.reflow-store.com${asPath}`;
  const description = frontMatter.description || "Documentation for reFlow Developer World";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/sd.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || ' reFlow';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" height="28" fill="none" viewBox="0 0 499.02 68.36">
      <path d="M47.5,107.22V120.9H27v41H6.49V107.22Z" transform="translate(-6.49 -93.55)" fill="currentColor" />
      <path d="M54.34,161.91V107.22h47.85V141.4H74.85v6.84h27.34v13.67Zm27.34-34.18V120.9H74.85v6.83Z" transform="translate(-6.49 -93.55)" fill="currentColor" />
      <path d="M129.54,120.9h27.34v13.67H129.54v27.34H109V93.55h47.85v13.67H129.54Z" transform="translate(-6.49 -93.55)" fill="currentColor" />
      <path d="M184.22,93.55v68.36H163.71V93.55Z" transform="translate(-6.49 -93.55)" fill="currentColor" />
      <path d="M238.91,107.22v54.69H191.06V107.22ZM211.57,120.9v27.34h6.83V120.9Z" transform="translate(-6.49 -93.55)" fill="currentColor" />
      <path d="M307.27,148.24v13.67H286.76v-6.83H273.09v6.83H252.58V148.24h-6.83v-41h20.5V141.4h6.84V114.06h13.67V141.4h6.84V107.22h20.51v41Z" transform="translate(-6.49 -93.55)" fill="currentColor" />
      <path d="M341.45,148.24v13.67H320.94V148.24Z" transform="translate(-6.49 -93.55)" fill="currentColor" />
      <path d="M389.3,93.55v6.84h6.84v54.69H389.3v6.83h-41V93.55Zm-20.51,13.67v41h6.84v-41Z" transform="translate(-6.49 -93.55)" fill="currentColor" />
      <path d="M403,161.91V107.22h47.85V141.4H423.48v6.84h27.34v13.67Zm27.35-34.18V120.9h-6.84v6.83Z" transform="translate(-6.49 -93.55)" fill="currentColor" />
      <path d="M478.17,107.22v41H485v-41h20.51V141.4h-6.83v13.68h-6.84v6.83H471.33v-6.83H464.5V141.4h-6.84V107.22Z" transform="translate(-6.49 -93.55)" fill="currentColor" />
    </svg>
    </>
  ),
  project: {
    link: 'https://github.com/reFlowOrg',
  },
  chat: {
    link: 'https://discord.gg/reflow',
  },
  /*
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://nextra.site" target="_blank">
        🎉 Nextra 2.0 is released. Read more →
      </a>
    ),
  },
  */
  docsRepositoryBase: 'https://github.com/reFlowOrg/dev/tree/main',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://reflow-store.com/" target="_blank">
          reFlow
        </a>
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type }) {
      if (title === 'Tebex') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{StoreIcon}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'About') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{AboutIcon}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'Bridge') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{BridgeIcon}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'Unit') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{UnitTesting}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      return <>{title}</>;
    },
  },
  head: useHead,
  primaryHue: { dark: 151, light: 151 },

  useNextSeoProps: useNextSeoProps,
};

export default config;
