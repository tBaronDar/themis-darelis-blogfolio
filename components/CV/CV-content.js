import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import classes from "./CV-content.module.css";
import CVHeader from "./CV-header";

function CVcontent({ CV }) {
  return (
    <article className={classes.content}>
      <CVHeader headerData={CV.data} />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{CV.content}</ReactMarkdown>
    </article>
  );
}

export default CVcontent;
