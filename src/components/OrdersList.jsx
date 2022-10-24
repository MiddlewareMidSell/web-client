import React, { useState } from "react";


const OrderList = () => {
  
  return (
    <div className="flex items-center  w-full min-h-screen">
      
        <div className="flex justify-center">
            <div className="p-8 h-auto w-[35rem] bg-Stone-400 border-solid border-2 outline-stone-500 rounded-md">
            <div className="flex flex-col ">
                <div className="flex flex-row justify-between w-[30rem] mb-3">
                    <h5 className="text-2xl font-bold text-red-400">Order ID : 01</h5>
                    <h5 className="text-xl text-stone-900">Gihan Samaraweera</h5>   
                </div>

                <div className="flex flex-row justify-between w-[30rem]">
                    <h6 className="text-sm text-Stone-900">Deliver Date : 2022/09/25</h6>
                    <h6 className="text-sm text-Stone-900 text-bold">Mobile: 0711965548</h6>   
                </div>
                <div className="h-0.5 mt-3 bg-slate-400 " ></div>

            </div>

            <div>
                <div className="flex flex-row justify-between mt-5">
                    <div>
                        < img src="./img/chocolate_cake_with_sprinkles.jpg" height={150} width={100}></img>
                    </div>
                    <div className="flex flex-col justify-around text-right">
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">Chocolat Cake</span> : Item</h5>
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">01</span> : Quantity</h5> 
                    </div>
                </div>
                <div className="h-0.5 mt-3 bg-slate-400 " ></div>
            </div>

            <div>
                <div className="flex flex-row justify-between mt-5">
                    <div>
                        < img src="./img/Orange_cupcakes.jpg" height={150} width={100}></img>
                    </div>
                    <div className="flex flex-col justify-around text-right">
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">Oragen Cup Cake</span> : Item</h5>
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">05</span> : Quantity</h5> 
                    </div>
                </div>
                <div className="h-0.5 mt-3 bg-slate-400 " ></div>
            </div>

            <div>
                <div className="flex flex-row justify-between mt-5">
                    <div>
                        < img src="./img/donuts_white_plate.jpg" height={150} width={100}></img>
                    </div>
                    <div className="flex flex-col justify-around text-right">
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">Sweets Creamy Donuts</span> : Item</h5>
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">10</span> : Quantity</h5> 
                    </div>
                </div>
                <div className="h-0.5 mt-3 bg-slate-400 " ></div>
            </div>

            <div className="justify-end mt-8 text-right">
                <button type="button" class="inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">FINISH</button>
            </div>

        </div>

        </div>

        <div className="flex justify-center">
            <div className="p-8 h-auto w-[35rem] bg-Stone-400 border-solid border-2 outline-stone-500 rounded-md">
            <div className="flex flex-col ">
                <div className="flex flex-row justify-between w-[30rem] mb-3">
                    <h5 className="text-2xl font-bold text-red-400">Order ID : 01</h5>
                    <h5 className="text-xl text-stone-900">Gihan Samaraweera</h5>   
                </div>

                <div className="flex flex-row justify-between w-[30rem]">
                    <h6 className="text-sm text-Stone-900">Deliver Date : 2022/09/25</h6>
                    <h6 className="text-sm text-Stone-900 text-bold">Mobile: 0711965548</h6>   
                </div>
                <div className="h-0.5 mt-3 bg-slate-400 " ></div>

            </div>

            <div>
                <div className="flex flex-row justify-between mt-5">
                    <div>
                        < img src="./img/chocolate_cake_with_sprinkles.jpg" height={150} width={100}></img>
                    </div>
                    <div className="flex flex-col justify-around text-right">
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">Chocolat Cake</span> : Item</h5>
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">01</span> : Quantity</h5> 
                    </div>
                </div>
                <div className="h-0.5 mt-3 bg-slate-400 " ></div>
            </div>

            <div>
                <div className="flex flex-row justify-between mt-5">
                    <div>
                        < img src="./img/Orange_cupcakes.jpg" height={150} width={100}></img>
                    </div>
                    <div className="flex flex-col justify-around text-right">
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">Oragen Cup Cake</span> : Item</h5>
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">05</span> : Quantity</h5> 
                    </div>
                </div>
                <div className="h-0.5 mt-3 bg-slate-400 " ></div>
            </div>

            <div>
                <div className="flex flex-row justify-between mt-5">
                    <div>
                        < img src="./img/donuts_white_plate.jpg" height={150} width={100}></img>
                    </div>
                    <div className="flex flex-col justify-around text-right">
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">Sweets Creamy Donuts</span> : Item</h5>
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">10</span> : Quantity</h5> 
                    </div>
                </div>
                <div className="h-0.5 mt-3 bg-slate-400 " ></div>
            </div>

            <div className="justify-end mt-8 text-right">
                <button type="button" class="inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">FINISH</button>
            </div>

        </div>

        </div>

        <div className="flex justify-center">
            <div className="p-8 h-auto w-[35rem] bg-Stone-400 border-solid border-2 outline-stone-500 rounded-md">
            <div className="flex flex-col ">
                <div className="flex flex-row justify-between w-[30rem] mb-3">
                    <h5 className="text-2xl font-bold text-red-400">Order ID : 01</h5>
                    <h5 className="text-xl text-stone-900">Gihan Samaraweera</h5>   
                </div>

                <div className="flex flex-row justify-between w-[30rem]">
                    <h6 className="text-sm text-Stone-900">Deliver Date : 2022/09/25</h6>
                    <h6 className="text-sm text-Stone-900 text-bold">Mobile: 0711965548</h6>   
                </div>
                <div className="h-0.5 mt-3 bg-slate-400 " ></div>

            </div>

            <div>
                <div className="flex flex-row justify-between mt-5">
                    <div>
                        < img src="./img/chocolate_cake_with_sprinkles.jpg" height={150} width={100}></img>
                    </div>
                    <div className="flex flex-col justify-around text-right">
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">Chocolat Cake</span> : Item</h5>
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">01</span> : Quantity</h5> 
                    </div>
                </div>
                <div className="h-0.5 mt-3 bg-slate-400 " ></div>
            </div>

            <div>
                <div className="flex flex-row justify-between mt-5">
                    <div>
                        < img src="./img/Orange_cupcakes.jpg" height={150} width={100}></img>
                    </div>
                    <div className="flex flex-col justify-around text-right">
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">Oragen Cup Cake</span> : Item</h5>
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">05</span> : Quantity</h5> 
                    </div>
                </div>
                <div className="h-0.5 mt-3 bg-slate-400 " ></div>
            </div>

            <div>
                <div className="flex flex-row justify-between mt-5">
                    <div>
                        < img src="./img/donuts_white_plate.jpg" height={150} width={100}></img>
                    </div>
                    <div className="flex flex-col justify-around text-right">
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">Sweets Creamy Donuts</span> : Item</h5>
                        <h5 className="text-base text-stone-500"><span className="text-stone-900">10</span> : Quantity</h5> 
                    </div>
                </div>
                <div className="h-0.5 mt-3 bg-slate-400 " ></div>
            </div>

            <div className="justify-end mt-8 text-right">
                <button type="button" class="inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">FINISH</button>
            </div>

        </div>

        </div>
        
        
    </div>
  );
};

export default OrderList;
