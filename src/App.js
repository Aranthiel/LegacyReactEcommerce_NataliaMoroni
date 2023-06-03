
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//components
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductCard/>
      <Footer/>
    </div>
  );
}

export default App;
