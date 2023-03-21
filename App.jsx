import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Technology from './components/Technology';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <div className="divide"></div>
      <Technology/>
      <div className="divide"></div>
      <Projects/>
      <div className="divide footer"></div>
      <Contact/>
    </div>
  );
}

export default App;
