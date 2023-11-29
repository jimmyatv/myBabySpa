import './App.css';
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
    </div>
  );
};

export default App;
