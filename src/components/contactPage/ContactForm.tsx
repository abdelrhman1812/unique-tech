"use client";

import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useMemo } from "react";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const handleFormSubmit = (values: FormValues) => {
    console.log("Form Submitted:", values);
  };

  const phoneRegExp: RegExp =
    /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

  const validationSchema = useMemo(() => {
    return Yup.object({
      firstName: Yup.string()
        .min(3, "Your Name Must be More than 3 characters")
        .max(10, "Your Name Must be less than 10 characters")
        .required("First Name is required"),
      lastName: Yup.string()
        .min(3, "Your Name Must be More than 3 characters")
        .max(10, "Your Name Must be less than 10 characters")
        .required("Last Name is required"),
      email: Yup.string()
        .email("Enter a valid Email")
        .required("Email is required"),
      phone: Yup.string()
        .matches(phoneRegExp, "Enter a valid Phone Number")
        .required("Phone is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    });
  }, []);

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto w-full py-8 md:w-[670px]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            {/* First Name */}
            <motion.div whileFocus={{ scale: 1.05 }} className="relative">
              <input
                className="shadow-[0px 2px 5px 0px rgba(38, 51, 77, 0.03)] py-15 h-[60px] w-full transform rounded-[30px] border-0 pe-[25px] ps-[30px] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md focus:outline-none md:w-[320px]"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 transform transition-all duration-300 group-hover:scale-110"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5684 0C5.04836 0 0.568359 4.48 0.568359 10C0.568359 15.52 5.04836 20 10.5684 20C16.0884 20 20.5684 15.52 20.5684 10C20.5684 4.48 16.0884 0 10.5684 0ZM10.5684 3C12.2284 3 13.5684 4.34 13.5684 6C13.5684 7.66 12.2284 9 10.5684 9C8.90836 9 7.56836 7.66 7.56836 6C7.56836 4.34 8.90836 3 10.5684 3ZM10.5684 17.2C8.06836 17.2 5.85836 15.92 4.56836 13.98C4.59836 11.99 8.56836 10.9 10.5684 10.9C12.5584 10.9 16.5384 11.99 16.5684 13.98C15.2784 15.92 13.0684 17.2 10.5684 17.2Z"
                  className="fill-gray-400 transition-colors duration-300 group-hover:fill-blue-400"
                />
              </svg>
            </motion.div>

            {/* Last Name */}
            <motion.div whileFocus={{ scale: 1.05 }} className="relative">
              <input
                className="shadow-[0px 2px 5px 0px rgba(38, 51, 77, 0.03)] py-15 h-[60px] w-full transform rounded-[30px] border-0 pe-[25px] ps-[30px] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md focus:outline-none md:w-[320px]"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 transform transition-all duration-300 group-hover:scale-110"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5684 0C5.04836 0 0.568359 4.48 0.568359 10C0.568359 15.52 5.04836 20 10.5684 20C16.0884 20 20.5684 15.52 20.5684 10C20.5684 4.48 16.0884 0 10.5684 0ZM10.5684 3C12.2284 3 13.5684 4.34 13.5684 6C13.5684 7.66 12.2284 9 10.5684 9C8.90836 9 7.56836 7.66 7.56836 6C7.56836 4.34 8.90836 3 10.5684 3ZM10.5684 17.2C8.06836 17.2 5.85836 15.92 4.56836 13.98C4.59836 11.99 8.56836 10.9 10.5684 10.9C12.5584 10.9 16.5384 11.99 16.5684 13.98C15.2784 15.92 13.0684 17.2 10.5684 17.2Z"
                  className="fill-gray-400 transition-colors duration-300 group-hover:fill-blue-400"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Email And Phone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="my-[20px] flex flex-col justify-between gap-4 md:my-[40px] md:flex-row">
            {/* Email */}
            <motion.div whileFocus={{ scale: 1.05 }} className="relative">
              <input
                className="shadow-[0px 2px 5px 0px rgba(38, 51, 77, 0.03)] py-15 h-[60px] w-full transform rounded-[30px] border-0 pe-[25px] ps-[30px] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md focus:outline-none md:w-[320px]"
                type="email"
                placeholder="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 transform transition-all duration-300 group-hover:scale-110"
                width="20"
                height="20"
                viewBox="0 0 21 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.5684 0H2.56836C1.46836 0 0.568359 0.9 0.568359 2V14C0.568359 15.1 1.46836 16 2.56836 16H18.5684C19.6684 16 20.5684 15.1 20.5684 14V2C20.5684 0.9 19.6684 0 18.5684 0ZM18.1684 4.25L11.6284 8.34C10.9784 8.75 10.1584 8.75 9.50836 8.34L2.96836 4.25C2.71836 4.09 2.56836 3.82 2.56836 3.53C2.56836 2.86 3.29836 2.46 3.86836 2.81L10.5684 7L17.2684 2.81C17.8384 2.46 18.5684 2.86 18.5684 3.53C18.5684 3.82 18.4184 4.09 18.1684 4.25Z"
                  className="fill-gray-400 transition-colors duration-300 group-hover:fill-blue-400"
                />
              </svg>
            </motion.div>

            {/* Phone */}
            <motion.div whileFocus={{ scale: 1.05 }} className="relative">
              <input
                className="shadow-[0px 2px 5px 0px rgba(38, 51, 77, 0.03)] py-15 h-[60px] w-full transform rounded-[30px] border-0 pe-[25px] ps-[30px] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md focus:outline-none md:w-[320px]"
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 transform transition-all duration-300 group-hover:scale-110"
                width="20"
                height="20"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.772 12.25L14.232 11.96C13.622 11.89 13.022 12.1 12.592 12.53L10.752 14.37C7.92203 12.93 5.60203 10.62 4.16203 7.78L6.01203 5.93C6.44203 5.5 6.65203 4.9 6.58203 4.29L6.29203 1.77C6.17203 0.76 5.32203 0 4.30203 0H2.57203C1.44203 0 0.502033 0.94 0.572033 2.07C1.10203 10.61 7.93203 17.43 16.462 17.96C17.592 18.03 18.532 17.09 18.532 15.96V14.23C18.542 13.22 17.782 12.37 16.772 12.25Z"
                  className="fill-gray-400 transition-colors duration-300 group-hover:fill-blue-400"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <textarea
            className="shadow-[0px 2px 5px 0px rgba(38, 51, 77, 0.03)] h-[60px] w-full transform rounded-[30px] border-0 pe-[25px] ps-[30px] pt-4 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md focus:outline-none"
            placeholder="Your Message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <svg
            className="absolute right-3 top-6 -translate-y-1/2 transform transition-all duration-300 group-hover:scale-110"
            width="20"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.5684 0H2.56836C1.46836 0 0.578359 0.9 0.578359 2L0.568359 20L4.56836 16H18.5684C19.6684 16 20.5684 15.1 20.5684 14V2C20.5684 0.9 19.6684 0 18.5684 0ZM5.56836 7H15.5684C16.1184 7 16.5684 7.45 16.5684 8C16.5684 8.55 16.1184 9 15.5684 9H5.56836C5.01836 9 4.56836 8.55 4.56836 8C4.56836 7.45 5.01836 7 5.56836 7ZM11.5684 12H5.56836C5.01836 12 4.56836 11.55 4.56836 11C4.56836 10.45 5.01836 10 5.56836 10H11.5684C12.1184 10 12.5684 10.45 12.5684 11C12.5684 11.55 12.1184 12 11.5684 12ZM15.5684 6H5.56836C5.01836 6 4.56836 5.55 4.56836 5C4.56836 4.45 5.01836 4 5.56836 4H15.5684C16.1184 4 16.5684 4.45 16.5684 5C16.5684 5.55 16.1184 6 15.5684 6Z"
              className="fill-gray-400 transition-colors duration-300 group-hover:fill-blue-400"
            />
          </svg>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            type="submit"
            className="shadow-[0px 2px 5px 0px rgba(38, 51, 77, 0.03)] my-3 h-[52px] w-[206PX] transform rounded-[9px] bg-black px-[35px] py-[15px] text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
          >
            SENT REQUEST
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
