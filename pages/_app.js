import { useState } from "react";
import { AppContext } from "../context";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cartFood, setFoodCart] = useState([]);
  const [cartDrinks, setDrinksCart] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("16:00");
  const [email, setEmail] = useState("");
  const [peopleAmount, setPeopleAmount] = useState(1);
  const [preFilled, setPreFilled] = useState(false);

  // Global API endpoints
  const foodAPI = "https://www.themealdb.com/api/json/v1/1/random.php";
  const beerAPI = "https://api.punkapi.com/v2/beers";

  // Add to cart function
  const handleAddToCart = (item, category) => {
    if (category === "food") {
      cartFood.includes(item)
        ? handleRemoveFromCart(item, category)
        : setFoodCart([...cartFood, item]);
      return;
    }

    if (category === "drinks") {
      cartDrinks.includes(item)
        ? handleRemoveFromCart(item, category)
        : setDrinksCart([...cartDrinks, item]);
      return;
    }
  };

  // Remove from cart function
  const handleRemoveFromCart = (item, category) => {
    if (category === "food") {
      let newCart = cartFood.filter((cartItem) => {
        return cartItem !== item;
      });

      setFoodCart(newCart);
      return;
    }

    if (category === "drinks") {
      let newCart = cartDrinks.filter((cartItem) => {
        return cartItem !== item;
      });

      setDrinksCart(newCart);
      return;
    }
  };

  // Set date function
  const handlePreFilled = (e) => {
    setPreFilled(!preFilled);
  };

  // Set date function
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  // Set time function
  const handleTime = (e) => {
    setTime(e.target.value);
  };

  // Set email function
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Set amount of people function
  const handlePeople = (e) => {
    setPeopleAmount(e.target.value);
  };

  // Reset flow data function
  const handleResetFlow = () => {
    setFoodCart([]);
    setDrinksCart([]);
    setDate("");
    setTime("16:00");
    setEmail("");
    setPeopleAmount(1);
    setPreFilled(false);
  };

  return (
    <AppContext.Provider
      value={{
        foodAPI,
        beerAPI,
        cartFood,
        cartDrinks,
        handleAddToCart,
        handleRemoveFromCart,
        date,
        time,
        email,
        peopleAmount,
        handleDate,
        handleTime,
        handleEmail,
        handlePeople,
        setEmail,
        setFoodCart,
        setDrinksCart,
        handlePreFilled,
        preFilled,
        handleResetFlow,
      }}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppContext.Provider>
  );
}

export default MyApp;
