import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyUrls: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `https://aifficient.be/case-studies/${cs.sector}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://aifficient.be",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://aifficient.be/case-studies",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...caseStudyUrls,
  ];
}
