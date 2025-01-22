import { useNavigate } from "react-router";
import SkeletonContacts from "../SkeletonContacts/SkeletonContacts";

const ContactBox = ({
  contactSearch,
  visitedContacts,
  onSetVisitedContacts,
  status,
}) => {
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
      {status ? (
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
      ) : (
        <SkeletonContacts />
      )}
    </>
  );
};

export default ContactBox;
