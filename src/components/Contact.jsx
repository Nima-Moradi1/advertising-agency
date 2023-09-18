import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Nima Moradi Rad",
          from_email: form.email,
          to_email: "mnima8100@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-8 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden sm:items-center sm:justify-center xl:justify-start xl:items-stretch`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="text-center flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className="text-5xl pb-5 lg:text-6xl animate-character">درخواست مشاوره</p>
        <br />
        <h3 className="text-5xl lg:text-7xl pb-5 animate-character">رایگان</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-6 max-w-lg">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              نام و نام خانوادگی شما
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="لطفا نام و نام خانوادگی خود را وارد کنید"
              className="focus:ring-1 focus:ring-white/50 bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">رستوران یا شرکت شما</span>
            <input
              type="text"
              name="name"
              value={form.email}
              onChange={handleChange}
              placeholder="لطفا اسم برند خود را وارد کنید"
              className="focus:ring-1 focus:ring-white/50 bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className=" text-white font-medium mb-4">شماره همراه</span>
            <input
              type="phoneNumber"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="لطفا شماره همراه ارتباطی خود را وارد کنید"
              className="focus:ring-1 focus:ring-white/50 bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className=" text-white font-medium mb-4">
              ایمیل شخصی یا سازمانی
            </span>
            <input
              type="phoneNumber"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="لطفا ایمیل ارتباطی خود را وارد کنید"
              className="focus:ring-1 focus:ring-white/50 bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className=" hover:scale-125 duration-300 bg-transparent mt-3 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-sm shadow-blue-600">
            {loading ? "در حال ارسال" : "ارسال درخواست"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
