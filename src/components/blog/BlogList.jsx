import { Link } from "react-router-dom";
import Footer from '../landing page/footer'

const posts = [
  {
    title: "Mistakes I Made as a Beginner Developer and How to Avoid Them",
    date: "March 1, 2025",
    slug: "mistakes-i-made",
  },
  {
    title: "How to Land Your First Job as a Frontend Developer",
    date: "March 5, 2025",
    slug: "how-to-land-a-frontend-job",
  },
  {
    title: "How to Build a Portfolio That Stands Out as a React Developer",
    date: "March 10, 2025",
    slug: "portfolio",
  },
  {
    title: "The Significance of npx create-bawo-frontend",
    date: "March 26, 2025",
    slug: "significance-of-npx-create-bawo-frontend",
  },
  {
    title: "Making Your Own npm Package",
    date: "August 26, 2025",
    slug: "making-your-own-package",
  },
];

export default function BlogList() {
  return (
    <section className="container-main mt-12 space-y-8">
      {/* Header */}
      <header>
        <h1 className="text-[16px] font-extrabold uppercase md:text-2xl">
          Blog.
        </h1>

        <p className="mt-2 text-[14px] md:text-[15px] opacity-70">
          Writing about frontend development, career growth, tooling,
          and lessons learned while building real products.
        </p>
      </header>

      {/* Blog posts */}
      <ul className="space-y-5">
        {posts.map((post) => (
          <li key={post.slug} className="space-y-1">
            <p className="text-xs opacity-60">
              {post.date}
            </p>

            <Link
              to={`/blog/${post.slug}`}
              className="
                text-[14px] md:text-[16px]
                font-semibold
                underline
                underline-offset-4
                text-[color:var(--link-accent)]
              "
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Quote */}
      <blockquote className="pt-8 border-t border-white/10 text-[14px] md:text-[15px] opacity-80">
        <p className="italic">
          “Programs must be written for people to read, and only incidentally
          for machines to execute.”
        </p>

        <footer className="mt-2 text-sm opacity-70">
          —{" "}
          <a
            href="https://www.youtube.com/watch?v=Kbd7yFFfKnw"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[color:var(--link-accent)]"
          >
            Harold Abelson
          </a>
        </footer>
      </blockquote>

      <Footer/>
    </section>
  );
}
