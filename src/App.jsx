import { Routes, Route } from "react-router-dom";

import Navigation from "./components/landing page/navigation";
import Resume from "./components/landing page/Resume";
import Home from "./pages/Home";

import { ThemeProvider } from "./components/theme/theme-context";
import { AppProvider } from "./state/AppContext";

import BlogList from '../src/components/blog/BlogList'

function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/bloglist" element={<BlogList/>} />
        </Routes>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
