import { useState, useEffect } from "react";
import './App.css';
import Loader from './components/Loader/Loader';
import BackToTop from './components/BackToTop/BackToTop';
import DropDown from './components/DropDown/DropDown';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Hero from './components/Hero/Hero';
import Newsletter from './components/Newsletter/Newsletter';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
// import Testemonials from './components/Testemonials/Testemonials';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulacija učitavanja (ovde možeš dodati logiku za video)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader traje 2 sekunde (prilagodi po potrebi)
  }, []);

  return (
    <div className="App">
      {loading && <Loader />} {/* Loader se pojavljuje odmah */}

      {/* Glavni sadržaj stranice */}
      <Hero />
      <Reasons />
      <Gallery />
      <Programs />
      <Plans />
      <Newsletter />
      <Footer />
      <DropDown />
      <BackToTop />
    </div>
  );
};

export default App;
