import type { MetadataRoute } from "next";
import { profile } from "@/src/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl;
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
