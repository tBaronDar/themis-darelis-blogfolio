import Head from "next/head";

import CVContent from "../../components/CV/CV-content";
import { getCV } from "../../lib/cv-utils";

function CVPage({ CV }) {
  return (
    <>
      <Head>
        <title>My CV</title>
        <meta
          name="description"
          content="Have a look and download my CV in europass format"
        />
      </Head>
      <CVContent CV={CV} />
    </>
  );
}

export default CVPage;

export function getStaticProps() {
  return {
    props: {
      CV: getCV(),
    },
  };
}
