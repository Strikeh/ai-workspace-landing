import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { guides } from "@/data/guides";
import { comparePages } from "@/data/compare-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://getaiworkspace.com";
  const currentDate = new Date();

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const compareEntries: MetadataRoute.Sitemap = comparePages.map((page) => ({
    url: `${baseUrl}/compare/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const staticPages: { path: string; priority: number; freq: "daily" | "weekly" | "monthly" }[] = [
    // Hubs
    { path: "/features", priority: 0.9, freq: "weekly" },
    { path: "/guides", priority: 0.9, freq: "weekly" },
    { path: "/compare", priority: 0.9, freq: "weekly" },
    { path: "/faq", priority: 0.8, freq: "weekly" },
    { path: "/blog", priority: 0.9, freq: "weekly" },
    // Feature pages
    { path: "/chatgpt-workspaces", priority: 0.9, freq: "weekly" },
    { path: "/organization", priority: 0.8, freq: "weekly" },
    { path: "/prompt-library", priority: 0.8, freq: "weekly" },
    { path: "/chatgpt-minimap", priority: 0.8, freq: "weekly" },
    { path: "/chatgpt-side-chat", priority: 0.8, freq: "weekly" },
    { path: "/chatgpt-conversation-branching", priority: 0.8, freq: "weekly" },
    { path: "/chatgpt-image-gallery", priority: 0.8, freq: "weekly" },
    { path: "/chatgpt-text-highlighter", priority: 0.8, freq: "weekly" },
    { path: "/chatgpt-themes", priority: 0.8, freq: "weekly" },
    { path: "/fix-chatgpt-lag", priority: 0.9, freq: "weekly" },
    // Compare (standalone)
    { path: "/superpower-chatgpt-alternative", priority: 0.9, freq: "weekly" },
    // Solutions
    { path: "/agencies", priority: 0.8, freq: "weekly" },
    { path: "/students", priority: 0.8, freq: "weekly" },
    { path: "/creators", priority: 0.8, freq: "weekly" },
    { path: "/social-media-managers", priority: 0.8, freq: "weekly" },
    { path: "/freelancers", priority: 0.8, freq: "weekly" },
    { path: "/consultants", priority: 0.8, freq: "weekly" },
    { path: "/teams", priority: 0.8, freq: "weekly" },
    // Other
    { path: "/affiliate", priority: 0.6, freq: "monthly" },
    { path: "/privacy", priority: 0.5, freq: "monthly" },
    { path: "/terms", priority: 0.5, freq: "monthly" },
  ];

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.freq,
      priority: page.priority,
    })),
    ...guideEntries,
    ...compareEntries,
    ...blogEntries,
  ];
}
