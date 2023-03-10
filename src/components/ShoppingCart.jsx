import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Divider from "./Divider";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart() {
  const [subtotal, setSubtotal] = useState(50);
  const [total, setTotal] = useState(subtotal);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col space-y-0 md:space-y-10 my-5 md:my-10">
      <div className="flex items-center justify-center py-8">
        <div className="uppercase text-xs md:text-2xl text-gray-600 font-bold flex items-center space-x-2">
          <span className="text-main">1. Shopping Cart</span>
          <FiChevronRight size={30} color="#CCCCCC" />
          <Link to="/checkout">
            <span className="cursor-pointer">2. Checkout</span>
          </Link>
          <FiChevronRight size={30} color="#CCCCCC" />
          <span>3. Order Complete</span>
        </div>
      </div>
      <div className="shoppingCart w-11/12 md:w-10/12 space-y-20 md:space-y-0 md:space-x-6 flex flex-col md:flex-row mx-auto">
        <div className="shoppingCart__left w-full md:w-8/12 flex flex-col items-start space-y-10">
          <div class="hidden md:flex overflow-x-auto relative w-full">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    PRODUCT
                  </th>
                  <th scope="col" class="py-3 px-6">
                    PRICE
                  </th>
                  <th scope="col" class="py-3 px-6">
                    QUANTITY
                  </th>
                  <th scope="col" class="py-3 px-6">
                    SUBTOTAL
                  </th>
                  <th scope="col" class="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 dark:text-white"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        width={80}
                        src="https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/09/product-3-1-600x675.jpg"
                        alt=""
                      />
                      <p>Fashion Meablen T-shirt</p>
                    </div>
                  </th>
                  <td class="text-black font-semibold py-4 px-6">???50</td>
                  <td class="py-4 px-6">
                    <div className="flex items-center justify-between border rounded-md">
                      <button className="px-3 py-2 border-r">-</button>
                      <span className="px-6 py-2 font-bold">1</span>
                      <button className="px-3 py-2 border-l">+</button>
                    </div>
                  </td>
                  <td class="py-4 px-6 text-black font-bold ">???50</td>
                  <td class="py-4 px-6 ">
                    <div className="flex items-center justify-center border rounded-full w-8 h-8 cursor-pointer transition-all duration-150 ease-linear hover:text-main">
                      <IoCloseSharp size={20} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex md:hidden shoppingCart__mobileView w-full flex-col space-y-6">
            <ShoppingCartItem />
          </div>
          <Link to="/">
            <button className="flex rounded items-center space-x-3 bg-black text-white uppercase px-6 py-2 font-semibold">
              <BsArrowLeft size={22} />
              <span>Continue Shopping</span>
            </button>
          </Link>
        </div>
        <div className="shoppingCart__right h-fit w-full md:w-4/12 border-2 p-5 flex flex-col items-start space-y-8 md:space-y-6">
          <p className="uppercase font-bold text-lg">Cart totals</p>
          <Divider />
          <div className="text-base font-semibold flex items-center justify-between w-full">
            <span>Subtotal</span>
            <span className="font-bold">???{subtotal}</span>
          </div>
          <Divider />
          <div className="w-full flex flex-col items-start space-y-6 py-5">
            <p className="font-bold uppercase text-lg">Coupon Discount</p>
            <input
              className="border-0 border-b w-full text-sm outline-none outline-0"
              type="text"
              placeholder="Enter coupon code here..."
            />
            <button className="text-sm rounded font-semibold uppercase text-black border-2 border-black px-4 py-2">
              Apply Coupon
            </button>
          </div>
          <Divider />
          <div className="w-full flex flex-col items-start text-sm space-y-4">
            <div className="flex items-start space-x-2">
              <span>Subtotal:</span>
              <span className="font-medium">???{subtotal}</span>
            </div>
            <div className="flex items-start space-x-2">
              <span>Discount:</span>
              <span className="font-medium">???0</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-base font-semibold">Total</span>
            <span className="text-2xl font-bold">???{total.toFixed(2)}</span>
          </div>
          <button className="w-full rounded uppercase text-white bg-black py-4 font-bold">
            <Link to="/checkout">Procced to checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
