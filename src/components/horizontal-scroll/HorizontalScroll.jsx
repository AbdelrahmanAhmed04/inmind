import "./horizontal-scroll.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sentence =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem";
const scrollStart = 8;
function HorizontalScroll() {
  const trackRef = useRef();
  const trackSectionRef = useRef();

  useLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: trackSectionRef.current,
      start: "top top", // pin starts when trigger is 20% down
      end:
        "+=" +
        (trackRef.current.scrollWidth -
          window.innerWidth +
          window.innerHeight -
          window.innerHeight * (scrollStart / 10)),
      pin: true,
    });
    let horizontalScroll = gsap.to(trackRef.current, {
      x: () => -(trackRef.current.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: trackSectionRef.current,
        start: `-${scrollStart}0% top`,

        end:
          "+=" +
          (trackRef.current.scrollWidth -
            window.innerWidth +
            window.innerHeight),

        scrub: true,
        pin: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    let letters = gsap.utils.toArray(".letter");

    letters.forEach((letter) => {
      gsap.fromTo(
        letter,
        {
          y: (Math.random() - 0.5) * 500,
          rotation: (Math.random() - 0.5) * 60,
        },
        {
          y: 0,
          rotation: 0,
          ease: "elastic.out(1.2, 1)",
          scrollTrigger: {
            trigger: letter,
            containerAnimation: horizontalScroll,
            start: "left 95%",
            end: "left 10%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      horizontalScroll.scrollTrigger?.kill();
      horizontalScroll.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="scroll-section" ref={trackSectionRef}>
      <div className="scroll-track" ref={trackRef}>
        {sentence.split("").map((char, index) => (
          <p key={index} className="letter">
            {char === " " ? "\u00A0" : char}
          </p>
        ))}
      </div>
      <div className="scroll-subtext">
        <p>
          Lorem ipsum dolor sit amet consectetur. Id laoreet orci odio massa.
          Eget vestibulum curabitur arcu nam tincidunt in mattis. Tortor pretium
          diam interdum purus .
        </p>
      </div>
    </section>
  );
}

export default HorizontalScroll;
