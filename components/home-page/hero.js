import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          alt="An image showing me"
          src="/images/app/img.jpg"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Themis</h1>
      <p>This my personal web portfolio and blog.</p>
    </section>
  );
}

export default Hero;
