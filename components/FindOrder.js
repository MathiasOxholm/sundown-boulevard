import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../context";

// Playdough backend
const oldOrders = [
  {
    email: "aag@dwarf.dk",
    food: ["Steak and Kidney Pie", "Vegetarian Casserole", "English Breakfast"],
    drinks: ["Electric India", "Alpha Dog"],
  },
  {
    email: "ohan@dwarf.dk",
    food: ["Tunisian Lamb Soup", "Chakchouka"],
    drinks: ["Bramling X", "Trashy Blonde", "Arcade Nation"],
  },
  {
    email: "mo.micheelsen@gmail.com",
    food: ["Lancashire hotpot", "Shakshuka"],
    drinks: ["Trashy Blonde", "Movember", "Bad Pixie"],
  },
];

const FindOrder = () => {
  const router = useRouter();
  const { setDrinksCart, setFoodCart, setEmail, handlePreFilled } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");

  // Handle input changes
  const handleEmailInput = (e) => {
    setInputValue(e.target.value);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Loop old orders and find match
    oldOrders.map((order) => {
      if (order.email === inputValue) {
        setEmail(order.email);
        setFoodCart(order.food);
        setDrinksCart(order.drinks);
        handlePreFilled();
        router.push("/dish");
      }
    });
  };

  return (
    <div className="flex flex-col justify-between w-full relative aspect-video bg-white overflow-hidden rounded-2xl py-12 px-10 border border-lightBorder">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Find your order</h2>
        <p>Enter your email address and continue your old order</p>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          id="email"
          className="border border-medium text-dark text-sm rounded-full w-full py-3 px-5"
          placeholder="aag@dwarf.dk / ohan@dwarf.dk"
          required
          value={inputValue}
          onChange={handleEmailInput}
        />
        <button className="text-white bg-secondary hover:bg-secondaryDark focus:outline-none font-bold rounded-full text-sm uppercase px-6 h-full text-center transition absolute right-0 top-0">
          Search
        </button>
      </form>
    </div>
  );
};

export default FindOrder;
