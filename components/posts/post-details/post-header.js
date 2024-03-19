import Image from "next/image";
import classes from "./post-header.module.css";

function PostHeader({ title, image }) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <div>
        <Image alt={title} src={image} width={550} height={275} />
      </div>
    </header>
  );
}

export default PostHeader;
