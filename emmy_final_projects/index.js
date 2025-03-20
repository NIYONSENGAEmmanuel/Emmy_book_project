const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Configuration
const uri = "mongodb+srv://niyonsengaemmy14974:wUtV9IsxgNYhjjdE@cluster0.ahjqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const booksCollections = client.db("BookInventory").collection("books");

    // Add a new book (POST)
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await booksCollections.insertOne(data);
      res.status(200).json(result); // Return result as JSON
    });

    // Get all books (GET)
    app.get("/all-books", async (req, res) => {
      const books = await booksCollections.find().toArray();
      res.status(200).json(books); // Return books as JSON
    });

    // Get a single book by ID (GET)
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const book = await booksCollections.findOne({ _id: new ObjectId(id) });

      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      res.status(200).json(book); // Return book as JSON
    });

    // Update a book by ID (PUT)
    app.put("/update-book/:id", async (req, res) => {
      const id = req.params.id;
      const updatedData = req.body;

      const result = await booksCollections.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ message: "Book not found" });
      }

      res.status(200).json({ message: "Book updated successfully!", result });
    });

    // Delete a book by ID (DELETE)
    app.delete("/delete-book/:id", async (req, res) => {
      const id = req.params.id;
      const result = await booksCollections.deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Book not found" });
      }

      res.status(200).json({ message: "Book deleted successfully!" });
    });

    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

run();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
