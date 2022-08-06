export const getAllCards = async () => {
  const URL = "https://rws-cards-api.herokuapp.com/api/v1/cards";

  const response = await fetch(URL, { method: "GET" });
  return await response.json();
};

export const getRandomCards = async (cardCount) => {
  const URL = `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=${cardCount}`;

  const response = await fetch(URL, { method: "GET" });
  return await response.json();
};

export const getSearchCards = async (query) => {
  const URL = `https://rws-cards-api.herokuapp.com/api/v1/cards/search?q=${query}`;

  const response = await fetch(URL, { method: "GET" });
  console.log(response)
  return await response.json();
};
