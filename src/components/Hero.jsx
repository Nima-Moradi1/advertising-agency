import { motion } from "framer-motion";
import { BsArrowDownCircle } from "react-icons/bs";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-blue-400" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            آژانس تبلیغاتی <span className="text-blue-500">اسم</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            پلتفرم برتر برندینگ و مارکتینگ <br className="block " />
            در زمینه غذایی و صنعت پوشاک
          </p>
        </div>
      </div>

      <ComputersCanvas />
      <div className="lg:hidden absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className=" w-[45px] h-[75px] rounded-3xl border-[2px] border-blue-100 flex justify-center items-center p-2">
            <BsArrowDownCircle className="fill-blue-100 w-6 absolute h-24 animate-ping" />
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
