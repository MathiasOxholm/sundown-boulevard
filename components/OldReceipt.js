import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const OldReceipt = () => {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState("");
  const [food, setFood] = useState("");
  const [drinks, setDrinks] = useState("");

  // Clear sessionStorage function
  const handleClearStorage = () => {
    sessionStorage.clear();
    router.push("/");
  };

  // Set sessionStorage items
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDate(window.sessionStorage.getItem("date"));
      setTime(window.sessionStorage.getItem("time"));
      setEmail(window.sessionStorage.getItem("email"));
      setPeople(window.sessionStorage.getItem("people"));
      setFood(window.sessionStorage.getItem("food"));
      setDrinks(window.sessionStorage.getItem("drinks"));
    }
  }, []);

  return (
    <motion.div
      className="flex flex-col gap-8 w-full relative bg-white overflow-hidden rounded-2xl py-12 px-10 border border-lightBorder"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
    >
      <div>
        <h2 className="text-3xl font-semibold mb-2">Finished orders</h2>
        <p>Get an overview of your finished orders</p>
      </div>
      <div>
        <p>
          <strong>Date & time: </strong> {date + " " + time}
        </p>
        <p>
          <strong>Email: </strong> {email}
        </p>
        <p>
          <strong>People: </strong> {people}
        </p>
        <p>
          <strong>Meals: </strong> {food}
        </p>
        <p>
          <strong>Drinks: </strong> {drinks}
        </p>
      </div>
      <button
        className="text-white bg-primary hover:bg-primaryDark focus:outline-none font-bold rounded-full text-sm uppercase px-8 py-4 w-40 text-center transition"
        onClick={handleClearStorage}
      >
        Clear data
      </button>
    </motion.div>
  );
};

export default OldReceipt;
