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
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
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
      </div>
    </AnimatePresence>
  );
};

export default App;
