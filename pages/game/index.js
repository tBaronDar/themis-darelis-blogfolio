import { useEffect, useState } from "react";

function GamePage() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);
	return (
		<div>
			{isClient && (
				<iframe
					frameborder="0"
					src="https://itch.io/embed-upload/10640048?color=333333"
					allowfullscreen=""
					width="640"
					height="380">
					<a href="https://thedar1.itch.io/quiqui-run">
						Play Quiqui Run on itch.io
					</a>
				</iframe>
			)}
		</div>
	);
}

export default GamePage;
