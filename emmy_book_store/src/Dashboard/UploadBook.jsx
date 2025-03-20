import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Label, TextInput, Select, Textarea, Spinner } from "flowbite-react";

const UploadBooks = () => {
  const { id } = useParams(); // Get book ID from URL
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    bookTitle: "",
    authorName: "",
    imageURL: "",
    category: "",
    bookDescription: "",
    bookPDFURL: "", // Updated key to match the required structure
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      fetch(`http://localhost:5000/book/${id}`)
        .then((res) => res.json())
        .then((data) => setFormData({
          bookTitle: data.bookTitle,
          authorName: data.authorName,
          imageURL: data.imageURL,
          category: data.category,
          bookDescription: data.bookDescription,
          bookPDFURL: data.bookPDFURL, // Ensure this matches the structure
        }))
        .catch((error) => console.error("Error fetching book details:", error));
    }
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    
    console.log("Form Data:", formData); // Add this line to inspect data
  
    try {
      const response = await fetch(
        id ? `http://localhost:5000/update-book/${id}` : "http://localhost:5000/upload-book",
        {
          method: id ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      
      if (response.ok) {
        setSuccessMessage("Success! The book has been uploaded/updated.");
        setFormData({ // Reset form data after successful submission
          bookTitle: "",
          authorName: "",
          imageURL: "",
          category: "",
          bookDescription: "",
          bookPDFURL: "",
        });
      } else {
        alert("❌ Error processing request. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error processing request. Please try again.");
    }
  
    setIsLoading(false);
  };

  return (
    <div className="ml-56 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {isEditMode ? "Edit Book" : "Upload A Book"}
        </h2>

        <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="title" value="Book Title" className="mb-2 block text-md " />
            <TextInput id="title" name="bookTitle" placeholder="Book name" type="text" value={formData.bookTitle} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="authorName" value="Author Name" className="mb-2 block text-md" />
            <TextInput id="authorName" name="authorName" placeholder="Author Name" type="text" value={formData.authorName} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="imageURL" value="Book Image URL" className="mb-2 block text-md" />
            <TextInput id="imageURL" name="imageURL" placeholder="Book image URL" type="text" value={formData.imageURL} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="category" value="Book Category" className="mb-2 block text-md" />
            <Select id="category" name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="mystery">Mystery</option>
              <option value="fantasy">Fantasy</option>
              <option value="science-fiction">Science Fiction</option>
            </Select>
          </div>

          <div className="col-span-2">
            <Label htmlFor="bookDescription" value="Book Description" className="mb-2 block text-md" />
            <Textarea id="bookDescription" name="bookDescription" placeholder="Write your book description..." rows={6} value={formData.bookDescription} onChange={handleChange} required />
          </div>

          <div className="col-span-2">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" className="mb-2 block text-md" />
            <TextInput id="bookPDFURL" name="bookPDFURL" placeholder="Book PDF URL" type="text" value={formData.bookPDFURL} onChange={handleChange} required />
          </div>

          <div className="col-span-2">
            <Button type="submit" className="w-full text-lg p-0.5 bg-cyan-700 rounded-lg hover:bg-cyan-800 flex justify-center items-center focus:outline-none" disabled={isLoading}>
              {isLoading ? <Spinner size="sm" className="mr-2" /> : isEditMode ? "Update Book" : "Upload Book"}
            </Button>
          </div>
        </form>

        {successMessage && <p className="mt-4 text-center text-green-600 font-semibold">{successMessage}</p>}
      </div>
    </div>
  );
};

export default UploadBooks;
