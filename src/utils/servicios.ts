import type { Red } from '~/types';
import mastoes_img from '~/assets/images/servidores/mastoes.png';
import neopaquita_img from '~/assets/images/servidores/neopaquita.png';
import enredades_img from '~/assets/images/servidores/enredades.png';
import fotolibre_img from '~/assets/images/servidores/fotolibre.jpg';
import redeslibres_banner from '~/assets/images/redeslibres_banner.png';

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const redes: Red[] = [
  {
    id: 'masto.es',
    title: 'masto.es',
    permalink: 'https://masto.es',
    excerpt:
      'Como servidor de referencia de Mastodon en español, masto.es es el lugar ideal para iniciar tu aventura en las redes libres.',
    image: mastoes_img,
    category: 'microblog',
    tags: ['mastodon', 'fediverso', 'microblog', 'general'],
    destacada: true,
  },
  {
    id: 'neopaquita.es',
    title: 'Neo Paquita',
    permalink: 'https://neopaquita.es',
    excerpt:
      'Instancia transfeminista en la red de Mastodon hispano. Espacio seguro para mujeres, gente del espectro queer y aliada.',
    image: neopaquita_img,
    category: 'microblog',
    tags: ['mastodon', 'fediverso', 'microblog', 'lgbt+'],
    destacada: true,
  },
  {
    id: 'fotolibre.social',
    title: 'Foto Libre',
    permalink: 'https://fotolibre.social',
    excerpt:
      'Instancia de Pixelfed para entusiastas de la fotografía. Comparte tus fotos y sigue y aprende de otros fotógrafos.',
    image: fotolibre_img,
    category: 'imagen',
    tags: ['pixelfed', 'fediverso', 'fotografía'],
    destacada: true,
  },
  {
    id: 'delta.arl.red',
    title: 'Delta Chat',
    permalink: 'https://delta.chat',
    excerpt: 'Delta Chat es una red libre de mensajería segura, moderna y fácil de usar.',
    summary2:
      'Actualmente estamos trabajando en alojar nuestro propio relay de Delta Chat. Mientras puedes unirte a cualquier otro y cambiar al nuestro más adelante fácilmente.',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/4d/ba/d1/4dbad1bf-e3f1-36a4-9bbb-02f8acd1c792/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png',
    tags: ['delta chat', 'mensajeria segura'],
    category: 'mensajeria',
  },
  {
    id: 'correo.arl.red',
    title: 'Servidor de correo de la ARL',
    permalink: 'https://correo.arl.red',
    excerpt: 'La Asociación Redes Libres mantiene un servidor de correo electrónico, una de las primeras redes libres.',
    summary2:
      'Dicho servidor no es de registro público pero está disponibles para personas socias y amigas previa petición.',
    image: redeslibres_banner,
    tags: ['e-mail', 'redes libres'],
    category: 'mensajeria',
  },
  {
    id: 'enredad.es',
    title: 'enredad·es',
    permalink: 'https://enredad.es',
    excerpt:
      'enredad·es es una agenda de eventos inclusivos para comunidades LGTBIQ+, migrante y disca en toda España.',
    summary2: 'Los eventos creados en enredad·es pueden seguirse fácilmente a través del Fediverso y de RSS.',
    image: enredades_img,
    category: 'novedades',
    tags: ['rss', 'gancio', 'fediverso', 'lgbt+'],
    destacada: true,
  },
  {
    id: 'redeslibres.net',
    title: 'Blog de Redes Libres',
    permalink: '/blog',
    excerpt:
      'En nuestro blog compartimos novedades y recursos para aprender sobre las redes libres y nuestra asociación.',
    summary2: 'Puedes seguir el blog tanto a través de RSS como a través del Fediverso en redeslibres@masto.es',
    image: redeslibres_banner,
    category: 'novedades',
    tags: ['rss', 'redes libres'],
  },
];
