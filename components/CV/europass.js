import { coldarkCold } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";

function Europass({ CV }) {
  return (
    <article>
      <ReactMarkdown>{CV.content}</ReactMarkdown>
    </article>
  );
}

export default Europass;
