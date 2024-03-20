"use client"

import { base } from "@/context/store";
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";

interface Props {
    children: React.ReactNode;
    className?: string;
    size?: string;
    outline?: true | boolean;
    secondary?: true | boolean;
}

export default function Button({children, className, size, outline, secondary}: Props) {
  const {darkmode} = useSnapshot(base)
  return (
    <motion.button animate={{color: darkmode ? '#e3e3e7' : '#011222'}} className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border ${outline ? 'bg-transparent border-primary' : 'border-white bg-[linear-gradient(110deg,#32cd32,45%,#61cf61,55%,#32cd32)] bg-[length:200%_100%]'} px-6 font-medium font-mont transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}>
        {children}
    </motion.button>
  )
}
