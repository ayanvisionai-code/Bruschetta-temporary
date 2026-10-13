import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://foodcabaret.com";
  const routes = ["", "/about", "/menu", "/specialties", "/why-visit", "/reviews", "/contact", "/privacy"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-10-13",
    changeFrequency: route === "/menu" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/menu" ? 0.9 : 0.8,
  }));
}
