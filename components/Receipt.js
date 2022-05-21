import { useContext } from "react";
import { AppContext } from "../context";
import Link from "next/link";

const Receipt = () => {
  const { cartFood, cartDrinks, date, time, email, peopleAmount } =
    useContext(AppContext);

  const cartTotal = [...cartFood, ...cartDrinks];

  return (
    <div className="flex flex-col justify-between w-full bg-white overflow-hidden rounded-2xl py-12 px-10 gap-4">
      <div>
        <h2 className="text-xl font-semibold mb-2">{"You've ordered"}</h2>
        <ul>
          {cartTotal.map((item) => {
            return (
              <li key={item} className="text-lg">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Your details</h2>
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
        <a className="text-white bg-primary hover:bg-primaryDark focus:outline-none font-semibold rounded-full text-sm uppercase px-8 py-4 text-center transition w-60">
          Back to home
        </a>
      </Link>
    </div>
  );
};

export default Receipt;