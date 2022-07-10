import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import editIcon from '../../img/edit.png';
import deleteIcon from '../../img/delete.png';

const ProductItem = () => {
  const handleDelete = () => {
    console.log(`Produit ref : ??? a été supprimé`);
  };

  return (
    <tr className="striped--mid-gray">
      <td className="pa2 tr">reference</td>
      <td className="pa2 tr">designation</td>
      <td className="pa2 tr">unitPrice €</td>
      <td className="pa2 tr">rate %</td>
      {/* <td className="pa2 tr">{product.reference}</td>
      <td className="pa2 tr">{product.designation}</td>
      <td className="pa2 tr">{product.unitPrice} €</td>
      <td className="pa2 tr">{product.rate} %</td> */}
      <td className="pa2 tr">
        <Link to="/add-update-product" className="link white" onClick={() => console.log('Edit product')}>
          <img src={editIcon} alt="edit logo"></img>
        </Link>
      </td>
      <td className="pa2 tr">
        <img src={deleteIcon} alt="delete logo" className="white" onClick={handleDelete}></img>
      </td>
    </tr>
  );
};

export default ProductItem;
