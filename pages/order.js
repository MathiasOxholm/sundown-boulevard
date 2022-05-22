import { useState, useEffect, useContext } from "react";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import OrderForm from "../components/OrderForm";
import { AppContext } from "../context";
import { useRouter } from "next/router";

const Order = () => {
  const router = useRouter();
  const { date, time, email, peopleAmount, cartFood, cartDrinks, preFilled } =
    useContext(AppContext);
  const [disabled, setDisabled] = useState(true);
  const [btnText, setBtnText] = useState("Complete order");

  useEffect(() => {
    date && time && email && peopleAmount
      ? setDisabled(false)
      : setDisabled(true);
  }, [date, time, email, peopleAmount]);

    useEffect(() => {
      cartDrinks.length === 0 && router.push("/drinks");
      cartFood.length === 0 && router.push("/dish");
    }, [cartDrinks, cartFood, router]);

    useEffect(() => {
      preFilled && setBtnText("Update order");
    }, [preFilled]);

  return (
    <Layout title="Order" heading="Order details" back={"/drinks"}>
      <div className="grid grid-cols-12 gap-8">
        <div className="flex col-span-full xl:col-span-8">
          <OrderForm />
        </div>
        <div className="flex col-span-full xl:col-span-4">
          <Cart link="/receipt" btnText={btnText} disabled={disabled} />
        </div>
      </div>
    </Layout>
  );
};

export default Order;
