import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://lorentelegal.es/es/", changeFrequency: "monthly", priority: 1 },
    { url: "https://lorentelegal.es/es/contacto", changeFrequency: "yearly", priority: 0.7 },
  ];
}
