import Link from "next/link";
import Logo from "./logo";

import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <Logo />
      </Link>
      <ul>
        <li>
          <Link href={"/posts"}>Posts</Link>
        </li>
        <li>
          <Link href={"/game"}>Game</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/CV"}>CV</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
