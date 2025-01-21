import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import ContactDetails from "./components/ContactDetails/ContactDetails";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Contacts"
            element={<Contacts />}
          />
          <Route
            path="/Contacts/:id"
            element={<ContactDetails />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
