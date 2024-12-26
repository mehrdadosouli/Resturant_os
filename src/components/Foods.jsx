import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { products2 } from "../redux/features/CounterSlice";
  
export default function Foods() {
    const selector=useSelector(products2)    
    const dispatch=useDispatch()

    return (
        <div className="size-full mt-[9.37rem] px-16">
            <div className="max-w-[44.22rerm] flex flex-col justify-center items-center">
                <h2 className="font-semibold tracking-widest text-5xl text-black pb-4"  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Simple and tasty recipes</h2>
                <span className="font-normal text-center">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </span>
            </div>
            <div>
                <Product dispatch={dispatch} products={selector}  />
            </div>
        </div>
    )
}
