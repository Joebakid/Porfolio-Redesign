import { Link } from "react-router-dom";
import { blogPosts } from "./posts";

export default function BlogList() {
  return (
    <section className="container-main mt-12 space-y-8">
      <header>
        <h1 className="text-[16px] md:text-2xl font-extrabold uppercase">
          Blog
        </h1>
        <p className="mt-2 text-[14px] md:text-[15px] opacity-70">
          Writing about frontend development, tooling, DX, and lessons learned
          while building real products.
        </p>
      </header>

      <ul className="space-y-6">
        {blogPosts.map((post) => (
          <li key={post.slug} className="space-y-1">
            <p className="text-xs opacity-60">{post.date}</p>

            <Link
              to={`/blog/${post.slug}`}
              className="text-[14px] md:text-[16px] font-semibold underline underline-offset-4 text-[color:var(--link-accent)]"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <blockquote className="pt-8 border-t border-white/10 text-[14px] md:text-[15px] opacity-80 italic">
        “Programs must be written for people to read, and only incidentally for
        machines to execute.”
      </blockquote>
    </section>
  );
}
