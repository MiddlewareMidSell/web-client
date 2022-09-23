import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";


const Product = () => {

  
  return (
    <div className="flex w-full min-h-screen">
        <div className="flex flex-row p-5">
          <div className="min-h-min w-[30rem]">
            < img src="./img/donuts_white_plate.jpg" className="object-cover h-[25rem] w-[30rem] shadow-2xl "></img>
          </div>

          <div className="ml-8 text-left">
            <h2 className="text-3xl font-extrabold text-orange-600">Creamy Vanilla Donuts</h2>
            <div className="mt-5 w-[30rem]">
              <h4 className="text-sm font-bold text-gray-500">Description :</h4>
              <h5 className="mt-2 ml-8">A doughnut or donut is a type of food made from leavened fried dough. 
                It is popular in many countries and is prepared in various forms as a sweet snack that can be 
                homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors.</h5>

            </div>

          <div className="flex flex-row justify-between mt-11">
            <div>
              <h5 className="text-sm font-bold text-gray-500">Price of One quantity:</h5>
              <h2 className="mt-2 ml-8 text-xl font-bold text-orange-600"><span>LKR</span> 225.00</h2>
            </div>
            <div>
              <h5 className="text-sm font-bold text-gray-500">Add to cart:</h5>
              <h2 className="mt-2 ml-8 text-xl font-bold text-orange-600">cart
                    
              </h2>
            </div>
            
          </div>
            
          </div>
          

        </div>


    
        {/* <h1 className="mb-5 text-3xl font-bold">Product</h1> */}
    </div>
  );
};

export default Product;