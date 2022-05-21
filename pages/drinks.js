import { useState, useEffect, useContext } from "react";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import DrinkList from "../components/DrinkList";
import { AppContext } from "../context";

const Drinks = () => {
  const { cartDrinks } = useContext(AppContext);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    cartDrinks.length > 0 ? setDisabled(false) : setDisabled(true);
  }, [cartDrinks]);

  return (
    <Layout title="Drinks" heading="Choose a drink 🍺" back={"/dish"}>
      <div className="grid grid-cols-12 gap-8">
        <div className="flex col-span-8">
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
