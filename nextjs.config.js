// import { configureSitemap } from '@sergeymyssak/nextjs-sitemap';
const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');

async function fetchDynamicPaths() {
  return ['house', 'flower', 'table'];
}

async function getDynamicPaths() {
  const paths = await fetchDynamicPaths();

  return paths.map((item) => `/project/${item}`);
}

getDynamicPaths().then((paths) => {
  const Sitemap = configureSitemap({
    domains: [{ domain: 'animeprime.site', defaultLocale: 'en' }],
    include: paths,
    exclude: ['/project/*'],
    excludeIndex: true,
    pagesConfig: {
      '': {
        priority: '0.5',
        changefreq: 'daily',
      },
    },
    trailingSlash: true,
    targetDirectory: __dirname + '/public',
    pagesDirectory: __dirname + '/src/pages',
  });

  Sitemap.generateSitemap();
});