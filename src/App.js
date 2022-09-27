import Navebar from './component/navbar/Navebar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Services from './component/services/Services';
import { useEffect } from 'react';
import AOS from 'aos';
import Footer from './component/footer/Footer';

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
      <Services />
      <Footer />
    </div>
  );
}
export default App;
