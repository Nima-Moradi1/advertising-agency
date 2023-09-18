import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="hover:scale-105 duration-300"
      contentStyle={{
        borderRadius: "50px",
        backgroundImage:
          "linear-gradient(to bottom right, #172554 ,#2c85c5, #172554 )",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className=" flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }>
      <div>
        <h3 className="text-blue-950 text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-red-100 text-[16px] font-semibold"
          style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div className="animate-character" variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>همکاری</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          مشتریان اخیر
          <span> اسم آژانس</span>
        </h2>
      </motion.div>

      <div dir="ltr" className="mt-20 flex flex-col text-end">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
