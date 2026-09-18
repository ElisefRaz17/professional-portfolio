import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./sections/About";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import { SampleReactComponents } from "./components/SampleReactComponents";
import FigmaUI from "./components/FigmaUI";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Project />
      <SampleReactComponents />
      <FigmaUI />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
