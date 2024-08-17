import React from "react";
import toast from "react-hot-toast";
const Modal = ({ isOpen, onClose }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;

    try {
      const response = await fetch("http://localhost:3000/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        toast.error("Network response was not ok");
      } else {
        toast.success("card added successfully!");
        form.reset();
        onClose();
      }
    } catch (error) {
      toast.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 scale-100">
            <button
              onClick={onClose}
              className="absolute top-2 right-4 hover:text-white hover:bg-black border-2 px-2 py-1 rounded"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Add a card!</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                  placeholder="Enter title"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                  placeholder="Enter description"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition duration-300 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
