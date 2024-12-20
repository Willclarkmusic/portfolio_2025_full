import React, { useState } from "react";

import { motion } from "framer-motion";
import { SkillsSlider, Modal } from "./SkillsSlider";
import { FullStackData, AVArtSkillsData } from "./Content";
import SkillTrees, { ArtSkillTree } from "./SkillTrees";

const Section = (props) => {
  const { children, mobileTop } = props;
  return (
    <motion.section
      className={`
        h-screen w-[90%] p-5 justify-center max-w-screen-2xl mx-auto
        flex flex-col select-none justitfy-start md:justify-center
        
        `}
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.25,
          duration: 1.6,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
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
      <div className="max-w-lg pl-10 leading-snug text-left ">
        <h1 className="text-6xl p-2">About Me</h1>
        <motion.p
          className="p-[1.5em] text-gray-400 bg-gray-900 hover:bg-black transition rounded-lg duration-500 border text-base"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          I am a Software Developer from San Francisco, CA, <br />I love to
          create satisfying, interactive experiences. I am currently earning an
          additional Bachelor's degree in Computer Science from Oregon State
          University (Go Beavers!)—adding to my Bachelor's in Music from the San
          Francisco Conservatory of Music and a Master's in Music Technology
          from Berklee College of Music. I sure do love to learn new things!
          <br />
          <br />I am eager to put my new skills to the test as I level up my
          career as Software Developer.
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
    <div className="size-full items-center justify-center">
      <Section>
        <h1 className="text-6xl p-2">Skills</h1>
        <div className="size-full">
          <SkillTrees />
        </div>
      </Section>

      <Section id="section3">
        <h1 className="text-6xl p-2">Projects</h1>
        {openModal1 && <Modal data={currData1} setOpenModal={setOpenModal1} />}
        <div className="">
          <div className=""></div>
          <div className="container mx-auto ">
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
        <h1 className="text-6xl p-2">&#40;ART&#41; =&gt; &#123;TECH&#125;</h1>
        {openModal2 && <Modal data={currData2} setOpenModal={setOpenModal2} />}
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <ArtSkillTree />
          </div>
          <div className="col-span-2">
            <SkillsSlider
              data={AVArtSkillsData}
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
