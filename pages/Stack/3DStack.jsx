import Image from "next/image";
import { motion } from "framer-motion";

const ThreeDStack = ({ index, item }) => {
  if (item && item.img)
    return (
      <div
        style={{ perspective: 2000 }}
        className=" lg:w-[190px] lg:h-[190px] lg:my-5 m-[1%] transition-all hover:scale-[1.1]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index / 10 }}
          viewport={{ once: true }}
          className="eachlang w-[150px] h-[150px] flex justify-center items-center rounded-lg"
        >
          <figure>
            <Image alt="language-img" src={item.img} width={80} height={50} />
          </figure>
        </motion.div>
      </div>
    );
};

export default ThreeDStack;
