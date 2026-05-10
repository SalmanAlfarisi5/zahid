import './App.css';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import StatsBar      from './components/StatsBar';
import About         from './components/About';
import Achievements  from './components/Achievements';
import Organizations from './components/Organizations';
import Skills        from './components/Skills';
import Media         from './components/Media';
import Contact       from './components/Contact';
import Footer        from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Achievements />
      <Organizations />
      <Skills />
      <Media />
      <Contact />
      <Footer />
    </>
  );
}
