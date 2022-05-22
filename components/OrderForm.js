import { useContext } from "react";
import { AppContext } from "../context";
import { motion } from "framer-motion";

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
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const minDate = year + "-" + "0" + month + "-" + day;

  return (
    <motion.div
      className="flex flex-col justify-between w-full bg-white overflow-hidden rounded-2xl py-12 px-10 h-fit sticky top-8 border border-lightBorder"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
    >
      <div className="flex flex-col gap-6">
        <div>
          <label
            htmlFor="date"
            className="text-xl mb-2 flex font-semibold cursor-pointer"
          >
            Choose date <span className="text-primary ml-1">*</span>
          </label>
          <input
            className="border border-medium text-dark text-lg rounded-full w-full py-3 px-5"
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
            className="text-xl mb-2 flex font-semibold cursor-pointer"
          >
            Choose time <span className="text-primary ml-1">*</span>
          </label>
          <input
            className="border border-medium text-dark text-lg rounded-full w-full py-3 px-5"
            type="time"
            id="time"
            min="09:00"
            max="18:00"
            required
            value={time}
            onChange={handleTime}
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
            className="border border-medium text-dark text-lg rounded-full w-full py-3 px-5"
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
            className="text-xl mb-2 flex font-semibold cursor-pointer"
          >
            Amount of people <span className="text-primary ml-1">*</span>
          </label>
          <input
            className="border border-medium text-dark text-lg rounded-full w-full py-3 px-5"
            type="number"
            id="amount"
            required
            value={peopleAmount}
            min={1}
            onChange={handlePeople}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default OrderForm;
