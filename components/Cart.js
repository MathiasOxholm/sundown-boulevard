import { useContext } from "react";
import { AppContext } from "../context";
import Link from "next/link";
import CartItem from "./CartItem";

const Cart = ({ link, btnText, sticky, disabled, home }) => {
  const { cartFood, cartDrinks } = useContext(AppContext);

  return (
    <div
      id="Cart"
      className={`flex flex-col justify-between w-full bg-white overflow-hidden rounded-2xl py-12 px-10 h-fit border border-lightBorder ${
        sticky ? "sticky top-8" : "h-full"
      } `}
    >
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          {cartFood.length === 0
            ? "Your cart is empty"
            : "Your cart (" + (cartFood.length + cartDrinks.length) + ")"}
        </h2>
        {cartFood.length === 0 && <p>Try adding stuff here!</p>}

        {cartFood.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-1">Meals</h3>
            <ul className="mb-4 flex flex-col gap-2">
              {cartFood.map((item) => {
                return <CartItem key={item} item={item} category={"food"} />;
              })}
            </ul>
          </div>
        )}

        {cartDrinks.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-1">Drinks</h3>
            <ul className="mb-4 flex flex-col gap-2">
              {cartDrinks.map((item) => {
                return <CartItem key={item} item={item} category={"drinks"} />;
              })}
            </ul>
          </div>
        )}
      </div>
      <Link href={link}>
        <button
          className="text-white bg-primary hover:bg-primaryDark focus:outline-none font-semibold rounded-full text-sm uppercase px-5 py-4 text-center transition mt-8"
          disabled={disabled}
        >
          {btnText}
        </button>
      </Link>
    </div>
  );
};

export default Cart;
