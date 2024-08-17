import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Modal from "./components/Modal";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    setFilteredData(
      data?.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

  return (
    <div>
      <Navbar openModal={openModal} />
      <Banner setSearchTerm={setSearchTerm} />
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-600px)]">
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-9 lg:gap-14 py-24 mx-4">
            {filteredData?.map((card) => (
              <Card
                key={card._id}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        ) : (
          <p className="text-lg text-center pt-10">No card found!!</p>
        )}
      </div>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <Toaster />
    </div>
  );
};

export default App;
