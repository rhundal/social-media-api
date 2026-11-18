import "dotenv/config";
import express from "express";
import { MongoClient } from "mongodb";

const app = express();

const PORT = process.env.PORT || 3000;

//  connect to the database using the URI

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);

async function connectToDB() {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Connected successfully to MongoDB!");
}

app.get("/", async (req, res) => {
  try {
    await connectToDB();
    res
      .status(200)
      .json({ status: "Successfully connected to MongoDB database!" });
  } catch (err) {
    console.error("Connection failed: ", err);
    res.status(500).json({ message: "Failed to connect to the database." });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
