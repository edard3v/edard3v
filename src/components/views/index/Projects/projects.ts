import dragon from "./imgs/dragon.avif";
import krekeet from "./imgs/krekeet.avif";
import coffee from "./imgs/coffee.avif";

export const PROJECTS = [
  {
    title: "Krekeet",
    deploy: "https://krekeet.vercel.app/",
    description:
      "Agencia de comunicación digital especializada en diseño de experiencias de usuario.",
    tools: ["Astro"],
    imgs: {
      mobile: "",
      laptop: "",
      full: krekeet,
    },
  },

  {
    title: "Dragon",
    deploy: "https://dragon-rosy.vercel.app/",
    description:
      "Conecta con el fascinante mundo del cine. Explora nuestra colección de casi 1 millón de películas, clásicos, últimos estrenos y mucho más.",
    tools: ["Astro", "React"],
    imgs: {
      mobile: "",
      laptop: "",
      full: dragon,
    },
  },

  {
    title: "Coffee",
    deploy: "https://coffee-aey.pages.dev/",
    description:
      "Sumérgete en el mundo del café. Descubre variedades únicas, aprende sobre su preparación y disfruta de la mejor experiencia cafetera, desde el grano hasta la taza.",
    tools: ["Astro"],
    imgs: {
      mobile: "",
      laptop: "",
      full: coffee,
    },
  },
] as const;

export type Project = (typeof PROJECTS)[number];
