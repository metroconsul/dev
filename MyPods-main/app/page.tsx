"use client"

import { useEffect, useState, useRef, useCallback, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Montserrat } from "next/font/google"
import { Navbar } from "@/components/navbar"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const isInitialMount = useRef(true)
  const router = useRouter()

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      setIsLoaded(true)
    }
  }, [])

  const handleNavigation = useCallback(
    (path: string) => {
      router.push(path)
    },
    [router],
  )

  const navItems = useMemo(
    () => [
      {
        title: "SHOP",
        subtitle: "ALL THE PODS YOU WANT",
        path: "/shop",
        position: "top-[20%] left-[10%] text-left",
        delay: 0.3,
      },
      {
        title: "SAFETY",
        subtitle: "IMPORTANT INFORMATION",
        path: "/safety",
        position: "bottom-[20%] left-[10%] text-left",
        delay: 0.6,
      },
      {
        title: "FAQ",
        subtitle: "ANSWERING YOUR QUESTIONS",
        path: "/faq",
        position: "top-[20%] right-[10%] text-right",
        delay: 0.9,
      },
      {
        title: "CONTACT",
        subtitle: "SUGGESTIONS AND FEEDBACK",
        path: "/contact",
        position: "bottom-[20%] right-[10%] text-right",
        delay: 1.2,
      },
    ],
    [],
  )

  return (
    <>
      <Navbar />
      <div
        className={`relative flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white overflow-hidden ${montserrat.className}`}
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.3)_0%,rgba(0,0,0,0)_70%)]"></div>

        {/* Navigation items */}
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.position} cursor-pointer z-20`}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: item.delay,
              ease: "easeOut",
            }}
            onClick={() => handleNavigation(item.path)}
          >
            <div className="group relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider group-hover:text-yellow-300 transition-colors duration-300">
                {item.title}
              </h2>
              <div className="h-0.5 w-0 bg-yellow-300 group-hover:w-full transition-all duration-300"></div>
              <p className="text-sm sm:text-base md:text-xl mt-2 text-gray-400 font-light tracking-wide">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Center logo */}
        <div className="relative z-10 flex items-center justify-center">
          <motion.div
            className="relative z-20 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 15 }}
          >
            <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] relative">
              <Image
                src="/images/mypods-logo.png"
                alt="MYPODS Logo"
                fill
                sizes="(max-width: 640px) 18rem, (max-width: 768px) 24rem, 32rem"
                style={{ objectFit: "contain" }}
                priority
                className="filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('/images/grid.png')] bg-repeat opacity-5 pointer-events-none"></div>
      </div>
    </>
  )
}
