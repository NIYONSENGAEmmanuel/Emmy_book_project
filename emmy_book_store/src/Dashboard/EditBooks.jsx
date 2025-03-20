import { Button, Label, TextInput, Select, Textarea, Spinner } from "flowbite-react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // Koresha useNavigate muri version ya 6

const EditBooks = () => {
  const book = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bookTitle: "",
    authorName: "",
    imageURL: "",
    category: "",
    bookDescription: "",
    bookPdfURL: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (book) {
      setFormData({
        bookTitle: book.bookTitle || "",
        authorName: book.authorName || "",
        imageURL: book.imageURL || "",
        category: book.category || "",
        bookDescription: book.bookDescription || "",
        bookPdfURL: book.bookPdfURL || "",
      });
    }
  }, [book]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading || !book?._id) return;

    setIsLoading(true);
    setSuccessMessage("");

    try {
      const res = await fetch(`http://localhost:5000/update-book/${book._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await res.json();

      if (res.ok) {
        setSuccessMessage("Book updated successfully!");
        navigate("/admin/dashboard/manage");
      } else {
        console.error('Error response:', responseData);
        alert(`Failed to update book: ${responseData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error updating book:", error);
      alert("An error occurred while updating the book.");
    }

    setIsLoading(false);
  };

  return (
    <div className="ml-56 flex  justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Edit the Book Data</h2>
        <form className="grid grid-cols-1  sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Book Title */}
          <div className="flex flex-col ">
            <Label htmlFor="bookTitle" value="Book Title" className="mb-2 text-md font-medium " />
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Enter Book Title"
              type="text"
              value={formData.bookTitle}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-2 text-bl focus:outline-none focus:ring-2 focus:ring-cyan-600 w-full sm:w-[400px]"
            />
          </div>

          {/* Author Name */}
          <div className="flex flex-col">
            <Label htmlFor="authorName" value="Author Name" className="mb-2 text-md font-medium" />
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Enter Author Name"
              type="text"
              value={formData.authorName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600 w-full sm:w-[400px]"
            />
          </div>

          {/* Book Image URL */}
          <div className="flex flex-col">
            <Label htmlFor="imageURL" value="Book Image URL" className="mb-2 text-md font-medium" />
            <TextInput
              id="imageURL"
              name="imageURL"
              placeholder="Enter Image URL"
              type="text"
              value={formData.imageURL}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600 w-full sm:w-[400px]"
            />
          </div>

          {/* Book Category */}
          <div className="flex flex-col">
            <Label htmlFor="category" value="Book Category" className="mb-2 text-md font-medium" />
            <Select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600 w-full sm:w-[400px]"
            >
              <option value="">Select Category</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="mystery">Mystery</option>
              <option value="fantasy">Fantasy</option>
              <option value="science-fiction">Science Fiction</option>
            </Select>
          </div>

          {/* Book Description and Book PDF URL on Same Line */}
          <div className="col-span-2 flex flex-wrap gap-6">
            <div className="flex flex-col w-full sm:w-[48%]">
              <Label htmlFor="bookDescription" value="Book Description" className="mb-2 text-md font-medium" />
              <Textarea
                id="bookDescription"
                name="bookDescription"
                placeholder="Write your book description..."
                rows={6}
                value={formData.bookDescription}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600 w-full"
              />
            </div>

            <div className="flex flex-col w-full sm:w-[48%]">
              <Label htmlFor="bookPdfURL" value="Book PDF URL" className="mb-2 text-md font-medium" />
              <TextInput
                id="bookPdfURL"
                name="bookPdfURL"
                placeholder="Enter Book PDF URL"
                type="text"
                value={formData.bookPdfURL}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600 w-full"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <Button
              type="submit"
              className="w-full max-w-xs text-lg p-2 bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium flex justify-center items-center focus:outline-none"
              disabled={isLoading}
            >
              {isLoading ? <Spinner size="sm" className="mr-2" /> : "Upload Book"}
            </Button>
          </div>
        </form>

        {successMessage && <p className="mt-4 text-center text-green-600 font-semibold">{successMessage}</p>}
      </div>
    </div>
  );
};

export default EditBooks;
