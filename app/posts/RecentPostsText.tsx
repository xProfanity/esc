"use client"
import { base } from '@/context/store'
import { motion } from 'framer-motion'
import { useSnapshot } from 'valtio'

export default function RecentPostsText() {
    const {darkmode} = useSnapshot(base)
  return (
    <motion.p animate={{color: darkmode ? "#e3e3e7" : "#011222"}} className="text-2xl font-bold font-mont mx-auto md:mx-0">Recent blog Posts</motion.p>
  )
}
