import Cart from "../components/Cart";
import GallerySlider from "../components/GallerySlider";
import ContentBox from "../components/ContentBox";
import FindOrder from "../components/FindOrder";
import Layout from "../components/Layout";
import OldReceipt from "../components/OldReceipt";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-12 gap-8">
        <div className="flex col-span-full xl:col-span-8">
          <GallerySlider />
        </div>
        <div className="flex col-span-full xl:col-span-4">
          <Cart link="/dish" btnText="Start your order" home={true} />
        </div>
        <div className="flex col-span-full xl:col-span-6">
          <FindOrder />
        </div>
        <div className="flex col-span-full xl:col-span-6">
          <ContentBox />
        </div>
        {typeof window !== "undefined" && window.sessionStorage.getItem("email") && (
          <div className="flex col-span-full">
            <OldReceipt />
          </div>
        )}
      </div>
    </Layout>
  );
}
