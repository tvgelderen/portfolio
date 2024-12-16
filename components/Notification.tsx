"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const variants = {
    hidden: {
        y: 100,
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
    const getColor = () => {
        switch (type) {
            case "success":
                return "border-[#00cd00]/50";
            case "error":
                return "border-[#ff0b0b]/50";
            default:
                return "";
        }
    }

    return (
        <AnimatePresence initial={false}>
            <motion.div
                className="z-[10] fixed right-4 bottom-4 h-[80px] w-[300px] flex justify-center items-center bg-light-background dark:bg-black/30 rounded-xl shadow-lg"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
            >
                <div
                    className={`absolute w-full h-full flex items-center rounded-lg border-l-[10px] ${getColor()}`}
                >
                    <h5 className="font-semibold">
                        &nbsp;&nbsp;&nbsp; {message}
                    </h5>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Notification;
