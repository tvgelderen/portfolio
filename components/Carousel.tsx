import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "./hooks/useWindowWidth";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "next/image";

type Props = {
  images: string[];
};

const Carousel = ({ images }: Props) => {
  const [current, setCurrent] = useState<number>(0);
  const [previous, setPrevious] = useState<number>(0);
  const [moveLeft, setMoveLeft] = useState<boolean>(false);

  let { width } = useWindowDimensions();

  const handleNext = () => {
    setPrevious(current);
    setCurrent(current + 1 === images.length ? 0 : current + 1);
    setMoveLeft(true);
  };

  const handlePrevious = () => {
    setPrevious(current);
    setCurrent(current - 1 < 0 ? (images.length || 1) - 1 : current - 1);
    setMoveLeft(false);
  };

  useEffect(() => {
    if (width === null || width > 900) width = 900;
  }, [width]);

  const imageVariants = {
    hidden: (width: number) => {
      return {
        x: moveLeft ? width : -width,
        opacity: 0.25,
      };
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: (width: number) => {
      return {
        x: moveLeft ? -width : width,
        opacity: 0.25,
      };
    },
  };

  return (
    <AnimatePresence initial={false}>
      <div className="relative max-w-[900px] flex items-center m-auto">
        {images.map((image, index) => {
          if (index === current && width !== null)
            return (
              <motion.div key={index}>
                <motion.div
                  className="absolute"
                  custom={width}
                  initial="visible"
                  animate="exit"
                  variants={imageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={images[previous]}
                    alt=""
                    width={1920}
                    height={1080}
                    className="rounded-lg"
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={width}
                  variants={imageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={image}
                    alt=""
                    width={1920}
                    height={1080}
                    className="rounded-lg"
                  />
                </motion.div>
              </motion.div>
            );
        })}
        {images.length > 1 && (
          <>
            <div
              className="z-[10] absolute left-1 p-1 rounded-full bg-black/30 cursor-pointer"
              onClick={handlePrevious}
            >
              <BsChevronCompactLeft className="w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12" />
            </div>
            <div
              className="z-[10] absolute right-1 p-1 rounded-full bg-black/30 cursor-pointer"
              onClick={handleNext}
            >
              <BsChevronCompactRight className="w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12" />
            </div>
          </>
        )}
      </div>
    </AnimatePresence>
  );
};

export default Carousel;
