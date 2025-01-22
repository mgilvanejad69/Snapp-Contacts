import { useState } from "react";
import FrequentContacts from "../VisitedContact/VisitedContact";
import ContactBox from "../ContactBox/ContactBox";
import SearchBox from "../SearchBox/SearchBox";

const Contacts = ({ visitedContacts, onSetVisitedContacts }) => {
  const [contactSearch, setContactSearch] = useState([]);
  const [status, setStatus] = useState(false);

  return (
    <div className="contactsContainer">
      <SearchBox
        onSetContactSearch={setContactSearch}
        onSetStatus={setStatus}
      />

      <div className="contactsBox">
        <FrequentContacts
          visitedContacts={visitedContacts}
          onSetVisitedContacts={onSetVisitedContacts}
        />
        <ContactBox
          contactSearch={contactSearch}
          visitedContacts={visitedContacts}
          onSetVisitedContacts={onSetVisitedContacts}
          status={status}
        />
      </div>
    </div>
  );
};

export default Contacts;
