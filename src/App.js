import './App.css';
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
  return (
    <div className="App">
      <Hero/>
      <Reasons/>
      <Gallery/>
      {/* <Testemonials/> */}
      <Programs/>
      <Plans/>
      <Newsletter/>
      <Footer/>
      <DropDown/>
      <BackToTop/>
    </div>
  );
};

export default App;
