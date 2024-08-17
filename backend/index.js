require("dotenv").config();
const express = require("express");
const cardModel = require("./models/cardModel");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
const corsConfig = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};

// Enable CORS
app.use(cors(corsConfig));
app.options("", cors(corsConfig));
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = client.db("help_center");

    // Create a card
    app.post("/cards", async (req, res) => {
      const { title, description } = req.body;
      if (!title || !description) {
        return res
          .status(400)
          .json({ error: "Title and description are required" });
      }

      try {
        const card = await cardModel.createCard(db, title, description);
        res.status(201).json(card);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create card" });
      }
    });

    // Get all cards
    app.get("/cards", async (req, res) => {
      try {
        const cards = await cardModel.getAllCards(db);
        res.status(200).json(cards);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to retrieve cards" });
      }
    });

    // Get a specific card by title
    app.get("/cards/:title", async (req, res) => {
      try {
        const card = await cardModel.getCardByTitle(db, req.params.title);
        if (card) {
          res.status(200).json(card);
        } else {
          res.status(404).json({ error: "Card not found" });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to retrieve card" });
      }
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("help center api is running!!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
