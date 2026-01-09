import { Routes, Route, Navigate } from "react-router-dom";
import BlogList from "../components/blog/BlogList";
import { blogPosts } from "../components/blog/posts";

export default function Blog() {
  return (
    <Routes>
      {/* Blog index */}
      <Route index element={<BlogList />} />

      {/* Dynamic posts */}
      {blogPosts.map(({ slug, component: Component }) => (
        <Route
          key={slug}
          path={slug}
          element={<Component />}
        />
      ))}

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/blog" replace />} />
    </Routes>
  );
}
