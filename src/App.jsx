import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">MD JANNATUL NAIM</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <h1>Hi, I'm MD JANNATUL NAIM</h1>
        <h2>Computer Science Student | Full-Stack Developer</h2>
        <p>I build web applications and explore AI/ML. Currently learning full-stack development.</p>
        <a href="#projects" className="btn">View My Work</a>
      </section>

      <About />
      <Projects />
      <Contact />
      <footer>
    <p>&copy; 2026 MD Jannatul Naim. All rights reserved.</p>
</footer>
    </>
  )
}

export default App