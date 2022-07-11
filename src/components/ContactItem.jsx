// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import editIcon from '../img/edit.png';
import deleteIcon from '../img/delete.png';

const ContactItem = ({ contact }) => {
  const handleDelete = () => {
    console.log(`Contact : ${contact.name} a été supprimé`);
  };

  return (
    <tr className="striped--mid-gray">
      <td className="pa2 tr">{contact.name}</td>
      <td className="pa2 tr">{contact.email}</td>
      <td className="pa2 tr">{contact.phone}</td>
      <td className="pa2 tr">
        <Link to="/add-update-contact" className="link white" onClick={() => console.log('Edit contact')}>
          <img src={editIcon} alt="edit logo"></img>
        </Link>
      </td>
      <td className="pa2 tr">
        <img src={deleteIcon} alt="delete logo" className="white" onClick={handleDelete}></img>
      </td>
    </tr>
  );
};

export default ContactItem;
