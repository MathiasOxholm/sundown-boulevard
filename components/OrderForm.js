import { useContext } from "react";
import { AppContext } from "../context";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

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
  } = useContext(AppContext);
  const router = useRouter();
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const minDate = year + "-" + "0" + month + "-" + day;
  const inputClasses =
    "border border-medium text-dark text-lg rounded-full w-full py-4 px-6 cursor-pointer hover:border-primary transition";

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/receipt");
  };

  return (
    <motion.div
      className="flex flex-col justify-between w-full bg-white overflow-hidden rounded-2xl py-12 px-10 h-fit sticky top-8 border border-lightBorder"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label
            htmlFor="date"
            className="text-xl flex font-semibold cursor-pointer"
          >
            Choose date <span className="text-primary ml-1">*</span>
          </label>
          <p className="text-sm mb-4">
            The restaurant is closed during the weekend
          </p>
          <input
            className={inputClasses}
            type="date"
            id="date"
            min={minDate}
            value={date}
            required
            onChange={handleDate}
          />
        </div>
        <div>
          <label
            htmlFor="date"
            className="text-xl flex font-semibold cursor-pointer"
          >
            Choose time <span className="text-primary ml-1">*</span>
          </label>
          <p className="text-sm mb-4">
            The restaurant is open between 16 and 23
          </p>
          <input
            className={inputClasses}
            type="time"
            id="time"
            required
            value={time}
            onChange={handleTime}
            min="16:00"
            max="23:00"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-xl mb-2 flex font-semibold cursor-pointer"
          >
            Email <span className="text-primary ml-1">*</span>
          </label>
          <input
            className={inputClasses}
            type="email"
            id="email"
            value={email}
            required
            placeholder="your@email.com"
            onChange={handleEmail}
          />
        </div>
        <div>
          <label
            htmlFor="amount"
            className="text-xl flex font-semibold cursor-pointer"
          >
            Amount of people <span className="text-primary ml-1">*</span>
          </label>
          <p className="text-sm mb-4">Maximum 10 people</p>
          <input
            className={inputClasses}
            type="number"
            id="amount"
            required
            value={peopleAmount}
            min={1}
            max={10}
            onChange={handlePeople}
          />
        </div>
        <button className="text-white bg-primary hover:bg-primaryDark focus:outline-none font-semibold rounded-full text-sm uppercase px-5 py-6 text-center mt-4 transition">
          Complete order
        </button>
      </form>
    </motion.div>
  );
};

export default OrderForm;
