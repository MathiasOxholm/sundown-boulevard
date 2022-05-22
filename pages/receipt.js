import { useEffect } from "react";
import Layout from "../components/Layout";
import ReceiptModule from "../components/Receipt";
import ConfettiGenerator from "confetti-js";

const Receipt = () => {
  useEffect(() => {
    const confettiSettings = { target: "confetti" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);
  return (
    <>
      <Layout title="Receipt" heading="Thank you for your order!">
        <ReceiptModule />
      </Layout>
      <canvas
        id="confetti"
        className="absolute inset-0 z-0 pointer-events-none h-full w-full"
      ></canvas>
    </>
  );
};

export default Receipt;
