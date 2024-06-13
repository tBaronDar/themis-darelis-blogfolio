import { useState, useEffect } from "react";

import classes from "./quiquirun.module.css";

function Quiquirun() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);
	return (
		<div className={classes.widget}>
			<h1>sffsfs</h1>
			{isClient && (
				<iframe
					frameborder="0"
					src="https://itch.io/embed/2761298"
					width="552"
					height="167">
					<a href="https://thedar1.itch.io/quiqui-run">Quiqui Run by theDar1</a>
				</iframe>
			)}{" "}
		</div>
	);
}

export default Quiquirun;
