import CVContent from "../../components/CV/CV-content";
import { getCV } from "../../lib/cv-utils";

function CVPage({ CV }) {
	return <CVContent CV={CV} />;
}

export default CVPage;

export function getStaticProps() {
	return {
		props: {
			CV: getCV(),
		},
	};
}
