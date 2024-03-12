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
		try {
			client = await MongoClient.connect(
				"mongodb+srv://thebaron:RwXS2VsiZvfez7B@generic.eucy2zz.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Generic"
			);
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
