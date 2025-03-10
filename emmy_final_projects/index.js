const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// MongoDB Configuration
const uri = "mongodb+srv://niyonsengaemmy14974:wUtV9IsxgNYhjjdE@cluster0.ahjqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect to MongoDB
        await client.connect();

        // Create a collection reference
        const booksCollections = client.db("BookInventory").collection("books");

        // Insert a book into the database (POST)
        app.post("/upload-book", async (req, res) => {
            const data = req.body;
            const result = await booksCollections.insertOne(data);
            res.send(result);
        });

        // Get all books from the database (GET)
        app.get("/all-books", async (req, res) => {
            const books = booksCollections.find();
            const result = await books.toArray();
            res.send(result);
        });

        // Update a book in the database (PUT)
        app.patch("/update-book/:id", async (req, res) => {
            try {
                const bookId = req.params.id;
                const updatedData = req.body;

                const result = await booksCollections.updateOne(
                    { _id: new ObjectId(bookId) }, // Find book by ID
                    { $set: updatedData } // Update book data
                );

                if (result.modifiedCount > 0) {
                    res.send({
                        acknowledged: true,
                        modifiedCount: 1,
                        upsertedId: null,
                        upsertedCount: 0,
                        matchedCount: 1
                    });
                } else {
                    res.status(404).send({ message: "Book not found or no changes made" });
                }
            } catch (error) {
                res.status(500).send({ message: "Error updating book", error });
            }
        });

        // Delete a book from the database (DELETE)
        app.delete("/delete-book/:id", async (req, res) => {
            try {
                const bookId = req.params.id;
                const result = await booksCollections.deleteOne({ _id: new ObjectId(bookId) });

                if (result.deletedCount > 0) {
                    res.send({
                        acknowledged: true,
                        deleteCount: 1,
                    });
                } else {
                    res.status(404).send({ message: "Book not found" });
                }
            } catch (error) {
                res.status(500).send({ message: "Error deleting book", error });
            }
        });

        // Find books by category
        app.get("/upload-book", async (req, res) => {
            try {
                const category = req.query.category;
                let query = {};
                if (category) {
                    query = { category: category };
                }
                const result = await booksCollections.find(query).toArray();
                res.send(result);
            } catch (error) {
                res.status(500).send({ message: "Error fetching books by category", error });
            }
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when finished/error
        // await client.close();
    }
}
run().catch(console.dir);

// Start the Express server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
