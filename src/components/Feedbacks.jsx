import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className=" bg-black-200 rounded-3xl xs:w-[320px] w-full">
    <p className="text-blue-500 font-black text-[48px]">"</p>

    <div>
      <p className="text-white tracking-wider text-[18px] opacity-75">
        {testimonial}
      </p>

      <div className="mt-3 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[20px]">
            <span className="text-blue-300 text-lg">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} - {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-300"
        />
      </div>
      <hr className="mt-12 opacity-25" />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div
          className="animate-character text-center"
          variants={textVariant()}>
          <p className={`${styles.sectionSubText} md:text-3xl md:mb-4`}>
            صدای مشتری
          </p>
          <h2 className={styles.sectionHeadText}>نظرات مشتریان اسم آژانس</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
