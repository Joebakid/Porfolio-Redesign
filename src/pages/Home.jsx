import Intro from "../components/landing page/Intro";
import About from "../components/landing page/About";
import Experience from "../components/landing page/Experience";
import Education from "../components/landing page/Education";
import Stack from "../components/landing page/Stack";
import Projects from "../components/landing page/project";
import Footer from "../components/landing page/footer";


export default function Home() {
  return (
    <main className="app">
      <Intro />
      <About />
      <Experience />
      <Education />
      <Stack />
      <Projects />
      <Footer />
    </main>
  );
}
