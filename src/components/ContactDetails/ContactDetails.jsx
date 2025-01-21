import { useParams } from "react-router";
import classes from "./ContactDetails.module.css";

const ContactDetails = () => {
  const params = useParams();

  fetch(`https://randomuser.me/api/?results=50`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div className={classes.ContactDetailsContainer}>
      <div className={classes.pictureBox}>
        <div className={classes.picture}>
          <img src="" alt="" />
        </div>
        <h3></h3>
      </div>
      <p className={classes.contactCity}></p>
      <p className={classes.contactEmail}></p>
      <p className={classes.contactAddress}></p>
    </div>
  );
};

export default ContactDetails;
