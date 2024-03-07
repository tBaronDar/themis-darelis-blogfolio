import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const DUMMY_POST = {
  title: "rourou",
  date: "2027-5-6",
  image: "getting-started-nextjs.png",
  slug: "a-slug",
  content: "# This is a description of a Project",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
