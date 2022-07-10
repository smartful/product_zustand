import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store';
import { isEmptyObject } from '../utils';
import ProductItem from './ProductItem';
import loader from '../img/loader.svg';

const Products = () => {
  const fetchProducts = useStore((state) => state.fetchProducts);
  const products = useStore((state) => state.products);
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('products : ', products);

  if (loading) {
    return (
      <Fragment>
        <img src={loader} className="App-logo" alt="loading..." />
      </Fragment>
    );
  }

  return (
    <div className="tc">
      <h1>Produits</h1>
      <div className="flex justify-center">
        <table className="collapse pa2">
          <thead>
            <tr>
              <th className="pa2 tl">Référence</th>
              <th className="pa2 tl">Dégignation</th>
              <th className="pa2 tl">Prix unitaire</th>
              <th className="pa2 tl">Taux TVA</th>
            </tr>
          </thead>
          <tbody>
            {(products !== null || !isEmptyObject(products)) &&
              products.map((product) => <ProductItem key={product.id} product={product} />)}
          </tbody>
        </table>
      </div>
      <button className="pa2 ma2 bg-dark-pink bn br-pill">
        <Link to="/add-update-product" className="link white">
          Ajouter
        </Link>
      </button>
    </div>
  );
};

export default Products;
