import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
// import { Task } from './components/Task';
// import Carousel from '.components/Carousal.js'
import Carousel from './components/Carousal'
import { General } from './components/General';
import { Services } from './components/Services';
import { Construct } from './components/Construct';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      {/* <Task /> */}
      <General />
      <Services />
      <Construct />
      {/* <Work /> */}
        {/* <Carousel /> */}
        <Contact />
        <Location />
        <Footer />
    </div>
  );
}

export default App;
