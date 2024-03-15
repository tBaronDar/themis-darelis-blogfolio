import Europass from "../../components/CV/europass";
import { getCV } from "../../lib/cv-utils";

function CVPage({ CV }) {
  return <Europass CV={CV} />;
}

export default CVPage;

export function getStaticProps() {
  return {
    props: {
      CV: getCV(),
    },
  };
}
