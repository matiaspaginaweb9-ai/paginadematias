import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/images-xd/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/images-xd/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/images-xd/"],
      },
    ],
    sitemap: "https://totalservicespa.cl/sitemap.xml",
    host: "https://totalservicespa.cl",
  };
}
