import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles"
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
    </motion.div>

    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) =>(
        <div className="w-28 h-28" key={technology.name}>
          <p className={`${styles.sectionSubText} text-center`}>{technology.name}</p>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div></>
  )
}

export default SectionWrapper(Tech, "");