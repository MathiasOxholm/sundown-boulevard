import { useState, useEffect, useContext } from "react";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import DrinkList from "../components/DrinkList";
import { AppContext } from "../context";
import { useRouter } from "next/router";

const Drinks = () => {
  const router = useRouter();
  const { cartDrinks, cartFood } = useContext(AppContext);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    cartDrinks.length > 0 ? setDisabled(false) : setDisabled(true);
    cartFood.length === 0 && router.push("/dish");
  }, [cartDrinks, cartFood, router]);

  return (
    <Layout title="Drinks" heading="Choose a drink 🍺" back={"/dish"}>
      <div className="grid grid-cols-12 gap-8">
        <div className="flex col-span-8 relative">
          <DrinkList />
        </div>
        <div className="flex col-span-4">
          <Cart
            link="/order"
            btnText="Order details"
            sticky={true}
            disabled={disabled}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Drinks;
