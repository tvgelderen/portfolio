import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: {
    y: 100 || 0,
  },
  visible: {
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 3 },
  },
};

type Props = {
  type: string;
  message: string;
};

const Notification = ({ type, message }: Props) => {
  const [image, setImage] = useState<string>("");
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    switch (type) {
      case "success":
        setImage("/img/success.png");
        setColor("border-[#00cd00]");
        break;
      case "error":
        setImage("/img/error.png");
        setColor("border-[#ff0b0b]");
        break;
      default:
        break;
    }
  }, []);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="z-[10] absolute right-6 bottom-4 h-[80px] w-[300px] flex justify-center items-center bg-black/5 dark:bg-black/30 rounded-xl"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <div className="absolute left-4 bottom-0">
          <Image
            src={image}
            alt=""
            width={100}
            height={60}
            className="w-16 opacity-20"
          />
        </div>
        <div
          className={`absolute w-full h-full flex items-center rounded-lg border-l-[10px] ${color}`}
        >
          <h5 className="font-semibold">&nbsp;&nbsp;&nbsp; {message}</h5>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification;
