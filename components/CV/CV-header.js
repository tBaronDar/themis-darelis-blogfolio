import Image from "next/image";

import classes from "./CV-header.module.css";

function CVHeader({ headerData }) {
  const { address, phoneNumber, linkedinUrl, email } = headerData;
  const text = `Date of birth: 20/10/1986 | Phone number: ${phoneNumber} | Email adrress: ${email} | LinkedIn: ${linkedinUrl} | Address: ${address}`;

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
      <div>
        <div className={classes.name}>
          <h2>Themistoklis Darelis</h2>
          <a href="http://in.gr">
            <h3>Get a PDF copy</h3>
          </a>
        </div>
        <p>{text}</p>
      </div>
    </header>
  );
}

export default CVHeader;
