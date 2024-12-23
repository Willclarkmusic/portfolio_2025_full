import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { motion, MotionCanvas } from "framer-motion-3d";

export const MobileParams = () => {
  const { viewport } = useThree();
  const isTablet = window.innerWidth < 1300 && window.innerWidth > 800;
  const isMobile = window.innerWidth < 800;
  const responsiveRatio = viewport.width / 8;
  const aspectRatio = viewport.width / viewport.height;

  // console.log(window.innerWidth);

  return {
    isTablet: isTablet,
    isMobile: isMobile,
    responsiveRatio: responsiveRatio,
    aspectRatio: aspectRatio,
  };
};

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);

    // console.log(curSection);

    // // My Try
    // if (data.scroll.current > lastScroll.current) {
    //   onSectionChange(lastScroll.current + 1);
    // } else if (data.scroll.current < lastScroll.current) {
    //   onSectionChange(lastScroll.current - 1);
    // }
    // lastScroll.current = data.scroll.current;
    // console.log(lastScroll.current);
    // console.log(data.scroll.current);

    //* Between 0 and 2
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      onSectionChange(2);
    } else if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 2 / (data.pages - 1)
    ) {
      onSectionChange(0);
    }
    lastScroll.current = data.scroll.current;

    // if (data.scroll.current > lastScroll.current) {
    //   onSectionChange(data.scroll.current + 1);
    // } else if (data.scroll.current < lastScroll.current) {
    //   onSectionChange(data.scroll.current - 1);
    // }

    // //* Between 2 and 3
    // if (data.scroll.current > lastScroll.current && curSection === 2) {
    //   onSectionChange(3);
    // } else if (
    //   data.scroll.current < lastScroll.current &&
    //   data.scroll.current < 3 / (data.pages - 1)
    // ) {
    //   onSectionChange(2);
    // }

    //* Between 4 and 5
    // else if (data.scroll.current > lastScroll.current && curSection === 4) {
    //   onSectionChange(5);
    // } else if (
    //   data.scroll.current < lastScroll.current &&
    //   data.scroll.current < 5 / (data.pages - 1)
    // ) {
    //   onSectionChange(4);
    // }
  });

  return null;
};
