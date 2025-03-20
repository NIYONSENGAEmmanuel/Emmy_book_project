import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/delete-book/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Book deleted successfully!");
        setAllBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      } else {
        alert("❌ Failed to delete book: " + data.message);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">📚 Manage Books</h2>
      <div className="overflow-x-auto ml-52">
        <table className="w-full min-w-[600px] border-collapse border border-gray-300">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="border border-gray-300 px-4 py-2">BOOK NAME</th>
              <th className="border border-gray-300 px-4 py-2">AUTHOR NAME</th>
              <th className="border border-gray-300 px-4 py-2">CATEGORY</th>
              <th className="border border-gray-300 px-4 py-2">PRICE</th>
              <th className="border border-gray-300 px-4 py-2">EDIT OR MANAGE</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {allBooks.map((book) => (
              <tr key={book._id} className="bg-white text-sm md:text-base">
                <td className="border border-gray-300 px-4 py-2">{book.bookTitle}</td>
                <td className="border border-gray-300 px-4 py-2">{book.authorName}</td>
                <td className="border border-gray-300 px-4 py-2">{book.category}</td>
                <td className="border border-gray-300 px-4 py-2">${book.price}</td>
                <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                  <Link
                    to={`/admin/dashboard/edit-book/${book._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-600 text-white rounded px-4 py-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;
