import Image from "next/image";

import classes from "./CV-header.module.css";

function CVHeader() {
	return (
		<header className={classes.header}>
			<p>Date of birth: 20/10/1986</p>
		</header>
	);
}

export default CVHeader;
