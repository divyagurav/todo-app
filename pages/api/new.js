import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://divyagurav:5gSUflVVVacyQ68h@cluster0.90uww8z.mongodb.net/todos?retryWrites=true&w=majority"
    );
    const db = client.db();
    const todosCollection = db.collection("todos");
    const result = await todosCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: "todo instered" });
  }
}

export default handler;
