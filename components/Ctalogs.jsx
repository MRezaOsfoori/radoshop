"use client";
import React from "react";
import Carousel from "./Carousel";
import { initalCrousel } from "./data";


const Ctalogs = () => {
    return (
    <div>
      {initalCrousel.map((card, index) => {
        return(
          <Carousel key={index} imgC={card.img} typeC={card.title} />

        )
               
        })}
    </div>
  )
}

export default Ctalogs

