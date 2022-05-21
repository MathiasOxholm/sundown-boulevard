import { useEffect, useState, useContext } from "react";
import { AppContext } from "../context";
import Image from "next/image";

const Product = () => {
  const { foodAPI, handleAddToCart, cartFood } = useContext(AppContext);
  const [product, setProduct] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [loading, setLoading] = useState(true);

  // Get product from food API function
  const getProduct = async () => {
    const res = await fetch(foodAPI);
    const data = await res.json();
    setProduct(data.meals[0]);
    setLoading(false);
    console.log(data.meals[0]);
  };

  // Get product on load
  useEffect(() => {
    getProduct();
  }, []);

  // Check if is in cart
  useEffect(() => {
    !loading && cartFood.includes(product.strMeal)
      ? setIsSelected(true)
      : setIsSelected(false);
  }, [cartFood, product, loading]);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div className="flex flex-col w-full rounded-2xl overflow-hidden bg-white">
      <figure className="aspect-video flex w-full flex-1 relative">
        <Image
          src={product.strMealThumb}
          className="object-cover"
          alt={product.strMeal}
          layout="fill"
          priority
        />
      </figure>
      <div className="flex flex-col w-full relative bg-white py-12 px-10 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start gap-4">
            <h2 className="text-3xl font-semibold">{product.strMeal}</h2>
            <p className="text-primary border border-primary font-semibold rounded-full text-xs uppercase px-4 py-2 text-center">
              {product.strCategory}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Ingredients</h3>
            <p>
              {product.strIngredient1}, {product.strIngredient2},{" "}
              {product.strIngredient3}, {product.strIngredient4},{" "}
              {product.strIngredient5}, {product.strIngredient6}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-end">
          <button
            className="text-white bg-secondary hover:bg-secondaryDark focus:outline-none font-semibold rounded-full text-sm uppercase px-8 py-4 text-center transition"
            onClick={getProduct}
          >
            Generate new
          </button>
          <button
            className="text-white bg-primary hover:bg-primaryDark focus:outline-none font-semibold rounded-full text-sm uppercase px-8 py-4 text-center transition"
            onClick={() => handleAddToCart(product.strMeal, "food")}
          >
            {!isSelected ? "Add to cart" : "Remove from cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
