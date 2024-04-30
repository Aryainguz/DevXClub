import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingLogo = ({
    logo,
    text,
    className,
}: {
    logo: JSX.Element;
    text: string;
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        let direction = current - (scrollYProgress.getPrevious() as number);
        if (scrollYProgress.get() < 0.05) {
            setVisible(true);
        } else {
            if (direction < 0) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit fixed top-10 left-28 border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 py-2 items-center justify-center space-x-4",
                    className
                )}
            >
                {/* Render Logo */}
                <div className="relative mr-3 dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500">
                    {logo}
                    <p className="text-xl pl-3 font-bold tracking-tight text-gradient bg-gradient-to-r from-purple-500 to-green-300 bg-clip-text text-transparent ">{text}</p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
