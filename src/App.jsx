import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <div className="divide"></div>
      <Technology/>
      <div className="divide"></div>
      <Projects/>
      <div className="divide contact"></div>
      <Contact/>
      <div className="divide footer"></div>
      <Footer/>
    </div>
  );
}

export default App;
