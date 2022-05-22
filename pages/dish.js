import { useState, useEffect, useContext } from "react";
import Product from "../components/Product";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import { AppContext } from "../context";

const Dish = () => {
  const { cartFood } = useContext(AppContext);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    cartFood.length > 0 ? setDisabled(false) : setDisabled(true);
  }, [cartFood]);

  return (
    <Layout title="Meals" heading="Choose a meal 🍲" back={"/"}>
      <div className="grid grid-cols-12 gap-8">
        <div className="flex col-span-full xl:col-span-8">
          <Product />
        </div>
        <div className="flex col-span-full xl:col-span-4">
          <Cart
            link="/drinks"
            btnText="Choose drinks"
            sticky={true}
            disabled={disabled}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Dish;
