import { useState } from "react";
import Product from "./Product";
import Mask1 from '../assets/foods6.png';  
import Mask2 from '../assets/foods7.png';  
import Mask3 from '../assets/foods8.png';  
import Mask4 from '../assets/foods9.png';  
import Mask5 from '../assets/foods10.png';  
import Mask6 from '../assets/foods11.png';  
import Mask7 from '../assets/foods12.png';  
import Mask8 from '../assets/foods5.jpg';  
export default function Foods() {
    
    const [products , setProducts] =useState([  
        { id: 1, name: 'Big and Juicy Wagyu Beef Cheeseburger', img: Mask1, like: false ,width:false},  
        { id: 2, name: 'Fresh Lime Roasted Salmon with Ginger Sauce', img: Mask2, like: false ,width:false},  
        { id: 3, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask3, like: false ,width:false},  
        { id: 4, name: 'Barbeque Spicy Sandwiches with Chips ', img: Mask4, like: false ,width:false},  
        { id: 5, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask5, like: false ,width:false},  
        { id: 6, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask6, like: false ,width:false},  
        { id: 7, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask7, like: false ,width:false},  
        { id: 8, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask8, like: false ,width:false},  
    ])
    return (
        <div className="size-full mt-[9.37rem] px-16">
            <div className="max-w-[44.22rerm] flex flex-col justify-center items-center">
                <h2 className="font-semibold text-5xl text-black pb-4">Simple and tasty recipes</h2>
                <span className="font-normal text-center">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </span>
            </div>
            <div>
                <Product setProducts={setProducts} products={products}  />
            </div>
        </div>
    )
}
