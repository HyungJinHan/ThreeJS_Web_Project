import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-4 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduce</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Agile(애자일)의 사전적인 용어는 기민한, 좋은 것을 빠르고 낭비없게 만드는
        것입니다. 물론 현재로써의 저는 아주 기민하다고 하기에는 아직 많이
        부족합니다. 하지만 누구보다도 좋은 것을 빠르고 낭비없게 만들며 기민하게
        움직이며 최신 트렌드에 맞춰가려 노력하고 있으며, 현재의 내 자신을
        고집하기 보다는 변화를 빠르게 수용하는 개발자입니다! 저는 살아있는
        Agile이 되기 위해 공정과 도구보다 개인과 상호작용을 중요하게 생각하고,
        포괄적인 문서보다 소프트웨어의 작동에 힘을 쓰고 있습니다. 또한, 계약
        협상보다 고객과의 협력을 통한 약속을 중요하게 생각하며 계획을 따르기보다
        변화에 대응해 빠르게 트렌드를 캐치합니다!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
