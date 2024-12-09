import dragon from "./imgs/dragon.avif";
import krekeet from "./imgs/krekeet.avif";

export const PROJECTS = [
  {
    title: "Krekeet",
    deploy: "https://krekeet.vercel.app/",
    description:
      "Agencia de comunicación digital especializada en diseño de experiencias de usuario, con sede en la República Dominicana y socios estratégicos en Latinoamérica, Estados Unidos, Europa y Asia.",
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
    tools: [
      "Vite",
      "React",
      "TS",
      "TanStack Query",
      "React Hook Form",
      "Node.js",
      "Express",
      "DrizzleORM",
      "SQLite",
    ],
    imgs: {
      mobile: "",
      laptop: "",
      full: dragon,
    },
  },
] as const;

export type Project = (typeof PROJECTS)[number];
