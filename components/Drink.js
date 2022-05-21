import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context";
import Image from "next/image";

const Drink = ({ title, img }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { cartDrinks, handleAddToCart } = useContext(AppContext);

  // Check if is in cart
  useEffect(() => {
    cartDrinks.includes(title) ? setIsSelected(true) : setIsSelected(false);
  }, [cartDrinks, title]);

  return (
    <div
      className={`flex flex-col aspect-square bg-white border-2  justify-center items-center rounded-xl p-8 cursor-pointer outline-primary hover:shadow-lg hover:-translate-y-1 hover:border-primary transition-all duration-500 ${
        isSelected ? "border-2 border-primary" : "border-white"
      }`}
      onClick={() => {
        handleAddToCart(title, "drinks");
      }}
    >
      <figure className="flex flex-1 aspect-square relative">
        <Image
          className="object-contain pointer-events-none"
          src={img}
          layout="fill"
          alt={title}
        />
      </figure>
      <h3 className="mt-4 text-center">{title}</h3>
    </div>
  );
};

export default Drink;
