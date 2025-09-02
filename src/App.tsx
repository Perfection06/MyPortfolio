import './App.css'
import Hero from "@/components/Hero";
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      {/* Future sections: About, Projects, Contact */}
    </div>
  );
}

export default App;