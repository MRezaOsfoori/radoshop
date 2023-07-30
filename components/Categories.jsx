"use client";
import React from "react";
import mens from "../public/mens.jpg";
import womens from "../public/womens.jpg";
import kids from "../public/kids.jpg";
import CategoItem from"../components/CategoItem"

const Categories = () => {
  
  return (
    <div className=" w-screen  ">
      <div className=" grid grid-cols-3  h-96 space-x-10 mx-40 my-20 ">
        <CategoItem img={mens} item={"men's"}/>
        <CategoItem img={kids} item={"kid's"}/>
        <CategoItem img={womens} item={"women's"}/>
      </div>
    </div>
  );
};

export default Categories;
