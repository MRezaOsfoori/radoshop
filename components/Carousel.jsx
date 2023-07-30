"use client";
import React, { useState } from "react";
import Image from "next/image";
import Card from "./Card";
import { initalState } from "./data";


function Carousel({imgC,typeC}) {
  console.log(imgC)
  
   const [cards, setCards] = useState(initalState);

  const handleLeftClick = (isLeft) => {
    const prevState = [...cards];
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    // maximize posw
    console.log(
      prevState.map(function (o) {
        return o.pos;
      })
    );
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;

    // update state
    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx;
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;

    // update state
    setCards(prevState);
  };

  return (
    <>
      <div className="w-screen h-[900px] flex  justify-center items-center space-x-5 py-10">
        <div className=" relative w-1/4 h-full flex  p-10 text-white">
          <Image
            src={imgC} 
            alt="image hero"
            className="  w-full "
            width="150"
            height="150"
          />
          <div className="absolute top-[+50%] translate-y-[-50%] left-[+50%] translate-x-[-50%] w-96 h-24  text-7xl  uppercase flex justify-center">
            {" "}
            {typeC}
          </div>

          <button className="absolute top-[+60%] translate-y-[-50%] left-[+50%] translate-x-[-50%] underline underline-offset-1 w-64  h-24 font-bold  text-2xl  uppercase  ">
            {" "}
            Discover More!
          </button>
        </div>

        <div className="w-3/4 h-full  flex flex-col items-center  justify-center  bg-white border">
          <div className=" h-32 w-1/2 flex px-40 justify-between items-center">
            <button className="text-gray-400 text-3xl    active:text-black active:underline ">
              {" "}
              Cloths
            </button>
            <button className="text-gray-400 text-3xl   active:text-black active:underline ">
              Shoes
            </button>
            <button className="text-gray-400 text-3xl   active:text-black active:underline ">
              Pents
            </button>
          </div>

          <div className="flex  justify-center items-center space-x-7">
            <div
              className="text-xl md:text-5xl cursor-pointer"
              onClick={() => handleLeftClick()}
            >
              {"<"}
            </div>
            {cards
              .filter((f) => f.active === true)
              .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
              .map((card, index) => (
                <Card key={index} img={card.img} type={card.type} name={card.name}  price={card.price}/>
              ))}
            <div
              className="text-xl md:text-5xl cursor-pointer"
              onClick={() => handleRightClick()}
            >
              {">"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
