import logo from './logo.svg';
import './App.css';
import { Route,Routes,Outlet } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Categories from './components/Categories';
import Header from './components/Header';
import Payment from './components/Payment';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>
        <Route  path="payment" element={<Payment />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
