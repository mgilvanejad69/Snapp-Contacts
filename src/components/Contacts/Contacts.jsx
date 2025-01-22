import { useEffect, useState } from "react";
import FrequentContacts from "../VisitedContact/VisitedContact";
import ContactBox from "../ContactBox/ContactBox";

const Contacts = ({ visitedContacts, onSetVisitedContacts }) => {
  const [customerData, setCustomerData] = useState([]);
  const [contactSearch, setContactSearch] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.results.map((elem, index) => ({
          ...elem,
          id: index + 1,
        }));
        setCustomerData(newData);
        setContactSearch(newData);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (e) => {
    let value = e.target.value;
    const searchFiltered = customerData.filter(
      (elem) =>
        elem.name.title.toLowerCase().includes(value.toLowerCase()) ||
        elem.name.first.toLowerCase().includes(value.toLowerCase()) ||
        elem.name.last.toLowerCase().includes(value.toLowerCase()) ||
        elem.phone.includes(value)
    );
    setContactSearch(searchFiltered);
  };

  return (
    <div className="contactsContainer">
      <div className="SearchBoxContainer">
        <form>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Contact..."
            onChange={handleSearch}
          />
        </form>
      </div>

      <div className="contactsBox">
        <FrequentContacts
          visitedContacts={visitedContacts}
          onSetVisitedContacts={onSetVisitedContacts}
        />
        <ContactBox
          contactSearch={contactSearch}
          visitedContacts={visitedContacts}
          onSetVisitedContacts={onSetVisitedContacts}
        />
      </div>
    </div>
  );
};

export default Contacts;
