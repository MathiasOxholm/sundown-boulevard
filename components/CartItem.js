import { useContext } from "react";
import { AppContext } from "../context";
import { motion } from "framer-motion";

const CartItem = ({ item, category }) => {
  const { handleRemoveFromCart } = useContext(AppContext);
  return (
    <motion.li
      className="py-3 px-4 rounded-md border border-medium cursor-pointer hover:bg-primary hover:border-primary hover:text-white transition"
      onClick={() => handleRemoveFromCart(item, category)}
    >
      {item}
    </motion.li>
  );
};

export default CartItem;
