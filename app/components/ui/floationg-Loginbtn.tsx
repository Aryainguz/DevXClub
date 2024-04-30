import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HoverBorderGradient } from "./hover-border-gradient";
import { HoverBorderGradientDemo } from "../HoverBtnGradient";

export const Floatingbtn = ({
    text,
    className,
}: {
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
                    "flex max-w-fit fixed top-10 right-28  border-transparent dark:border-white/[0.2] rounded-full dark:bg-transparent bg-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 py-2 items-center justify-center space-x-4",
                    className
                )}
            >
                {/* Render Button */}
                <HoverBorderGradientDemo />
            </motion.div>
        </AnimatePresence>
    );
};
