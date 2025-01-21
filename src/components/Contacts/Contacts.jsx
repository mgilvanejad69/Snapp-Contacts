import { useNavigate } from "react-router";
import { useEffect, useState } from "react";


const Contacts = () => {
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.results.map((elem, index) => ({
          ...elem,
          id: index + 1,
        }));
        setCustomerData(newData);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(customerData);

  const handleContactDetail = (contactID) => {
    navigate(`/contacts/${contactID}`);
  };

  return (
    <div className="contactsContainer">
      <div className="SearchBoxContainer"></div>
      <div className="contactsBox">
        <div className="VisitedListContainer">
          <h1>sdfsdfd</h1>
          <h1>sdfsdfd</h1>
          <p>sdfsdfd</p>
        </div>
        <ul>
          {customerData.map((elem) => (
            <li key={elem.id}>
              <button onClick={() => handleContactDetail(elem.id)}>
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
