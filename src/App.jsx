import { Routes, Route } from "react-router-dom";

import Navigation from "./components/landing page/navigation";
import Resume from "./components/landing page/Resume";
import Home from "./pages/Home";

import { ThemeProvider } from "./components/theme/theme-context";
import { AppProvider } from "./state/AppContext";

import BlogList from "./components/blog/BlogList";

import GsapProvider from "./gsap/GsapProvider";
import ScrollToTop from "./components/ScrollToTop";
import Likes from './components/landing page/likes'

function App() {
  return (
    <GsapProvider>
      <AppProvider>
        <ThemeProvider>
          {/* Handles scroll reset + GSAP fade-in */}
          <ScrollToTop />

          {/* Persistent navigation */}
          <Navigation />

          {/* Page wrapper for GSAP */}
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
        </ThemeProvider>
      </AppProvider>
    </GsapProvider>
  );
}

export default App;
