import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, desc }) => (
  <Tilt className="md:min-w-[350px] md:last:grow md:last:max-w-3xl xl:last:max-w-none xl:last:grow-0 basis-full md:basis-1/3 xl:basis-1/4">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full  bg-gradient-to-tl from-blue-950 via-[#2c85c5] to-blue-950  p-[1px] rounded-[40px] shadow-card">
      <div
        options={{
          max: 35,
          scale: 1,
          speed: 250,
        }}
        className="bg-tertiary rounded-[20px] p-5 min-h-[200px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-72 h-72 object-contain rounded-xl "
        />

        <h2 className="text-[#fdfbf9] mb-8 text-[20px] md:text-3xl font-bold text-center animate-character">
          {title}
        </h2>
        <h4 className="text-[#fdfbf9] text-sm md:text-base text-center">{desc}</h4>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div className="animate-character text-center" variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-2xl`}>معرفی</p>
        <h2 className={styles.sectionHeadText}>درباره اسم آژانس</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary md:text-[17px] text-[14px] text-center mx-auto max-w-2xl ">
        اینجا میایم توصیف کنیم که ما چی هستیم چی کار میکنیم خلاقیت مون چیه و چه
        خدماتی رو میتونیم معرفی کنیم در نهایت اینجا یکسری باکس ایجاد میکنم که هر باکس
        نشون دهنده یک خدمت و ویژگی ماست خیلی مهمه که اینا درست و قشنگ معرفی بشه چون
        در نهایت اینه که میاد خیلی خوشگل همه چی ر درست میکنه و باید عکس های خفن که
        مربوط به خدمات هست اینجا کذاشته بشه . یه محتوای قوی برای درباره ما نوشته بشه
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
