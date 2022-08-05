
import './App.css';
import Navbar from './Comonent/Navbar/Navbar';
import Home from './Comonent/Home/home';
import Why_us from './Comonent/Why us/why_us';
import Blog from './Comonent/blog/blog';
import { Product } from './Comonent/product/product';


function App() {
  return (
    <div className="App">
     <Navbar />
      <Home />
      <Product />
      <Why_us />
      <Blog />
      
    </div>
  );
}


export default App;
