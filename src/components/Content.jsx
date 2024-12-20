import { RiTailwindCssFill, RiBlenderLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { PiFileCSharp } from "react-icons/pi";
import {
  FaReact,
  FaCloud,
  FaPython,
  FaUnity,
  FaGithub,
  FaHtml5,
  FaAws,
  FaNode,
  FaRegLightbulb,
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import {
  SiThreedotjs,
  SiHuggingface,
  SiTensorflow,
  SiUnrealengine,
  SiAdobe,
  SiJuce,
  SiWwise,
  SiCplusplus,
} from "react-icons/si";
import { DiVisualstudio, DiMongodb } from "react-icons/di";
import { BsNintendoSwitch } from "react-icons/bs";
import { GiGuitar, GiMountainClimbing } from "react-icons/gi";
import { SiProtools } from "react-icons/si";
import { SiOpengl } from "react-icons/si";
import { MdTouchApp } from "react-icons/md";
import { MdOutlineFestival } from "react-icons/md";
import { HiAdjustmentsVertical } from "react-icons/hi2";

// {Slides} //
export const FullStackData = [
  {
    title: "React Three Fiber",
    img: "images/This1.png",
    role: "Front-end Develeoper",

    description:
      "This Website was built with a lot of tools. React Fiber, Three.js, tailwind and more! I am excited to explore the amazing world of React. Code that writes other code... Amazing! ",
    element: (
      <div className="justify-center">
        <button
          onClick={() =>
            window.open(
              "https://github.com/Willclarkmusic/portfolio_2025_full",
              "_blank"
            )
          }
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            View on GitHub
          </span>
          <FaGithub className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>

        <img src="images/This1.png" className="rounded-3xl object-cover" />
      </div>
    ),
  },
  {
    title: "REST API",
    img: "images/rest-project.png",
    role: "Full-stack Developer",
    description:
      "This Website was built with a lot of tools. React Fiber, Three.js, tailwind and more!",
    element: (
      <div className="justify-center">
        <button
          onClick={() => window.open("http://18.144.55.121:3000/", "_blank")}
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            View Live
          </span>
          <FaAws className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
        <img
          src="images/rest-project.png"
          className="rounded-3xl w-[93%] object-cover"
        />
      </div>
    ),
  },
  {
    title: "AI Assistant",
    img: "images/RoboBot.png",
    role: "Machine Learning Researcher",
    description:
      "This Friendly AI was my submission for the Cal Hacks: Hackathon 2024.  It  was made with a combination of Meta XR Tools, Unity and C#.  A react friendly version coming soon!",
    element: (
      <div className="justify-center">
        <img src="images/RoboBot2.png" className="rounded-3xl object-cover" />
      </div>
    ),
  },

  {
    title: "Synthesizer Plugin",
    img: "./images/BassBotLogo1.png",
    role: "Audio DSP Programmer",
    description:
      "This Website was built with a lot of tools. React Fiber, Three.js, tailwind and more!",
    element: (
      <div className="overflow-hidden justify-center ">
        <button
          onClick={() =>
            window.open(
              "https://github.com/Willclarkmusic/portfolio_2025_full",
              "_blank"
            )
          }
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            View on GitHub
          </span>
          <FaGithub className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
        <iframe
          width="600"
          height="350"
          src="https://www.youtube.com/embed/BDI37ZLwD9U?si=rdontQhEELwsAPef"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen="true"
        ></iframe>
      </div>
    ),
  },
  {
    title: "Game Audio Class: Wwise & Unity",
    img: "./images/ChickenGame.png",
    role: "Technical Sound Designer",
    description:
      "This Website was built with a lot of tools. React Fiber, Three.js, tailwind and more!",
    element: (
      <div>
        <iframe
          frameborder="0"
          src="https://itch.io/embed-upload/11622436?color=333333"
          allowfullscreen=""
          width="900px"
          height="630px"
        ></iframe>
      </div>
    ),
  },
  {
    title: "Marble Game",
    img: "./images/MarblesMagnets.png",
    role: "Game Developer",
    description:
      "This Website was built with a lot of tools. React Fiber, Three.js, tailwind and more!",
    element: (
      <div className="justify-center">
        <iframe
          allowfullscreen=""
          width="900px"
          height="630px"
          frameborder="0"
          src="https://itch.io/embed-upload/11630976?color=333333"
        ></iframe>
      </div>
    ),
  },
  {
    title: "Monsters in Trucks",
    img: "./images/MonsterTrucks1.png",
    role: "Game Developer",
    description:
      "This Website was built with a lot of tools. React Fiber, Three.js, tailwind and more!",
    element: (
      <div className="justify-center">
        <iframe
          allowfullscreen=""
          width="900px"
          height="630px"
          frameborder="0"
          src="https://itch.io/embed-upload/11627955?color=333333"
        ></iframe>
      </div>
    ),
  },
  {
    title: "Game Jam: 1st Place",
    img: "./images/JellyJam.webp",
    role: "Game Developer",
    description:
      "This Website was built with a lot of tools. React Fiber, Three.js, tailwind and more!",
    element: (
      <div className="justify-center w-[100%] h-[100%]">
        <iframe
          id="youtubevid"
          src="https://www.youtube.com/embed/sNWzZMGAus8?si=v1-HWaR0c4qXKv6w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    ),
  },
];

export const AVArtSkillsData = [
  {
    title: "Marpi: Paleo Alto",
    img: "./images/PaleoAlto2.webp",
    role: "CAD Designer | Project Manager",
    description:
      "PaleoAlto was my collaboration between Colour Feeders and the digital-artist, Marpi for the art festival 'CODE: Art' in the downtown public spaces of Palo Alto, CA. I led the construction and CAD design for this piece while my company Colour Feeders handled the technology and computing power.",
    element: (
      <div className="overflow-hidden justify-center ">
        <button
          onClick={() =>
            window.open(
              "https://github.com/Willclarkmusic/portfolio_2025_full",
              "_blank"
            )
          }
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            View on GitHub
          </span>
          <FaGithub className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
        <iframe
          width="600"
          height="350"
          src="https://www.youtube.com/embed/ItJb8IFTutE?si=4YJjcUpon-3MoDEW"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen="true"
        ></iframe>
      </div>
    ),
  },
  {
    title: "Kaskade: Menagerie 2022",
    img: "./images/Menag2022.jpg",
    role: "Stage Designer | Visual Artist",
    description:
      "This stage design was for the festival 'Menagerie 2023' with headlining artist Kaskade. I created the design for the stage, lighting, video and rigging, then it was passed off to a civil-engineering firm.  I supervised and staffed the build and operation of the stage, while operating video for the headlining performances.",
    element: (
      <div className="overflow-hidden justify-center ">
        <iframe
          width="600"
          height="350"
          src="https://www.youtube.com/embed/o_2ffI3xDDM?si=ToFiy7RqNoamWxdL"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen="true"
        ></iframe>
      </div>
    ),
  },
  {
    title: "Diplo: Menagerie 2021",
    img: "./images/Diplo1.png",
    role: "Stage Designer | Visual Artist",
    description:
      "This Website was built with a lot of tools. React Fiber, Three.js, tailwind and more!",
    element: "",
  },
  {
    title: "Artechouse: Computing Infrastructure",
    img: "./images/ATH1.jpg",
    role: "Stage Designer | Visual Artist",
    description:
      "Artechouse is one of the premiere digital-art spaces in the world with locations on the east coast and pop-ups internationally. I built over 30 of the highest level, enterprise-server computer nodes to power real-time art installations and single-node art projects with a budget of over $1 million. Their space in New York holds the record for highest pixel-density projection mapping ever done.",
    element: (
      <div className="">
        <img
          src="images/ATH3.jpg"
          className="col-span-2 rounded-3xl object-cover"
        />
        <img
          src="images/ATHCompy2-scaled.jpg"
          className="col-span-1 rounded-3xl object-cover"
        />
      </div>
    ),
  },
  {
    title: "Audio Reactive Visuals",
    img: "./images/Blob.png",
    role: "Interactive Audio/Visual Artist",
    description:
      "This Website was built with a lot of tools. React Fiber, Three.js, tailwind and more!",
    element: (
      <div className="overflow-hidden justify-center ">
        <button
          onClick={() =>
            window.open(
              "https://github.com/Willclarkmusic/portfolio_2025_full",
              "_blank"
            )
          }
          className="group flex m-2 items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <span className="p-2 text-white text-sm  opacity-100  transition-all duration-300 ease-in-out">
            View on GitHub
          </span>
          <FaGithub className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
        <iframe
          width="600"
          height="350"
          src="https://www.youtube.com/embed/BDI37ZLwD9U?si=rdontQhEELwsAPef"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen="true"
        ></iframe>
      </div>
    ),
  },
];

// {Trees} //
export const WebAppTree = [
  {
    _id: 1,
    icon: <FaNode />,
    text: "Node.JS",
    lvl: 4,
    className: "top-[15%] left-[17%]",
  },
  {
    _id: 2,
    icon: <FaReact />,
    text: "React",
    lvl: 4,
    className: "top-[35%] left-[11%]",
  },
  {
    _id: 3,
    icon: <FaCloud />,
    text: "REST API",
    lvl: 4,
    className: "top-[35%] left-[23%]",
  },
  {
    _id: 4,
    icon: <SiThreedotjs />,
    text: "Three.JS",
    lvl: 5,
    className: "top-[55%] left-[11%]",
  },
  {
    _id: 5,
    icon: <FaAws />,
    text: "AWS EC2 & S3 ",
    lvl: 2,
    className: "top-[60%] left-[31%]",
  },
  {
    _id: 6,
    icon: <FaGithub />,
    text: "Git",
    lvl: 4,
    className: "top-[70%] left-[31%]",
  },
  {
    _id: 7,
    icon: <DiMongodb />,
    text: "Mongo DB",
    lvl: 3,
    className: "top-[50%] left-[31%]",
  },
  {
    _id: 8,
    icon: <FaHtml5 />,
    text: "HTML/Css",
    lvl: 4,
    className: "top-[21%] left-[2%]",
  },
  {
    _id: 9,
    icon: <IoLogoJavascript />,
    text: "JavaScript",
    lvl: 5,
    className: "top-[10%] left-[2%]",
  },
  {
    _id: 10,
    icon: <RiTailwindCssFill />,
    text: "TailWind",
    lvl: 4,
    className: "top-[60%] left-[16.5%]",
  },
  {
    _id: 11,
    icon: <TbBrandFramerMotion />,
    text: "Framer Motion",
    lvl: 3,
    className: "top-[60%] left-[5.5%]",
  },
];

export const MLAppTree = [
  {
    _id: 1,
    icon: <FaPython />,
    text: "Python",
    lvl: 5,
    className: "top-[15%] left-[48%]",
  },
  {
    _id: 2,
    icon: <SiHuggingface />,
    text: "Hugging Face",
    lvl: 2,
    className: "top-[35%] left-[42%]",
  },
  {
    _id: 3,
    icon: <SiTensorflow />,
    text: "Tensor Flow",
    lvl: 2,
    className: "top-[35%] left-[54%]",
  },
];

export const SoftDevTree = [
  {
    _id: 1,
    icon: <FaUnity />,
    text: "Unity 3d",
    lvl: 4,
    className: "top-[35%] left-[72%]",
  },
  {
    _id: 2,
    icon: <SiUnrealengine />,
    text: "Unreal Engine",
    lvl: 4,
    className: "top-[35%] left-[84%]",
  },
  {
    _id: 3,
    icon: <PiFileCSharp />,
    text: "C#",
    lvl: 4,
    className: "top-[15%] left-[78%]",
  },
  {
    _id: 4,
    icon: <SiCplusplus />,
    text: "C++",
    lvl: 4,
    className: "top-[15%] left-[88%]",
  },
  {
    _id: 5,
    icon: <SiWwise />,
    text: "Wwise: Audio",
    lvl: 4,
    className: "top-[40%] left-[78%]",
  },
  {
    _id: 6,
    icon: <RiBlenderLine />,
    text: "Blender",
    lvl: 4,
    className: "top-[75%] left-[75%]",
  },
  {
    _id: 7,
    icon: <FaMeta />,
    text: "MetaXR Tools",
    lvl: 4,
    className: "top-[20%] left-[65%]",
  },
  {
    _id: 8,
    icon: <BsNintendoSwitch />,
    text: "Mario Kart",
    lvl: 6,
    className: "top-[75%] left-[81%]",
  },
  {
    _id: 9,
    icon: <SiJuce />,
    text: "Juce: Audio DSP",
    lvl: 5,
    className: "top-[35%] left-[93%]",
  },
];

export const OtherSkillTree = [
  {
    _id: 1,
    icon: <GiGuitar />,
    text: "Bass Guitar",
    lvl: 5,
    className: "top-[40%] left-[10%]",
  },
  {
    _id: 2,
    icon: <GiMountainClimbing />,
    text: "Rock Climbing",
    lvl: 4,
    className: "top-[72%] left-[20%]",
  },
  {
    _id: 3,
    icon: <SiProtools />,
    text: "Pro-Tools",
    lvl: 5,
    className: "top-[70%] left-[60%]",
  },
  {
    _id: 4,
    icon: (
      <div>
        <h2 className="text-2xl p-[0.1em] py-2">Live</h2>
      </div>
    ),
    text: "Ableton",
    lvl: 5,
    className: "top-[60%] left-[80%]",
  },
  {
    _id: 5,
    icon: <MdTouchApp />,
    text: "TouchDesigner",
    lvl: 5,
    className: "top-[42%] left-[37%]",
  },
  {
    _id: 6,
    icon: <SiOpengl />,
    text: "OpenGL",
    lvl: 5,
    className: "top-[10%] left-[20%]",
  },
  {
    _id: 7,
    icon: <MdOutlineFestival />,
    text: "Stage Design",
    lvl: 5,
    className: "top-[24%] left-[76%]",
  },
  {
    _id: 8,
    icon: <FaRegLightbulb />,
    text: "Lighting Design",
    lvl: 4,
    className: "top-[5%] left-[60%]",
  },
  {
    _id: 9,
    icon: <HiAdjustmentsVertical />,
    text: "VJ (video)",
    lvl: 5,
    className: "top-[35%] left-[56%]",
  },
];
