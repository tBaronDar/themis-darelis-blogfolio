import classes from "./contact-form.module.css";

function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>Contact me here</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" required id="email" />
          </div>
        </div>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" required id="name" />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea rows={5} required id="message" />
        </div>
        <div className={classes.actions}>
          <button type="submit">Send message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
