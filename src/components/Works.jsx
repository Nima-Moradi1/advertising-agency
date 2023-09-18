import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, image, source_code_link }) => {
  return (
    <motion.div
      className="flex items-center justify-center shadow-sm shadow-white rounded-b-3xl rounded-t-md "
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl lg:w-[350px] w-[calc(100%-100px)]">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <div className=" w-1/2 h-1/2 flex items-center justify-center">
                دمو
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold md:text-[24px] text-[16px] animate-character">
            {name}
          </h3>
          <p className="mt-2 text-secondary md:text-[14px] text-[12px]">
            {description}
          </p>
        </div>
        <hr className="mt-4 opacity-50" />
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div className="animate-character text-center" variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-2xl `}>کسب و کار</p>
        <h2 className={`${styles.sectionHeadText}`}>پروژه های اخیر اسم آژانس.</h2>
      </motion.div>

      <div className="w-full flex items-center justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" mt-3 text-secondary md:text-[17px] text-[14px] text-center max-w-3xl leading-[30px]">
          اینجا میایم یه سری توضیحات راجع به این میدیم که مثلا با توجه به فعالیت های
          اخیر و ایده های نوین و از اینجور داستانا در طی فلان قدر ماه گذشته این تعداد
          رستوران اخیر با ما کار کردند که ما دموی یه تصویر یا ویدیو رو براشون میذاریم
          که ببینن و بعد در نهایت حالا یا میتونیم اسلاید شو درست کنیم یا میتونیم
          سوایپر کنیمش یا میتونیم صرفا یه ویدیو اپلود به صورت لوکال داشته باشیم که
          اینجا بذاریم
        </motion.p>
      </div>

      <div className="mt-20 flex items-center justify-center flex-wrap gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
