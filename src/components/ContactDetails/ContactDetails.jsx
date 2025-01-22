import { useParams } from "react-router";
import classes from "./ContactDetails.module.css";
import { useEffect, useState } from "react";

const ContactDetails = () => {
  const params = useParams();
  const [contactsData, setContactsData] = useState({});

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=50/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        const newData = data.results;
        return setContactsData(newData[0]);
      });
  }, []);

  return (
    <>
      {contactsData.picture ? (
        <div className={classes.ContactDetailsContainer}>
          <div className={classes.pictureBox}>
            <div className={classes.picture}>
              <img src={contactsData.picture.medium} alt="" />
            </div>
            <h2>
              {contactsData.name.first} {contactsData.name.last}
            </h2>
          </div>
          <p className={classes.contactGender}>Gender: {contactsData.gender}</p>
          <p className={classes.contactCountry}>
            Country: {contactsData.location.country}
          </p>
          <p className={classes.contactEmail}>Email: {contactsData.email}</p>
          <p className={classes.contactAddress}>
            Address: {contactsData.location.city} {contactsData.location.state}{" "}
            {contactsData.location.street.name}{" "}
            {contactsData.location.street.number}
          </p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default ContactDetails;
