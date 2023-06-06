import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles"
import { textVariant } from "../utils/motion";

const Tech = () => {
  const rotationSpeed = 0.1; // Velocidad de rotación

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Languages and tools
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>

      <div className="mt-5 flex flex-row flex-wrap justify-center gap-5">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <p className={`${styles.sectionSubText} text-center`}>{technology.name}</p>
            <motion.div
              style={{ position: "relative" }} // Estilo para posicionar correctamente el icosahedro
              initial={{ rotateY: 0 }} // Rotación inicial
              animate={{ rotateY: 360 }} // Rotación final (completa vuelta)
              transition={{ duration: 60 / rotationSpeed, repeat: Infinity }} // Duración de la animación y repetición infinita
            >
              <BallCanvas icon={technology.icon} />
            </motion.div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");
