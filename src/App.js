import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';

function App() {
  const date = new Date();
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <Card 
        // img="person_1.png"
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
      />
    </div>
  );
}

export default App;
