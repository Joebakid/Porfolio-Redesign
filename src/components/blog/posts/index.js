import Blog4 from "./blog-4";
import BlogSupabase from "./supabase";
import BlogDomain from './domain'
import BlogLinux from './BlogLinux'
import BlogENS from './BlogENS'

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
{
  title: "Choosing the Right Domain: .tech, .dev, .io & the Hidden Stress Behind It",
  date: "2026-03-01",
  slug: "choosing-the-right-developer-domain",
  description:
    "A practical breakdown of developer-focused domains like .tech, .dev, .io, .app, .ai and more — including pricing traps, renewal stress, branding decisions, and what to consider before committing long-term.",
  readingTime: "4 min read",
  component: BlogDomain,
},
{
  title: "How to Use Linux: A Practical Guide for Developers",
  date: "2026-03-07",
  slug: "how-to-use-linux-for-developers",
  description:
    "A beginner-friendly guide to using Linux for development — including how to install distributions like Linux Mint, Debian, Kali Linux, and Arch Linux, why most apps are free, how updates work, essential commands, advanced terminal tools, and tips every developer should know.",
  readingTime: "5 min read",
  component: BlogLinux,
},
{
  title: "How to Use Your ENS Name as a Website Domain",
  date: "2026-05-04",
  slug: "ens-name-as-domain",
  description:
    "How to point your .eth name to an IPFS site, access it via yourname.eth.limo, why Brave resolves .eth natively, and why Chrome can't.",
  readingTime: "4 min read",
  component: BlogENS,
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