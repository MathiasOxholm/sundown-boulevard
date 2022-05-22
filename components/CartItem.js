import { useContext } from "react";
import { AppContext } from "../context";
import { motion } from "framer-motion";

const CartItem = ({ item, category }) => {
  const { handleRemoveFromCart } = useContext(AppContext);
  return (
    <motion.li className="group py-3 px-4 rounded-md border border-medium relative overflow-hidden">
      {item}
      <span
        className="absolute top-2/4 right-3 xl:right-0 -translate-y-2/4 bg-primary rounded-full w-6 h-6 flex z-10 justify-center items-center text-center m-0 text-white text-xs cursor-pointer transition-all xl:opacity-0 xl:group-hover:right-3 xl:group-hover:opacity-100"
        onClick={() => handleRemoveFromCart(item, category)}
      >
        X
      </span>
    </motion.li>
  );
};

export default CartItem;
