import { useNavigate } from "react-router";

const FrequentContacts = ({ visitedContacts, onSetVisitedContacts }) => {
  const navigate = useNavigate();

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
  return (
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
  );
};

export default FrequentContacts;
