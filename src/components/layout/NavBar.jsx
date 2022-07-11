import { Link } from 'react-router-dom';

const NavBar = ({ title }) => {
  return (
    <nav className="flex justify-between items-center white bg-purple pa2">
      <Link to="/" className="f2 link white">
        {title}
      </Link>
      <div>
        <button className="pa2 ma2 bg-blue bn br-pill">
          <Link to="/products" className="link white">
            Produits
          </Link>
        </button>
        <button className="pa2 ma2 bg-dark-green bn br-pill">
          <Link to="/contacts" className="link white">
            Contacts
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
