
import "./App.css"
import Navbar from './components/Navbar';
import AboutMe from './views/AboutMe';
import Home from './views/Home';
import Testimonials from './views/Testimonials';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Testimonials/>
    </div>
  );
}

export default App;
