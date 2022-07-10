import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import ProductItem from './ProductItem';
import Loader from '../img/loader.svg';

const Products = () => {
  const loading = false;
  if (loading) {
    return (
      <Fragment>
        <Loader />
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
          {/* <tbody>
            {products !== null && products.map((product) => <ProductItem key={product.id} product={product} />)}
          </tbody> */}
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
