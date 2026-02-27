import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "./posts";
import { IoArrowBack } from "react-icons/io5";

export default function BlogLayout() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return null;

  const PostComponent = post.component;

  return (
    <article className="min-h-screen max-w-2xl mx-auto mt-40 mb-32 px-6 font-sans transition-colors duration-300">
      
      {/* Navigation */}
      <nav className="mb-12">
        <Link
          to="/blog"
          className="group -ml-1 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-70 hover:opacity-100 transition-all duration-200"
        >
          <IoArrowBack
            size={16}
            className="transition-transform duration-200 group-hover:-translate-x-1.5"
          />
          <span>Back to Articles</span>
        </Link>
      </nav>

      {/* Header */}
      <header className="border-b pb-14 mb-14">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-8">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wide opacity-70">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>

          <span>/</span>

          <span>
            {post.readingTime || "5 min read"}
          </span>
        </div>

        {post.description && (
          <p className="mt-8 text-xl italic leading-relaxed border-l-4 pl-6">
            {post.description}
          </p>
        )}
      </header>

      {/* Content */}
      <div className="leading-relaxed text-lg space-y-8">
        <PostComponent />
      </div>

      {/* Footer */}
      <footer className="mt-28 pt-14 border-t">
        <div className="p-10 rounded-3xl border text-center">
          <h3 className="text-xl font-bold mb-3">
            Enjoyed this read?
          </h3>

          <p className="opacity-70 mb-8">
            I write about DX, performance, and shipping fast.
          </p>

          <Link
            to="/blog"
            className="inline-block px-8 py-3 rounded-full font-bold border hover:scale-105 transition-all duration-200"
          >
            Explore More Articles
          </Link>
        </div>
      </footer>
    </article>
  );
}