import { Link } from "react-router";

const Toolbar = ({ children}) => {
  
  return (
    <>
      {children}
      <div className="ToolbarContainer">
        <Link to="/">
          <button className="homeBtn">Home</button>
        </Link>
        <Link to="/Contacts">
          <button className="contactsBtn">
            Contacts
          </button>
        </Link>
      </div>
    </>
  );
};

export default Toolbar;
