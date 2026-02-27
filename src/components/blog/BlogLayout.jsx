import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "./posts";
import { IoArrowBack } from "react-icons/io5";

export default function BlogLayout() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return null;

  const PostComponent = post.component;

  return (
    <article className="max-w-2xl mx-auto mt-40 mb-32 px-6 font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
      
      {/* Navigation */}
      <nav className="mb-10">
        <Link
          to="/blog"
          className="group -ml-1 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-all duration-200"
        >
          <IoArrowBack
            size={16}
            className="transition-transform duration-200 group-hover:-translate-x-1.5"
          />
          <span>Back to Articles</span>
        </Link>
      </nav>

      {/* Header Section */}
      <header className="border-b border-gray-200 dark:border-gray-700 pb-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-gray-900 dark:text-white mb-8">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <span className="text-black dark:text-white">
            {post.readingTime || "5 min read"}
          </span>
        </div>

        {post.description && (
          <p className="mt-8 text-xl italic leading-relaxed border-l-4 pl-6
            text-gray-500 dark:text-gray-400
            border-black dark:border-white"
          >
            {post.description}
          </p>
        )}
      </header>

      {/* Content Section */}
      <div className="leading-relaxed text-lg space-y-8">
        <PostComponent />
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-gray-200 dark:border-gray-700">
        <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl border border-gray-200 dark:border-gray-700 text-center transition-colors duration-300">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Enjoyed this read?
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            I write about DX, performance, and shipping fast.
          </p>
          <Link
            to="/blog"
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-all"
          >
            Explore More Articles
          </Link>
        </div>
      </footer>
    </article>
  );
}