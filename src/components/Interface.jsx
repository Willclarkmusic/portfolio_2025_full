import React, { useState } from "react";
import { motion } from "framer-motion";
import { SkillsSlider, Modal } from "./SkillsSlider";
import { FullStackData, AVArtSkillsData } from "./Content";
import { SkillTrees, SkillTreesMobile, ArtSkillTree } from "./SkillTrees";
import { MobileParams } from "./ScrollManager";

const Section = (props) => {
  const { isTablet, isMobile, responsiveRatio } = MobileParams();
  const { children, mobileTop } = props;
  return (
    <motion.section
      className={`${isMobile ? " " : isTablet ? "" : ""}
        h-screen w-[90%] p-5 justify-center max-w-screen-2xl mx-auto
        flex flex-col select-none justitfy-start         
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
      <Section mobileTop>
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
  const { isTablet, isMobile, responsiveRatio } = MobileParams();

  return (
    <Section id="section2">
      <div className="max-w-lg  leading-snug text-left">
        <h1 className="text-6xl p-2">About Me</h1>
        <motion.p
          className={`${
            isMobile
              ? "p-[1em] text-sm"
              : isTablet
              ? "p-[1.5em] text-xl"
              : "p-[1.5em] text-xl"
          }  text-gray-400 bg-gray-900 hover:bg-black transition rounded-lg duration-500 border text-base`}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          I am a Software Developer from San Francisco, CA, <br />I love to
          create satisfying, interactive experiences.
          <br />
          <br />
          After 15 years operating in the digital-arts industry, I have decided
          to level up my career by becoming a creative developer.
          <br />
          <br /> I am currently earning an additional Bachelor's of Engineering
          degree in Computer Science from Oregon State University ((Go
          Beavers!))
          <br />
          <br />I hope to combine my skills in A/V tech with my skills in
          software development to create something truely cutting-edge. I am
          eager to put my new skills to the test as I level up my career as
          Software Developer.
        </motion.p>
      </div>
    </Section>
  );
};

const SkillsSection = () => {
  const { isTablet, isMobile, responsiveRatio } = MobileParams();
  const [openModal1, setOpenModal1] = useState(false);
  const [currData1, setCurrData1] = useState({});

  const [openModal2, setOpenModal2] = useState(false);
  const [currData2, setCurrData2] = useState({});

  return (
    <div className="size-full items-center justify-center">
      <Section>
        <h1 className={`${isMobile ? "pt-20" : ""} text-6xl`}>Skills</h1>
        <div className={`${isMobile ? "w-[90vw] pt-10" : "w-xl"} h-[90vh] `}>
          {!isMobile && <SkillTrees />}
          {isMobile && <SkillTreesMobile />}
        </div>
      </Section>

      <Section>
        <h1 className="text-6xl p-2">Programming Projects</h1>
        {openModal1 && <Modal data={currData1} setOpenModal={setOpenModal1} />}
        <div className={`${isMobile ? "w-[95vw]" : "w-[100vw"} `}>
          <div className="">
            <SkillsSlider
              data={FullStackData}
              openModal={openModal1}
              setOpenModal={setOpenModal1}
              setCurrData={setCurrData1}
              widthDim={isMobile ? "w-[80vw]" : isTablet ? "w-[80vw]" : "w-xl"}
            />
          </div>
        </div>
      </Section>

      <Section>
        <h1 className={`${isMobile ? "text-4xl mt-20" : "text-6xl"} p-2`}>
          &#40;ART&#41; =&gt; &#123;TECH&#125;
        </h1>
        {openModal2 && <Modal data={currData2} setOpenModal={setOpenModal2} />}
        <div
          className={`${
            isMobile ? "w-[95vw]" : isTablet ? "w-[85vw]" : "grid grid-cols-3"
          } `}
        >
          <div className="col-span-1">
            <ArtSkillTree />
          </div>
          <div className="col-span-2">
            <SkillsSlider
              data={AVArtSkillsData}
              openModal={openModal2}
              setOpenModal={setOpenModal2}
              setCurrData={setCurrData2}
              widthDim={isMobile ? "w-[80vw]" : isTablet ? "w-[80vw]" : "w-xl"}
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
      <div className="max-w-lg">
        <motion.p
          className="p-[1.5em] text-gray-400 bg-gray-900 hover:bg-black transition rounded-lg duration-500 border text-base"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          WillClarkMusic@gmail.com
        </motion.p>
      </div>
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
