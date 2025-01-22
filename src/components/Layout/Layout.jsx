import Toolbar from "../Toolbar/Toolbar";

const Layout = ({ children}) => {
  return (
    <div className="container">
      {children}
      <Toolbar />
    </div>
  );
};

export default Layout;
