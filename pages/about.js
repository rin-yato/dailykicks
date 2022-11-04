/* eslint-disable @next/next/no-img-element */
import React from "react";
import MotionFade from "../MotionAnimation/components/MotionFade";
import { motion } from "framer-motion";
import Animation from "../MotionAnimation/Animation";
import { ButtonBase } from "@mui/material";
import Transition from "../MotionAnimation/Transition";
import Image from "next/image";

function About() {
  return (
    <MotionFade>
      <motion.div>
        <motion.div
          variants={Animation.Stagger}
          className="flex flex-col pt-7 md:pt-10 lg:mt-7 md:px-14 lg:px-30"
        >
          <motion.div
            variants={Animation.Scale}
            transition={{ duration: 0.8 }}
            className="rounded-full w-1/3 mx-auto mt-2 overflow-hidden md:w-1/12 lg:w-2/12 md:mx-0 md:mr-auto "
          >
            <Image
              src="/images/logo.jpeg"
              alt="logo"
              layout="responsive"
              width={100}
              height={100}
              priority
            />
          </motion.div>
          <motion.div
            variants={Animation.Stagger}
            className="mx-auto font-semibold mt-2 flex overflow-hidden md:hidden lg:hidden"
          >
            {"DAILY".split("").map((letter, index) => (
              <motion.div
                key={index}
                variants={Animation.Scale}
                className="text-base md:text-lg lg:text-xl"
              >
                {letter}
              </motion.div>
            ))}
            {"KICKS".split("").map((letter, index) => (
              <motion.div
                key={index}
                variants={Animation.SlideUpFromBottom}
                className="text-base md:text-lg lg:text-xl"
              >
                {letter}
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={Animation.SlideUp}
            className="font-semibold mt-10 text-sm px-5 md:text-lg lg:text-xl md:mt-16 lg:mt-20"
          >
            About Us <span className="text-sky-600">:</span>
          </motion.div>
          <motion.div
            variants={Animation.SlideUp}
            className="mt-4 text-sm text-justify text-slate-600 font-[500] px-5 md:text-lg lg:text-xl md:w-4/5"
          >
            Daily Kicks is a sneaker store that sells sneakers from different
            brands such as Nike, Adidas, Converse, New Balance, and many more.
          </motion.div>
          <motion.div
            variants={Animation.SlideUp}
            className="mt-4 text-sm text-justify text-slate-600 font-[500] px-5 md:text-lg lg:text-xl md:w-4/5"
          >
            Started in <span className="font-semibold">2016</span>, Daily Kicks
            has been selling sneakers for 5 years. Our goal is to provide the
            best quality sneakers and accessories to our customers. We are also
            trying to provide the best customer service to our customers.
          </motion.div>
          <motion.div
            variants={Animation.SlideUp}
            className="font-semibold mt-10 text-sm px-5 md:text-lg lg:text-xl md:mt-16 lg:mt-20"
          >
            Customer Feedback <span className="text-sky-600">:</span>
          </motion.div>
          <div className="mt-4 px-5 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-7 md:mt-10">
            <motion.div
              variants={Animation.SlideUp}
              className="rounded-md w-full overflow-hidden"
            >
              <img
                src="/feedback/1.jpeg"
                alt=""
                layout="responsive"
                width="100%"
                priority
                height="100%"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: Transition.ease }}
              viewport={{ once: true }}
              className="rounded-md w-full overflow-hidden"
            >
              <Image
                src="/feedback/2.jpeg"
                alt=""
                layout="responsive"
                width="100%"
                height="100%"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: Transition.ease }}
              viewport={{ once: true }}
              className="rounded-md w-full overflow-hidden"
            >
              <Image
                src="/feedback/3.jpeg"
                alt=""
                layout="responsive"
                width="100%"
                height="100%"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: Transition.ease }}
              viewport={{ once: true }}
              className="rounded-md w-full overflow-hidden"
            >
              <Image
                src="/feedback/4.jpeg"
                alt=""
                layout="responsive"
                width="100%"
                height="100%"
                priority
              />
            </motion.div>
          </div>
          <div className="font-semibold mt-10 text-sm px-5 md:text-lg lg:text-xl md:mt-16 lg:mt-20">
            Contact Us <span className="text-sky-600">:</span>
          </div>
          <div className="mt-4 mb-16 px-5 flex gap-4 justify-center md:mt-10 md:mb-40 md:gap-10 md:justify-start md:px-8">
            <motion.a
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: Transition.ease, delay: 0.1 }}
              href="https://www.facebook.com/Dailykicks.kh"
            >
              <ButtonBase className="bg-[#0775E7] shadow-md p-1.5 w-min rounded-full md:scale-125">
                <i className="bx bxl-facebook bx-md text-white "></i>
              </ButtonBase>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: Transition.ease, delay: 0.2 }}
              href="https://www.instagram.com/dailykicks.kh/"
            >
              <ButtonBase className="instagram-bg shadow-md p-1.5 w-min rounded-full md:scale-125">
                <i className="bx bxl-instagram bx-md text-white "></i>
              </ButtonBase>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: Transition.ease, delay: 0.3 }}
              href="https://goo.gl/maps/6RqybHSSrGPpYsJd9"
            >
              <ButtonBase className="bg-white shadow-md p-1.5 rounded-full md:scale-125">
                <i className="bx bxs-map text-rose-500 bx-md "></i>
              </ButtonBase>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: Transition.ease, delay: 0.4 }}
              href="tel:086888217"
            >
              <ButtonBase className="bg-[#51E45B] shadow-md p-1.5 w-min rounded-full md:scale-125">
                <i className="bx bxs-phone bx-md text-white "></i>
              </ButtonBase>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </MotionFade>
  );
}

export default About;
