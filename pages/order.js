import { useState, useEffect, useContext } from "react";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import OrderForm from "../components/OrderForm";
import { AppContext } from "../context";

const Order = () => {
  const { date, time, email, peopleAmount } = useContext(AppContext);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    date && time && email && peopleAmount
      ? setDisabled(false)
      : setDisabled(true);
  }, [date, time, email, peopleAmount]);

  return (
    <Layout title="Order" heading="Order details" back={"/drinks"}>
      <div className="grid grid-cols-12 gap-8">
        <div className="flex col-span-8">
          <OrderForm />
        </div>
        <div className="flex col-span-4">
          <Cart link="/receipt" btnText="Complete order" disabled={disabled} />
        </div>
      </div>
    </Layout>
  );
};

export default Order;
