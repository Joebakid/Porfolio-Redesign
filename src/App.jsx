import { Routes, Route } from "react-router-dom";

import Navigation from "./components/landing page/navigation";
import Footer from "./components/landing page/footer";

import Resume from "./components/landing page/Resume";
import Home from "./pages/Home";
import BlogList from "./components/blog/BlogList";
import Likes from "./components/landing page/likes";

import { ThemeProvider } from "./components/theme/theme-context";
import { AppProvider } from "./state/AppContext";
import GsapProvider from "./gsap/GsapProvider";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <GsapProvider>
      <AppProvider>
        <ThemeProvider>
          {/* Scroll reset + fade-in */}
          <ScrollToTop />

          {/* Global navigation */}
          <Navigation />

          {/* Page content */}
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

            <Route
              path="/bloglist"
              element={
                <div id="page">
                  <BlogList />
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
          </Routes>

          {/* Global footer */}
          <Footer />
        </ThemeProvider>
      </AppProvider>
    </GsapProvider>
  );
}

export default App;
