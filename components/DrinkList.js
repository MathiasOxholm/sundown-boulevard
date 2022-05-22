import Drink from "./Drink";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../context";
import { motion } from "framer-motion";

const DrinkList = () => {
  const { beerAPI } = useContext(AppContext);
  const [drinks, setDrinks] = useState();
  const [loading, setLoading] = useState(true);

  // Get product from food API function
  const getDrinks = async () => {
    const res = await fetch(beerAPI);
    const data = await res.json();
    setDrinks(data);
    setLoading(false);
  };

  // Get product on load
  useEffect(() => {
    getDrinks();
  }, []);

  if (loading) {
    return;
  }

  return (
    <motion.ul
      className="grid grid-cols-2 xl:grid-cols-3 gap-4"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
    >
      {drinks.map((drink) => {
        return (
          <Drink key={drink.id} title={drink.name} img={drink.image_url} />
        );
      })}
    </motion.ul>
  );
};

export default DrinkList;
