import Image from "next/image";

import classes from "./CV-header.module.css";

function CVHeader({ headerData }) {
	const { address, phoneNumber, linkedInUrl, email } = headerData;
	const text = (
		<span>
			Date of birth: 20/10/1986 | Phone number: {phoneNumber} | Email adrress:
			<a href={`mailto:${email}`} target="_self">
				{" "}
				{email}
			</a>{" "}
			| LinkedIn:{" "}
			<a target="_blank" href={"https://" + linkedInUrl}>
				{linkedInUrl}
			</a>
			| Address: {address}
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
				<div className={classes["europass-logo"]}>
					<a
						target="_blank"
						href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/themistoklis-darelis/58f6f4cc-eb55-417c-970d-8cbd6f167da3?view=html">
						<Image
							src="/images/CV/europass-logo.png"
							alt="Profile pic"
							width={200}
							height={125}
						/>
					</a>
				</div>
				<div className={classes["name-link"]}>
					<h2>Themistoklis Darelis</h2>
					<a
						href="https://drive.google.com/file/d/1hb22mFDHvIlrRK8b0ALaGsBzOhxD9Ypf/view?usp=sharing"
						target="_blank">
						Get a PDF copy
					</a>
				</div>
				<p>{text}</p>
			</div>
		</header>
	);
}

export default CVHeader;
