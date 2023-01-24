import './App.css';
import Title from './components/Title';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div className="app">
     <header>
      <NavBar />
     </header>

      <main>
        <Title />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
    </div>
  );
}

export default App;
