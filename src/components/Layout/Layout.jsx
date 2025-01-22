import Toolbar from "../Toolbar/Toolbar";

const Layout = ({ children, visitedContacts,onSetVisitedContacts }) => {
  return (
    <div className="container">
      {children}
      <Toolbar
        visitedContacts={visitedContacts}
        onSetVisitedContacts={onSetVisitedContacts}
      />
    </div>
  );
};

export default Layout;
