import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "./posts";
import { IoArrowBack } from "react-icons/io5";

export default function BlogLayout() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return null;

  const PostComponent = post.component;

  return (
    /* mt-40 for massive top breathing room */
    <article className="max-w-2xl mx-auto mt-40 mb-32 px-6 font-sans">
      
      {/* Navigation - Negative margin-left aligns the text, not the icon edge */}
      <nav className="mb-10">
        <Link
          to="/blog"
          className="group -ml-1 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-all duration-200"
        >
          <IoArrowBack size={16} className="transition-transform duration-200 group-hover:-translate-x-1.5" />
          <span>Back to Articles</span>
        </Link>
      </nav>

      {/* Header Section */}
      <header className="border-b border-gray-100 pb-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-gray-900 mb-8">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm font-bold text-gray-400 uppercase tracking-wide">
          <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
          <span className="text-gray-200">/</span>
          <span className="text-black">{post.readingTime || '5 min read'}</span>
        </div>

        {post.description && (
          <p className="mt-8 text-xl text-gray-500 leading-relaxed italic border-l-4 border-black pl-6">
            {post.description}
          </p>
        )}
      </header>

      {/* Standardized Content Section (Manual styling if prose plugin is missing) */}
      <div className="text-gray-800 leading-relaxed text-lg space-y-8">
        <PostComponent />
      </div>

      {/* Modern Footer */}
      <footer className="mt-24 pt-12 border-t border-gray-100">
        <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Enjoyed this read?</h3>
          <p className="text-gray-500 mb-8">I write about DX, performance, and shipping fast.</p>
          <Link 
            to="/blog" 
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all"
          >
            Explore More Articles
          </Link>
        </div>
      </footer>
    </article>
  );
}