import Image from "next/image";

import classes from "./CV-header.module.css";

function CVHeader({ headerData }) {
  const { address, phoneNumber, linkedInUrl, email } = headerData;
  const text = (
    <span>
      Date of birth: 20/10/1986 | Phone number: {phoneNumber} | Email adrress:
      {email} | LinkedIn:
      <a target="_blank" href={"https://" + linkedInUrl}>
        {linkedInUrl}
      </a>
      | Address: ${address}
    </span>
  );

  return (
    <header className={classes.header}>
      <div className={classes.image}>
        <Image
          src="/images/CV/linkedIn-profile-pic.png"
          alt="Profile pic"
          width={250}
          height={250}
        />
      </div>
      <div className={classes.text}>
        <div className={classes["name-link"]}>
          <h2>Themistoklis Darelis</h2>
          <a
            href="https://drive.google.com/file/d/1hb22mFDHvIlrRK8b0ALaGsBzOhxD9Ypf/view?usp=drive_link"
            target="_blank"
          >
            <h3>Get a PDF copy</h3>
          </a>
        </div>
        <p>{text}</p>
      </div>
    </header>
  );
}

export default CVHeader;
