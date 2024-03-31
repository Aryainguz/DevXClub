'use client'
import React from "react";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";

export const Button = ({ text }: { text: string }) => {
    return (
        <a
            href="https://www.producthunt.com/posts/awesome-framer-motion-components"
            target="__blank"
            className="bg-[#3DBAF7] no-underline group mb-8 cursor-pointer relative  shadow-lg shadow-[#3DBAF7] rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
        >
            <span className="absolute  inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-3 px-6 ring-1 ring-white/10 ">
                <span className="text-base flex items-center justify-center gap-2 font-light"><BsStars color="#3DBAF7" />{text}</span>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1 }}
                    ></motion.path>
                </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </a>
    );
};



