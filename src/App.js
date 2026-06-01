
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/home';
import WhyUs from './components/WhyUs/why_us';
import Blog from './components/blog/blog';
import { Product } from './components/product/product';
import StatsBar from './components/StatsBar/StatsBar';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Product />
      <WhyUs />
      <StatsBar />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
