import React, { useState } from "react";

import { motion } from "framer-motion";
import { SkillsSlider, Modal } from "./SkillsSlider";
import { FullStackData, GamedevData, OtherSkillsData } from "./Content";
import SkillTree from "./SkillsTree";

const Section = (props) => {
  const { children, mobileTop } = props;
  return (
    <section
      className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start select-none justitfy-start md:justify-center

        `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.6,
          delay: 0.6,
        },
      }}
    >
      {children}
    </section>
  );
};

const isMobile = window.innerWidth < 768;

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsDevSection />
      <ProjectsOtherSection />
    </div>
  );
};

const HomeSection = () => {
  return (
    <>
      <Section mobileTop id="section1">
        <h1 className="text-6xl font-extrabold leading-snug">
          Hi, I'm
          <br />
          <span className="bg-white text-black accent-black px-1 italic">
            Will Clark
          </span>
        </h1>
        <motion.p
          className="text-xl text-gray-500 mt-4"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 1.5,
          }}
        >
          Welcome to my Software Developer Portfolio
        </motion.p>
      </Section>
      <Section />
    </>
  );
};

const AboutSection = () => {
  return (
    <Section id="section2">
      <div className="max-w-lg leading-snug text-left ">
        <h1 className="text-6xl p-2">About Me</h1>
        <motion.p
          className="p-[1em] text-gray-400 bg-gray-900 hover:bg-black transition rounded-lg duration-500 border text-base"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.6,
            delay: 0.6,
          }}
        >
          I am a Software Developer from San Francisco, CA, <br />I love to
          create satisfying, interactive experiences and am hungry to <br />
          Currently, I’m earning a second Bachelor's degree in Computer Science
          from Oregon State University (Go Beavers!)—adding to my Bachelor's in
          Music from the San Francisco Conservatory of Music and a Master's in
          Music Technology from Berklee College of Music.
        </motion.p>
      </div>
    </Section>
  );
};

const SkillsSection = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [currData1, setCurrData1] = useState({});

  const [openModal2, setOpenModal2] = useState(false);
  const [currData2, setCurrData2] = useState({});

  return (
    <div className="pt-[1em] items-center">
      <Section>
        <h1 className="text-center">Programming Skills</h1>
        <div>
          <SkillTree />
        </div>
      </Section>

      <Section id="section3">
        <h1 className="text-center">Full-Stack | Web-App Developer</h1>
        {openModal1 && <Modal data={currData1} setOpenModal={setOpenModal1} />}
        <div className="">
          <div className=""></div>
          <div className="object-left ">
            <SkillsSlider
              data={FullStackData}
              openModal={openModal1}
              setOpenModal={setOpenModal1}
              setCurrData={setCurrData1}
              widthDim={"w-[76vw]"}
            />
          </div>
        </div>
      </Section>

      <Section>
        <h1 className="text-center">&#40;ART&#41; =&gt; &#123;TECH&#125;</h1>
        {openModal2 && <Modal data={currData2} setOpenModal={setOpenModal2} />}
        <div className="grid grid-cols-3">
          <div className="col-span-1"></div>
          <div className="col-span-2">
            <SkillsSlider
              data={OtherSkillsData}
              openModal={openModal2}
              setOpenModal={setOpenModal2}
              setCurrData={setCurrData2}
              widthDim={"w-[50vw]"}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

const ProjectsDevSection = () => {
  return (
    <Section id="section3">
      <h1>Contact</h1>
    </Section>
  );
};

const ProjectsOtherSection = () => {
  return (
    <Section id="section4">
      <h1 className="pt-[30vw] text-xl font-thin">Will Clark Design 2024</h1>
    </Section>
  );
};
