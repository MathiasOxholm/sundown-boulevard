import { useState, useEffect, useContext } from "react";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import OrderForm from "../components/OrderForm";
import { AppContext } from "../context";
import { useRouter } from "next/router";

const Order = () => {
  const router = useRouter();
  const {cartFood, cartDrinks } =
    useContext(AppContext);

  // Redirect if cart is empty
  useEffect(() => {
    cartDrinks.length === 0 && router.push("/drinks");
    cartFood.length === 0 && router.push("/dish");
  }, [cartDrinks, cartFood, router]);

  return (
    <Layout title="Order" heading="Order details" back={"/drinks"}>
      <div className="grid grid-cols-12 gap-8">
        <div className="flex col-span-full xl:col-span-8">
          <OrderForm />
        </div>
        <div className="flex col-span-full xl:col-span-4">
          <Cart link="/receipt" sticky={true} />
        </div>
      </div>
    </Layout>
  );
};

export default Order;
