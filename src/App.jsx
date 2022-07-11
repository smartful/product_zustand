import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';
import Home from './components/Home';
import NavBar from './components/layout/NavBar';
import ProductForm from './components/ProductForm';
import Products from './components/Products';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Router>
        <div className="flex flex-column justify-center white tc">
          <NavBar title="Product" />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-update-product" element={<ProductForm />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/add-update-contact" element={<ContactForm />} />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
