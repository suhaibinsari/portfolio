"use client";
import { motion } from "framer-motion";

import { skillsData } from "@/app/utils/mock";
import React from "react";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {

  return (
    <section
      id="skills"
      className="max-w-[53rem] scroll-mt-28 text-center sm:mb-12"
    >
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-[#28485B]">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-[#F8F7F1] borderBlack rounded-xl px-5 py-3 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}