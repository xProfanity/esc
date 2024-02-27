"use client"

import { base } from '@/context/store';
import React from 'react';
import { useSnapshot } from 'valtio';

import { motion } from "framer-motion";

export default function BodyWrapper({children}: Readonly<{
    children: React.ReactNode;
  }>) {

    const snap = useSnapshot(base)

  return (
    <motion.main animate={{backgroundColor: snap.darkmode ? '#011222' : '#fff'}} className={`overflow-hidden relative`}>
        {children}
    </motion.main>
  )
}
