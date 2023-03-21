import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Technology from './components/Technology';
// import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <div className="divide"></div>
      <Technology/>
      <div className="divide"></div>
      <Projects/>
      <div className="divide"></div>
      {/* <Test/> */}
    </div>
  );
}

export default App;
