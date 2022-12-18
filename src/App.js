import Navebar from './component/navbar/Navebar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Skills from './component/skills/Skills'
import { useEffect } from 'react';
import AOS from 'aos';
import Footer from './component/footer/Footer';
import Projects from './component/projects/Projects';
function App() {
  useEffect(()=>{
    AOS.init({
      duration:2000,
    })
  },[]);
  return (
    <div className="App">
      <Navebar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
export default App;
