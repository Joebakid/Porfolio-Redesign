import { Routes, Route } from "react-router-dom";

import Navigation from "./components/landing page/navigation";
import Footer from "./components/landing page/footer";

import Resume from "./components/landing page/Resume";
import Home from "./pages/Home";
import BlogList from "./components/blog/BlogList";
import BlogLayout from "./components/blog/BlogLayout";
import Likes from "./components/landing page/likes";
import NotFound from "./components/landing page/NotFound";

import { ThemeProvider } from "./components/theme/theme-context";
import { AppProvider } from "./state/AppContext";
import GsapProvider from "./gsap/GsapProvider";
import ScrollToTop from "./components/ScrollToTop";
import ResumePDF from "./components/resume/ResumePDF";
import AutoTranslate from "./components/system/AutoTranslate";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <GsapProvider>
      <AppProvider>
        <ThemeProvider>
          <AutoTranslate />
          <ScrollToTop />
          <Navigation />

          <Routes>
            <Route
              path="/"
              element={
                <div id="page">
                  <Home />
                </div>
              }
            />

            <Route
              path="/resume"
              element={
                <div id="page">
                  <Resume />
                </div>
              }
            />

            <Route path="/resume/pdf" element={<ResumePDF />} />

            {/* ✅ BLOG ROUTES (Standardized) */}
            <Route
              path="/blog"
              element={
                <div id="page">
                  <BlogList />
                </div>
              }
            />

            <Route
              path="/blog/:slug"
              element={
                <div id="page">
                  <BlogLayout />
                </div>
              }
            />

            <Route
              path="/likes"
              element={
                <div id="page">
                  <Likes />
                </div>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
          <Analytics />
        </ThemeProvider>
      </AppProvider>
    </GsapProvider>
  );
}

export default App;