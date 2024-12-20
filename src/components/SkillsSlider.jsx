import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "@react-three/drei";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaWindowClose, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useFrame } from "@react-three/fiber";

export const SkillsSlider = ({
  data,
  openModal,
  setOpenModal,
  setCurrData,
  widthDim,
}) => {
  const isMobile = window.innerWidth < 768;

  var settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${widthDim} items-center m:w-[100vw`}>
      <div className="slider-container object-left rounded-lg">
        <Slider {...settings}>
          {data.map((d, key) => (
            <div
              id="card"
              style={{
                transformStyle: "preserve-3d",
              }}
              key={key}
              className="h-[35em] w-[25em] bg-gray-900 hover:bg-black transition duration-500 text-black rounded-3xl border-2"
            >
              <div className="rounded-t-xl">
                <img
                  src={d.img}
                  className="h-[25em] w-[25em] rounded-3xl object-cover"
                />
              </div>
              <div className="p-2 flex flex-col ">
                <p className="p-1 text-xl font-semibold  text-gray-200">
                  {d.title}
                </p>
                <p className="ml-3 text-lg text-gray-200">{d.role}</p>
                <div className="pt-4 pr-4 items-center text-right">
                  <button
                    className="text-white text-lg px-6 py-2"
                    onClick={() => {
                      setCurrData(d);
                      setOpenModal(!openModal);
                    }}
                  >
                    Details...
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export const Modal = ({ data, setOpenModal }) => {
  return (
    <div
      className={`fixed z-[1000] items-start justify-start w-2/3 h-[40em] p-10 pt-[6em] bg-gray-900 border border-white rounded-xl`}
    >
      <div className="container mx-auto">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
          className="absolute top-10 right-10 place-content-end text-xl text-gray-200 border-cyan-100"
        >
          <FaWindowClose />
        </button>
      </div>
      <div className="bg-transparent grid grid-cols-3 items-start justify-start">
        <div className="col-span-1">
          <h1 className="p-1 text-3xl font-semibold  text-gray-200">
            {data.title}
          </h1>
          <h3 className="p-5 ml-3 text-xl text-gray-200">Role: {data.role}</h3>

          <p className="p-[1em] text-gray-400 text-lg bg-gray-900 hover:bg-black transition rounded-lg duration-500 border ">
            <br />
            {data.description}
            <br /> <br /> <br />
          </p>
        </div>

        <div className=" m-auto px-6 col-span-2">{data.element}</div>
      </div>
    </div>
  );
};

export default { SkillsSlider, Modal };
