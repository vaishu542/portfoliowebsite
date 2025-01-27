import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import ScrollUp from './components/ScrollUp';

function App() {
  return (
    <>
      <div className="absolute min-h-screen">
        <div className="fixed inset-0 z-[-2] bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
          </div>
        </div>
      </div>
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <ScrollUp/>
      
    </>
  )
}

export default App;
