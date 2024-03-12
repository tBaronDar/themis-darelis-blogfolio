import { useEffect, useState } from "react";

import Notification from "../ui/notification";

import classes from "./contact-form.module.css";

async function fetcher(message) {
	const response = await fetch("/api/contact", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(message),
	});

	const data = await response.json();
	if (!response.ok) {
		throw new Error({ message: data.message || "Generic error" });
	}
}

function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [reqStatus, setReqStatus] = useState();
	const [requestError, setRequestError] = useState();

	useEffect(() => {
		if (reqStatus === "success" || reqStatus === "error") {
			const timer = setTimeout(() => {
				setReqStatus(null);
				setRequestError(null);
			}, 3500);

			return () => clearTimeout(timer);
		}
	}, [reqStatus]);

	async function sendMessageHandler(event) {
		event.preventDefault();

		if (!message || !name || !email) {
			setReqStatus("error");
			throw new Error({ message: "Please check your inputs" });
		}

		const inputMessage = {
			name,
			email,
			message,
		};

		try {
			setReqStatus("pending");
			await fetcher(inputMessage);
			setEmail("");
			setName("");
			setMessage("");
			setReqStatus("success");
		} catch (error) {
			setRequestError(error.message);
			setReqStatus("error");
		}
	}

	let notification;

	if (reqStatus === "pending") {
		notification = {
			title: "Sending",
			message: "Your message is being sent, please wait...",
			status: reqStatus,
		};
	}

	if (reqStatus === "success") {
		notification = {
			title: "Success!",
			message: "Message sent.",
			status: reqStatus,
		};
	}

	if (reqStatus === "error") {
		notification = {
			title: "Error!",
			message: requestError,
			status: "error",
		};
	}

	return (
		<section className={classes.contact}>
			<h1>Contact me here</h1>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your email</label>
						<input
							type="email"
							required
							id="email"
							onChange={(event) => setEmail(event.target.value)}
							value={email}
						/>
					</div>
				</div>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="name">Your name</label>
						<input
							type="text"
							required
							id="name"
							onChange={(event) => setName(event.target.value)}
							value={name}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your message</label>
					<textarea
						rows={5}
						required
						id="message"
						onChange={(event) => setMessage(event.target.value)}
						value={message}
					/>
				</div>
				<div className={classes.actions}>
					<button type="submit" disabled={reqStatus === "pending"}>
						Send message
					</button>
				</div>
			</form>
			{notification && (
				<Notification
					title={notification.title}
					message={notification.message}
					status={notification.status}
				/>
			)}
		</section>
	);
}

export default ContactForm;
