import { MongoClient } from "mongodb";

export async function handler(req, res) {
	if (req.method === "POST") {
		const {
			name,

			email,
			message,
		} = req.body;

		if (
			!name ||
			name.trim() === "" ||
			!email ||
			(!email.includes("@") && !email.includes(".")) ||
			!message ||
			message.trim() === ""
		) {
			res.status(422).json({
				message: "Invalid data",
			});
		}

		const newMessage = {
			name,
			email,
			message,
		};

		let client;
		const mongodbConnectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.eucy2zz.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Generic`;

		try {
			client = await MongoClient.connect(mongodbConnectionString);
		} catch (error) {
			res.status(500).json({ message: "Couldn't connect to db" });
			return;
		}

		const db = client.db();

		try {
			const result = await db.collection("messages").insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (error) {
			res.status(500).json({ message: "Failed to save message" });
			client.close();
		}

		client.close();

		res
			.status(201)
			.json({ message: "Message saved to database", data: newMessage });
	}
}

export default handler;
