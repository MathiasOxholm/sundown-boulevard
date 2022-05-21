import Layout from "../components/Layout";
import Receipt from "../components/Receipt";

const receipt = () => {
  return (
    <Layout title="Receipt" heading="Thanks for your order!">
      <Receipt />
    </Layout>
  );
};

export default receipt;
