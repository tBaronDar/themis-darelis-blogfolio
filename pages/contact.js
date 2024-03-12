import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

function ContactPage() {
	return (
		<>
			<Head>
				<title>Keep it touch!</title>
				<meta
					name="description"
					content="Leave a message or ask me a question"
				/>
			</Head>
			<ContactForm />
		</>
	);
}

export default ContactPage;
