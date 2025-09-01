import { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import HeroSection from "./components/hero/Hero.jsx";
import HorizontalScroll from "./components/horizontal-scroll/HorizontalScroll.jsx";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  var wrapperRef = useRef();
  var containerRef = useRef();
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: containerRef.current,
      smooth: 0.4,

      effects: true,
    });

    return () => smoother.kill();
  }, []);
  return (
    <>
      <div className="smooth-wrapper" ref={wrapperRef}>
        <div className="smooth-container" ref={containerRef}>
          <Navbar />
          <HeroSection />
          <HorizontalScroll />
        </div>
      </div>
    </>
  );
}

export default App;
