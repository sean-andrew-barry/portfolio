import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle('Home');
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Contact />
    </div>
  );
}