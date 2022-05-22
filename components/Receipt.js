import { useContext, useEffect } from "react";
import { AppContext } from "../context";
import Link from "next/link";

const Receipt = () => {
  const {
    cartFood,
    cartDrinks,
    date,
    time,
    email,
    peopleAmount,
    handleResetFlow,
  } = useContext(AppContext);

  const cartTotal = [...cartFood, ...cartDrinks];

  // Save data to sessionStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("date", date);
      sessionStorage.setItem("time", time);
      sessionStorage.setItem("people", peopleAmount);
      sessionStorage.setItem("food", cartFood);
      sessionStorage.setItem("drinks", cartDrinks);
    }
  }, []);

  return (
    <div className="flex flex-col justify-between w-full bg-white overflow-hidden rounded-2xl py-12 px-10 gap-12 border border-lightBorder">
      <div>
        <h2 className="text-3xl font-semibold mb-4">{"You've ordered"}</h2>
        <ul>
          {cartTotal.map((item) => {
            return (
              <li key={item} className="text-2xl">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-2">Your details</h2>
        <p>
          <strong>Date & time:</strong> {date + " " + time}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>People:</strong> {peopleAmount}
        </p>
      </div>

      <Link href="/">
        <a
          className="text-white bg-primary hover:bg-primaryDark focus:outline-none font-semibold rounded-full text-sm uppercase px-8 py-4 text-center transition w-60"
          onClick={handleResetFlow}
        >
          Back to home
        </a>
      </Link>
    </div>
  );
};

export default Receipt;
