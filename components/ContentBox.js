import { motion } from "framer-motion";

const ContentBox = () => {
  return (
    <motion.div
      className="flex w-full relative aspect-square xl:aspect-video bg-white overflow-hidden rounded-2xl py-12 px-10 border border-lightBorder"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
    >
      <div className="flex flex-col justify-center items-center w-full z-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Lorem ipsum!
        </h2>
        <p className="text-center max-w-sm mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maiores
          architecto enim veritatis ad eum sed ipsum soluta. Provident, itaque?
        </p>
      </div>
    </motion.div>
  );
};

export default ContentBox;
