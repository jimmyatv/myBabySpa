import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';

const App = () => {
  return (
    <div className="App">
      <Hero/>
      <Reasons/>
      <Programs/>
    </div>
  );
};

export default App;
