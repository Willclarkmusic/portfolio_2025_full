import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { WebAppTree, MLAppTree, SoftDevTree, OtherSkillTree } from "./Content";

const SkillTrees = () => {
  const containerRef = useRef();
  const [target, setTarget] = useState(9);
  const [infoGraph, setInfoGraph] = useState([5, "JavaScript"]);

  const [target2, setTarget2] = useState(1);
  const [infoGraph2, setInfoGraph2] = useState([5, "Python"]);

  const [target3, setTarget3] = useState(4);
  const [infoGraph3, setInfoGraph3] = useState([4, "C++"]);

  const Bar = ({ lvl, color }) => {
    let progress = lvl * 20;
    return (
      <div className="flex w-48 h-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className={`${color} h-6 rounded-full`}
          style={{ width: `${progress}%` }}
        >
          <h1 className="text-black px-1 italic">{lvl}</h1>
        </div>
      </div>
    );
  };
  return (
    <>
      <motion.div
        className="columns-3 w-[90%]"
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
        <div className="col-span-1 h-auto">
          <h1 className="pt-5 pl-5 justification-center">Web Dev</h1>
          <div className="flow-root bg-white px-1 italic">
            <div className="float-right pt-5 px-5 pb-5">
              <Bar lvl={infoGraph[0]} color={"bg-indigo-400"} />
            </div>
            <h1 className="float-right pt-5 max-w-48 text-black text-xl justify-center ">
              {infoGraph[1]}
            </h1>
          </div>
        </div>

        <div className="col-span-1 h-auto">
          <h1 className="pt-5 pl-5 justification-center">Back End Dev</h1>{" "}
          <div className="flow-root bg-white px-1 italic">
            <div className="float-right pt-5 px-5 pb-5">
              <Bar lvl={infoGraph2[0]} color={"bg-teal-400"} />
            </div>
            <h1 className="float-right pt-5 max-w-48 text-black text-xl justify-center ">
              {infoGraph2[1]}
            </h1>
          </div>
        </div>

        <div className="col-span-1 h-auto">
          <h1 className="pt-5 pl-5 justification-center">App / Game Dev</h1>{" "}
          <div className="flow-root bg-white px-1 italic">
            <div className="float-right pt-5 px-5 pb-5">
              <Bar lvl={infoGraph3[0]} color={"bg-pink-200"} />
            </div>
            <h1 className="float-right pt-5 max-w-48 text-black text-xl justify-center ">
              {" "}
              {infoGraph3[1]}
            </h1>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={containerRef}
        className="relative columns-3 h-[80%] w-[90%] top-[2%] place-content-center overflow-hidden border rounded-xl"
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
        <div className="border col-span-1 h-full w-[104%]" />
        <div className="border col-span-1 h-full w-[104%]" />
        <div className="border col-span-1 h-full w-[104%]" />
        {WebAppTree.map((d, key) => (
          <SkillCard
            containerRef={containerRef}
            className=""
            data={d}
            color={"border-indigo-400"}
            key={key}
            target={target}
            setTarget={setTarget}
            setInfoGraph={setInfoGraph}
          />
        ))}
        {MLAppTree.map((d, key) => (
          <SkillCard
            containerRef={containerRef}
            className=""
            data={d}
            color={"border-teal-400"}
            key={key}
            target={target2}
            setTarget={setTarget2}
            setInfoGraph={setInfoGraph2}
          />
        ))}
        {SoftDevTree.map((d, key) => (
          <SkillCard
            containerRef={containerRef}
            className=""
            data={d}
            color={"border-pink-200"}
            key={key}
            target={target3}
            setTarget={setTarget3}
            setInfoGraph={setInfoGraph3}
          />
        ))}
      </motion.div>
    </>
  );
};

export const ArtSkillTree = () => {
  const containerRef = useRef();
  const [target4, setTarget4] = useState(4);
  const [infoGraph4, setInfoGraph4] = useState([5, "Ableton"]);

  const Bar = ({ lvl, color }) => {
    let progress = lvl * 20;
    return (
      <div className="w-60 h-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className={`${color} h-6 rounded-full`}
          style={{ width: `${progress}%` }}
        >
          <h1 className="text-white px-1 italic">{lvl}</h1>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="p-2 mt-20 mr-10">
        <motion.p
          className="p-[1.5em] text-gray-400 bg-gray-900 hover:bg-black transition rounded-lg duration-500 border text-base"
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
          }}
        >
          Before commiting my career to programming in 2020, I enjoyed a
          successful 15 year career in the Digital Arts, and music events world
          as a Visual Artist, AV technologist and VJ / Lighting Designer. I
          probably worked with your favorite musician! <br />
          My ability to take a project from concept to execution is unmatched.
        </motion.p>{" "}
      </div>
      <div className="columns-3 w-[85%]">
        <div className="col-span-1 ">
          <h1 className="absolute pt-5 pl-5 italic text-white text-xl">
            {infoGraph4[1]}
          </h1>
          <br />
          <div className="pt-5 pl-10">
            <Bar lvl={infoGraph4[0]} color={"bg-orange-400"} />
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative grid h-[35%] w-[90%] top-[5%] place-content-center overflow-hidden border rounded-xl"
      >
        {OtherSkillTree.map((d, key) => (
          <SkillCard
            containerRef={containerRef}
            className=""
            data={d}
            color={"border-orange-400"}
            key={key}
            target={target4}
            setTarget={setTarget4}
            setInfoGraph={setInfoGraph4}
          />
        ))}
      </div>
    </>
  );
};

const SkillCard = ({
  containerRef,
  target,
  setTarget,
  setInfoGraph,
  data,
  color,
}) => {
  const { _id, icon, text, lvl, className } = data;

  const ButtonClick = () => {
    if (target === _id) {
      setTarget(-1);
      setInfoGraph([0, "<Select a Skill>"]);
    } else {
      setTarget(_id);
      setInfoGraph([lvl, text]);
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      className={twMerge(
        `absolute text-5xl m:text-lg ${
          target === _id ? "text-blue-400" : "text-gray-300"
        }`,
        className
      )}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          staggerChildren: 0.25,
          duration: 1.2,
        },
      }}
    >
      <button
        onClick={ButtonClick}
        className={`items-center border p-2  rounded-xl transition-all duration-500 ease-in-out${
          target === _id ? `text-blue-400 ${color}` : "text-gray-600"
        }`}
      >
        {icon}
      </button>
    </motion.div>
  );
};

export default SkillTrees;
