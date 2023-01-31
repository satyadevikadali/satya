import { useEffect, useState } from "react";
import { GET_RESTAURANTS_URL } from "./../../../constants";

const useGetRestaurants = () => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(GET_RESTAURANTS_URL);
    const formattedData = await data.json();
    const cardsData = formattedData?.data?.cards?.[2]?.data?.data?.cards;
    setRestaurant(cardsData);
  }
  return restaurant;
};

export default useGetRestaurants;
