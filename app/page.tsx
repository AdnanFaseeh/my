"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/preloader/preloader";
import { Navigation } from "@/components/navigation";

import { useInView } from "react-intersection-observer";
import { LiquidCursor } from "@/components/cursor/liquid-cursor";

import Landing from '../components/Landing';
import Description from '../components/Description';
import Projects from '../components/Projects';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';



export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <>
      
      <AnimatePresence>
        {showPreloader && (
          <Preloader onEnter={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>
      <Navigation  />
      <LiquidCursor />
        <Landing />
        <Description />
        <Projects />
        <SlidingImages />
        <Contact />
    </>
  );
}