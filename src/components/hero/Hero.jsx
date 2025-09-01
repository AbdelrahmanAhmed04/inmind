import { useState, useEffect } from "react";
import "./hero.css";
import heroGif from "../../assets/hero-gif.gif";

function HeroSection() {
  var dataLag = "00";
  return (
    <div className="hero-section">
      <div className="hero-title" data-lag={dataLag}>
        <p>We</p>
        <p>don't</p>
      </div>
      <div className="hero-title" data-lag={dataLag}>
        <p>create</p>
        <p>brands.</p>
      </div>
      <div className="hero-title" data-lag={dataLag}>
        <p>we</p>
        <p>uncover</p>
      </div>
      <div className="hero-title" data-lag={dataLag}>
        <p>them.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem beatae
          neque officiis dolor voluptas! Reiciendis maiores delectus neque aut
          ipsa est obcaecati corrupti odit excepturi explicabo harum! Atque,
        </p>
      </div>

      <div className="image-container">
        <img src={heroGif} alt="Some of our projects" />
      </div>
    </div>
    // <div className="hero-section">
    //   <div className="hero-title">
    //     <p>We</p>
    //     <p>don't</p>
    //   </div>
    //   <div className="hero-title">
    //     <p>create</p>
    //     <p>brands.</p>
    //   </div>
    //   <div className="hero-title">
    //     <p>we</p>
    //     <p>uncover</p>
    //   </div>
    //   <div className="hero-title">
    //     <p>them.</p>
    //     <p className="description">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem beatae
    //       neque officiis dolor voluptas! Reiciendis maiores delectus neque aut
    //       ipsa est obcaecati corrupti odit excepturi explicabo harum! Atque,
    //     </p>
    //   </div>
    //   <div className="image-container">
    //     <img src={heroGif} alt="Some of our projects" />
    //   </div>
    // </div>
  );
}

export default HeroSection;
