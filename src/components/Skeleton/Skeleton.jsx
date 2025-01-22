import classes from "./Skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={classes.ContactDetailsContainer}>
      <div className={classes.pictureBox}></div>
      <p className={classes.contactGender}></p>
      <p className={classes.contactCountry}></p>
      <p className={classes.contactEmail}></p>
      <p className={classes.contactAddress}></p>
    </div>
  );
};

export default Skeleton;
