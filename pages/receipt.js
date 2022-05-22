import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import ReceiptModule from "../components/Receipt";
import ConfettiGenerator from "confetti-js";

const Receipt = () => {
  const router = useRouter();
  const [headingText, setHeadingText] = useState("Thank you for your order!");
  const { cartFood, preFilled } =
    useContext(AppContext);

  // Redirect if cart is empty
  useEffect(() => {
    cartFood.length === 0 && router.push("/");
  }, [cartFood, router]);

  // Change heading if order is updated
  useEffect(() => {
    preFilled && setHeadingText("Order updated!");
  }, [preFilled]);

  // Run confetti on order complete, cuz why not
  useEffect(() => {
    const confettiSettings = { target: "confetti" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);



  return (
    <>
      <Layout title="Receipt" heading={headingText}>
        <ReceiptModule />
      </Layout>
      <canvas
        id="confetti"
        className="fixed inset-0 z-0 pointer-events-none h-full w-full"
      ></canvas>
    </>
  );
};

export default Receipt;
