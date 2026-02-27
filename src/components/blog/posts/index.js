import Blog4 from "./blog-4";
import BlogSupabase from "./supabase";

/**
 * Blog Post Registry
 * Add new posts here.
 * Slugs must match the URL exactly.
 */
const posts = [
  {
    title: "The Significance of npx create-bawo-frontend",
    date: "2025-08-26", // ISO format = safer sorting
    slug: "significance-of-npx-create-bawo-frontend",
    description:
      "Why I built create-bawo-frontend and what it means for developer experience.",
    readingTime: "3 min read",
    component: Blog4,
  },
{
  title: "Supabase vs Firebase: Choosing the Right Backend for Modern Apps",
  date: "2026-02-27",
  slug: "supabase-vs-firebase-backend-architecture",
  description:
    "A practical breakdown of Supabase vs Firebase, RLS policies, authentication, storage costs, Cloudinary integration, and why backend fundamentals still matter.",
  readingTime: "5 min read",
  component: BlogSupabase,
},
];

/**
 * Export sorted posts (newest first)
 */
export const blogPosts = posts.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

/**
 * Helper: get post by slug
 */
export const getPostBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);