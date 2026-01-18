import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Total Service SPA - Arriendo de Maquinaria Pesada",
    short_name: "Total Service",
    description: "Líderes en arriendo de maquinaria pesada para construcción, minería e infraestructura",
    start_url: "/",
    display: "standalone",
    background_color: "#111827",
    theme_color: "#FF6B35",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
  };
}
