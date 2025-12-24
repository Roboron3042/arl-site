import type { Post } from "~/types";
import mastoes_img from "~/assets/images/servidores/mastoes.png"
import neopaquita_img from "~/assets/images/servidores/neopaquita.png"
import enredades_img from "~/assets/images/servidores/enredades.png"

export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const redes: Post[] = [{
    id: "masto.es",
    title: "masto.es",
    permalink: "https://masto.es",
    excerpt: "Como servidor de referencia de Mastodon en español, masto.es es el lugar ideal para iniciar tu aventura en las redes libres",
    slug: "",
    image: mastoes_img,
    publishDate: new Date()
},
{
    id: "neopaquita.es",
    title: "Neopaquita",
    permalink: "https://neopaquita.es",
    excerpt: "Instancia transfeminista en la red de Mastodon hispano. Espacio seguro para mujeres, gente del espectro queer y aliada",
    slug: "",
    image: neopaquita_img,
    publishDate: new Date()
},
{
    id: "enredad.es",
    title: "enredad·es",
    permalink: "https://enredad.es",
    excerpt: "Enredad·es es una agenda de eventos inclusivos para comunidades LGTBIQ+, migrante y disca en toda España",
    slug: "",
    image: enredades_img,
    publishDate: new Date()
}]