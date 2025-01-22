import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const Contacts = ({ visitedContacts, onSetVisitedContacts }) => {
  const navigate = useNavigate();
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

  const handleContactDetail = (contact) => {
    navigate(`/contacts/${contact.id}`);

    if (visitedContacts.length == 0) {
      onSetVisitedContacts([...visitedContacts, contact]);
    }
    if (visitedContacts.length != 0) {
      const visitedFiltered = visitedContacts.filter(
        (elem) => elem.id != contact.id
      );

      visitedFiltered.unshift(contact);
      if (visitedFiltered.length > 4) {
        visitedFiltered.pop();
      }
      onSetVisitedContacts(visitedFiltered);
    }
  };

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
        <>
          {visitedContacts.length > 0 ? (
            <ul className="VisitedListContainer">
              {visitedContacts.map((elem) => (
                <li key={elem.id}>
                  <button
                    className="visitedContact"
                    onClick={() => handleContactDetail(elem)}
                  >
                    <div className="contactPicture">
                      <img src={elem.picture.medium} alt="" />
                    </div>
                    <div className="contactInfo">
                      <h6 className="fullName">
                        {elem.name.title} {elem.name.first} {elem.name.last}
                      </h6>
                      <div className="numberCity">
                        <p className="phone">{elem.phone}</p>
                        <p className="city">{elem.location.city}</p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </>
        <ul>
          {contactSearch.map((elem) => (
            <li key={elem.id}>
              <button onClick={() => handleContactDetail(elem)}>
                <div className="contactPicture">
                  <img src={elem.picture.medium} alt="" />
                </div>
                <div className="contactInfo">
                  <h6 className="fullName">
                    {elem.name.title} {elem.name.first} {elem.name.last}
                  </h6>
                  <div className="numberCity">
                    <p className="phone">{elem.phone}</p>
                    <p className="city">{elem.location.city}</p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
