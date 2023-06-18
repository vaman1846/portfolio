import './App.css';
import Project from './components/Project/Project';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Hero from './components/herosection/Hero';
import Skills from './components/skills/Skills';


function App() {
  return (
    <>
    <div className='mainblock'>
     
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
