import { useState } from "react";
import { AppContext } from "../context";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cartFood, setFoodCart] = useState([]);
  const [cartDrinks, setDrinksCart] = useState([]);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [email, setEmail] = useState();
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
    let date = new Date(e.target.value);
    let weekday = date.getDay();

    // Disable weekends
    if (weekday === 6 || weekday === 0) {
      alert("Sorry we are closed on weekends!");
      setDate("");
    } else {
      setDate(e.target.value);
    }
  };

  // Set time function
  const handleTime = (e) => {
    let value = e.target.value.split(":");
    let valueString = value.join("");

    // Open between 16.00 and 23.00
    if (valueString > 1600 && valueString < 2300) {
      setTime(e.target.value);
    } else {
      alert("We are only open between 16.00 and 23.00");
      setTime("");
    }
  };

  // Set email function
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Set amount of people function
  const handlePeople = (e) => {
    setPeopleAmount(e.target.value);
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
      }}
    >
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
