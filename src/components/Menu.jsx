import React from "react";
import { BsPersonWalking } from "react-icons/bs";
import { GiCoffeeCup } from "react-icons/gi";
import { PiPlanetFill } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { FaGamepad, FaChevronDown } from "react-icons/fa";
import { GiCampingTent, GiBallPyramid } from "react-icons/gi";

const Menu = (props) => {
  const { section, onSectionChange, menuOpened, setMenuOpened } = props;
  // console.log(section);
  return (
    <div className="">
      {/*Menu Close/Open Button*/}
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-14 right-14 p-3 w-12 h-12 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>

      {/* DownButton */}
      <div
        className={`absolute bottom-10 z-10 left-[45%] ${
          section == 7 ? "rotate-180" : ""
        }`}
      >
        <button
          onClick={() =>
            onSectionChange(
              section == 0 ? section + 2 : section == 7 ? 0 : section + 1
            )
          }
          className="border p-2 rounded-xl transition-all duration-500 ease-in-out"
        >
          <FaChevronDown className="text-white text-4xl cursor-pointer group-hover:text-blue-400" />
        </button>
      </div>

      {/* Container */}
      <div
        className={`z-10 top-0 right-2 bottom-0 transition-all fixed mr-10 h-screen flex flex-col items-end justify-center space-y-10 p-2 duration-500 
      ${
        menuOpened
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      >
        {/* Menu Item 0 */}
        <button
          onClick={() => onSectionChange(0)}
          className="group flex items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
          id={section === 0 ? "menuactive" : ""}
        >
          <span className="p-2 ml-[-2.9em] text-white text-sm opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
            Ball!
          </span>
          <GiBallPyramid className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>

        {/* Menu Item 1 */}
        <button
          onClick={() => onSectionChange(2)}
          className="group flex items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
          id={section === 2 ? "menuactive" : ""}
        >
          <span className="p-2 ml-[-3.7em] text-white text-sm opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
            About
          </span>
          <BsPersonWalking className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>

        {/* Menu Item 2 */}
        <button
          onClick={() => onSectionChange(3)}
          className="group flex items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
          id={section === 3 ? "menuactive" : ""}
        >
          <span className="p-2 ml-[-3.2em] text-white text-sm opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
            Skills
          </span>
          <PiPlanetFill className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>

        {/* Menu Item 3 */}
        <button
          onClick={() => onSectionChange(4)}
          className="group flex items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
          id={section === 4 ? "menuactive" : ""}
        >
          <span className="p-2 ml-[-4.4em] text-white text-sm opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
            Projects
          </span>
          <FaGamepad className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>

        {/* Menu Item 4 */}
        <button
          onClick={() => onSectionChange(5)}
          className="group flex items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
          id={section === 5 ? "menuactive" : ""}
        >
          <span className="p-2 ml-[-4.6em] text-white text-sm opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
            Tech Art
          </span>
          <GrTechnology className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>

        {/* Menu Item 5 */}
        <button
          onClick={() => onSectionChange(6)}
          className="group flex items-center border p-2 rounded-xl transition-all duration-500 ease-in-out"
          id={section === 6 ? "menuactive" : ""}
        >
          <span className="p-2 ml-[-4.2em] text-white text-sm opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out">
            Contact
          </span>
          <GiCoffeeCup className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>

        {/*Home Button*/}
        <button
          onClick={() => onSectionChange(7)}
          className="z-20 group flex items-center fixed bottom-14 right-14 p-3 w-14 h-14 rounded-md"
          id={section === 7 ? "menuactive" : ""}
        >
          <GiCampingTent className="text-white text-3xl cursor-pointer group-hover:text-blue-400" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
