import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Redes Libres',
      links: [
        {
          text: 'Todas las redes',
          href: getPermalink('/redes/todas'),
        },
        {
          text: 'Redes sociales',
          href: getPermalink('/redes/sociales'),
        },
        {
          text: 'Mensajería',
          href: getPermalink('/redes/mensajeria'),
        },
        {
          text: 'Eventos y novedades',
          href: getPermalink('/redes/novedades'),
        },
      ],
    },
    {
      text: 'Asociación',
      links: [
        {
          text: 'Sobre la asociación',
          href: getPermalink('/asociacion/objetivos'),
        },
        {
          text: 'Beneficios de asociarte',
          href: getPermalink('/asociacion/beneficios'),
        },
        {
          text: 'Estatutos',
          href: getPermalink('/asociacion/estatutos'),
        },
        {
          text: 'Grupos de Trabajo',
          href: getPermalink('/asociacion/grupos'),
        },
      ],
    },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Categorías',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Etiquetas',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contribuir',
      href: getPermalink('/contribuir'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://masto.es/@RedesLibres' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
};
