// client/src/App.jsx
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Projects from './Sections/Projects';
import Experience from './Sections/Experience';
import Contact from './Sections/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;