import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Newsletter from './components/Newsletter/Newsletter';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';

const App = () => {
  return (
    <div className="App">
      <Hero/>
      <Reasons/>
      <Programs/>
      <Plans/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default App;
