import { Link } from "react-router-dom";
import { blogPosts } from "./posts";

export default function BlogList() {
  return (
    <section className="container-main mt-12 max-w-3xl space-y-10">
      <header className="space-y-2">
        <h1 className="text-xl md:text-3xl font-extrabold uppercase tracking-wide">
          Blog
        </h1>
        <p className="text-sm md:text-base opacity-70">
          Writing about frontend development, tooling, DX, and lessons learned
          while building real products.
        </p>
      </header>

      <ul className="space-y-8">
        {blogPosts.map((post) => (
          <li key={post.slug} className="space-y-2">
            <p className="text-xs opacity-50">
              {new Date(post.date).toDateString()}
            </p>

            <Link
              to={`/blog/${post.slug}`}
              className="text-base md:text-lg font-semibold underline underline-offset-4 hover:opacity-80 transition"
            >
              {post.title}
            </Link>

            {post.description && (
              <p className="text-sm opacity-60">
                {post.description}
              </p>
            )}
          </li>
        ))}
      </ul>

      <blockquote className="pt-10 border-t border-white/10 text-sm md:text-base opacity-70 italic">
        “Programs must be written for people to read, and only incidentally for
        machines to execute.”
      </blockquote>
    </section>
  );
}