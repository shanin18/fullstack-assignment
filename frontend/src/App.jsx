import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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
      data.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

  return (
    <div>
      <Search onSearch={setSearchTerm} />
      <CardList cards={filteredData} />
    </div>
  );
};

const Search = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return <input type="text" placeholder="Search..." onChange={handleChange} />;
};

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card._id}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default App;
