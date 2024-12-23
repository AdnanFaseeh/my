'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import { TrailEffect } from '../TrailEffect';

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      {/* <Image 
        src="/images/background.jpg"
        fill={true}
        alt="background"
      /> */}
      <TrailEffect />
      <div className='absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>
        <h1 className='gradient-text'>Welcome to Jazzy@ Portfolio</h1>
      </div>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText} className='gradient-text'>Freelance Jazzy@ -</p>
          <p ref={secondText} className='gradient-text'>Freelance Jazzy@ -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
       
        <p className=' gradient-text'>Freelance</p>
        <p className=' gradient-text'>2D Animation Expert</p>
      </div>
      <div className='flex flex-col gap-2 gradient-text absolute right-[70%] top-[48%]'>
      <h5 className='text-[24px] font-[300]'>Freelance</h5>
      <h5 className='text-[24px] font-[300]'>Ms Office Expert</h5>
      </div>
         
        
    </motion.main>
  )
}
