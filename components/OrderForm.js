import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import OrderFormInput from "./OrderFormInput";

const OrderForm = () => {
  const {
    date,
    time,
    email,
    peopleAmount,
    handleDate,
    handleTime,
    handleEmail,
    handlePeople,
    preFilled,
  } = useContext(AppContext);
  const [btnText, setBtnText] = useState("Complete order");
  const [formValid, setFormValid] = useState(false);
  const router = useRouter();
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const minDate = year + "-" + "0" + month + "-" + day;
  const [dateValid, setDateValid] = useState(false);
  const [timeValid, setTimeValid] = useState(false);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/receipt");
  };

  // If is pre-filled data
  useEffect(() => {
    preFilled && setBtnText("Update order");
  }, [preFilled]);

  // Validate Date input
  useEffect(() => {
    let dateSelected = new Date(date);
    let weekday = dateSelected.getDay();

    // Disable weekends
    if (weekday === 6 || weekday === 0) {
      setDateValid(false);
    } else {
      setDateValid(true);
    }
  }, [date]);

  // Validate time input
  useEffect(() => {
    let value = time.split(":");
    let valueString = value.join("");

    // Open between 16.00 and 23.00
    if (valueString > 1600 && valueString < 2300) {
      setTimeValid(true);
    } else {
      setTimeValid(false);
    }
  }, [time]);

  // Check if inputs are filled and validated
  useEffect(() => {
    if (email !== "" && dateValid && timeValid && peopleAmount > 0 <= 10) {
      setFormValid(true);
    }
  }, [email, dateValid, timeValid, peopleAmount]);

  return (
    <motion.div
      className="flex flex-col justify-between w-full bg-white overflow-hidden rounded-2xl py-12 px-10 h-fit sticky top-8 border border-lightBorder"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <OrderFormInput
          type="date"
          name="date"
          min={minDate}
          value={date}
          label="Choose date"
          desc="The restaurant is closed during the weekend"
          errorMessage="Can't be weekend"
          onChange={handleDate}
          error={!dateValid}
        />
        <OrderFormInput
          type="time"
          name="time"
          min="16:00"
          max="23:00"
          value={time}
          label="Choose time"
          desc="The restaurant is open between 16 and 23"
          errorMessage="Must be between 16 and 23"
          error={!timeValid}
          onChange={handleTime}
        />
        <OrderFormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={handleEmail}
          placeholder="your@email.com"
        />
        <OrderFormInput
          type="number"
          name="amount"
          value={peopleAmount}
          label="Amount of people"
          desc="Maximum 10 people"
          min={1}
          max={10}
          onChange={handlePeople}
          placeholder="Enter number of people"
          errorMessage="Maximum 10 people"
        />
        <button
          className="text-white bg-primary hover:bg-primaryDark focus:outline-none font-semibold rounded-full text-sm uppercase px-5 py-6 text-center mt-4 transition disabled:opacity-50"
          disabled={!formValid}
        >
          {btnText}
        </button>
      </form>
    </motion.div>
  );
};

export default OrderForm;
