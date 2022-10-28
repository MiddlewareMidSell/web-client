import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      
      {/* <h1 className="mb-5 text-3xl font-bold">ProductList</h1> */}
      <div className="absolute top-0 left-0 flex flex-wrap items-center justify-center w-full h-full gap-4 py-4 lg:px-32">
          
              <div
                
                className="flex flex-col items-center justify-center p-4 lg:w-[18rem] bg-cardOverlay backdrop-blur-md rounded-3xl drop-shadow-lg"
              >
                <img
                  src="./img/cupCake.jfif"
                  className="w-20 -mt-10 lg:w-40 lg:-mt-20 "
                  alt="I1"
                />
                <p className="mt-2 text-base font-semibold lg:text-xl text-textColor lg:mt-4">
                  Cake Donuts
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">A doughnut or donut is a type of food made from leavened fried dough. 
                It is popular in many countries and is prepared in various forms as a sweet snack.</p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>54
                </p>
                
                <div className="flex flex-row ">
                    <Link to={"/signin"} className="mr-10 text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
                    Edit
                  </Link>
                  <Link to={"/signup"} className="text-lg text-red-600 transition-all duration-100 ease-in-out cursor-pointer hover:text-red-800">
                    Delete
                  </Link>
                </div>
                
              
              </div>

              <div
                
                className="flex flex-col items-center justify-center p-4 lg:w-[18rem] bg-cardOverlay backdrop-blur-md rounded-3xl drop-shadow-lg"
              >
                <img
                  src="./img/donuts_white_plate.jpg"
                  className="w-20 -mt-10 lg:w-40 lg:-mt-20 "
                  alt="I1"
                />
                <p className="mt-2 text-base font-semibold lg:text-xl text-textColor lg:mt-4">
                  Cake Donuts
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">A doughnut or donut is a type of food made from leavened fried dough. 
                It is popular in many countries and is prepared in various forms as a sweet snack that can be 
                homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors.</p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>255
                </p>
                
                <div className="flex flex-row ">
                    <Link to={"/signin"} className="mr-10 text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
                    Edit
                  </Link>
                  <Link to={"/signup"} className="text-lg text-red-600 transition-all duration-100 ease-in-out cursor-pointer hover:text-red-800">
                    Delete
                  </Link>
                </div>
                
              
              </div>

              <div
                
                className="flex flex-col items-center justify-center p-4 lg:w-[18rem] bg-cardOverlay backdrop-blur-md rounded-3xl drop-shadow-lg"
              >
                <img
                  src="./img/Orange_cupcakes.jpg"
                  className="w-20 -mt-10 lg:w-40 lg:-mt-20 "
                  alt="I1"
                />
                <p className="mt-2 text-base font-semibold lg:text-xl text-textColor lg:mt-4">
                  Cake Donuts
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                It is popular in many countries and is prepared in various forms as a sweet snack that can be 
                homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors.</p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>20
                </p>
                
                <div className="flex flex-row ">
                    <Link to={"/signin"} className="mr-10 text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
                    Edit
                  </Link>
                  <Link to={"/signup"} className="text-lg text-red-600 transition-all duration-100 ease-in-out cursor-pointer hover:text-red-800">
                    Delete
                  </Link>
                </div>
                
              
              </div>

              <div
                
                className="flex flex-col items-center justify-center p-4 lg:w-[18rem] bg-cardOverlay backdrop-blur-md rounded-3xl drop-shadow-lg"
              >
                <img
                  src="./img/wedding_cake.jpg"
                  className="w-20 -mt-10 lg:w-40 lg:-mt-20 "
                  alt="I1"
                />
                <p className="mt-2 text-base font-semibold lg:text-xl text-textColor lg:mt-4">
                  Cake Donuts
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">A doughnut or donut is a type of food made from leavened fried dough. 
                It is popular in many countries and is prepared in various forms as a sweet snack that can be 
                homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors.</p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>450
                </p>
                
                <div className="flex flex-row ">
                    <Link to={"/signin"} className="mr-10 text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
                    Edit
                  </Link>
                  <Link to={"/signup"} className="text-lg text-red-600 transition-all duration-100 ease-in-out cursor-pointer hover:text-red-800">
                    Delete
                  </Link>
                </div>
                
              
              </div>
        </div>
    </div>
  );
};

export default ProductList;