import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header, MainContainer, Register, Login, Product, Payment, CreateIteme, ProductList, OrdersList} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";


const App = () => {
  const [user,setLoginUser] = useStateValue({});


  const [{ foodItems }, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="flex flex-col w-screen h-auto bg-primary">
        <Header /></div>

        <main className="w-full px-4 py-4 mt-14 md:mt-20 md:px-16">
          <Routes>
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login setUser={setLoginUser} />} />
            <Route path="/*" element={<MainContainer />} />

            <Route path="product" element={<Product />} />
            <Route path="payment" element={<Payment />} />

            <Route path="/createItem" element={<CreateIteme />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/ordersList" element={<OrdersList />} />
            
          </Routes>
        </main>
      
    </AnimatePresence>
  );
};

export default App;
