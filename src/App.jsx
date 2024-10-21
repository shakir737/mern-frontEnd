import { useState, lazy, Suspense } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
const Home = lazy(() => import("./pages/home/Home"));

const Main = lazy(() => import("./layout/Main"));
const Menu = lazy(() => import("./pages/menuPage/Menu"));
const CartPage = lazy(() => import("./pages/menuPage/CartPage"));
const Payment = lazy(() => import("./pages/menuPage/Payment"));
const UserProfile = lazy(() => import("./pages/dashboard/UserProfile"));
const Signup = lazy(() => import("./components/Signup"));

const Orders = lazy(() => import("./pages/menuPage/OrderPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Home />} />

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart-page" element={<CartPage />} />
              <Route path="/checkOut" element={<Payment />} />
              <Route path="/update-profile" element={<UserProfile />} />
              {/* <Route path="/sealer" element={<Dashboard />} /> */}
              <Route path="/orders" element={<Orders />} />
              {/* <Route path="/sealer/products" element={<Products />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
