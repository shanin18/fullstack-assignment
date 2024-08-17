// create a new card
const createCard = async (db, title, description) => {
  const card = {
    title,
    description,
  };
  await db.collection("cards").insertOne(card);
  return card;
};

// get all cards
const getAllCards = async (db) => {
  return await db.collection("cards").find().toArray();
};

// get a card by title
const getCardByTitle = async (db, title) => {
  return await db.collection("cards").findOne({ title });
};

module.exports = {
  createCard,
  getAllCards,
  getCardByTitle,
};
