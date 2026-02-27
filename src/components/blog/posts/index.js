import Blog4 from "./blog-4";
// import Blog5 from "./blog-5";

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
    readingTime: "5 min read",
    component: Blog4,
  },
  // {
  //   title: "Making Your Own npm Package",
  //   date: "2025-08-26",
  //   slug: "making-your-own-npm-package",
  //   description:
  //     "A practical breakdown of how to create, publish, and maintain your own npm package.",
  //   readingTime: "6 min read",
  //   component: Blog5,
  // },
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