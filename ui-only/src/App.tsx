import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
