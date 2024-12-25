import { products1 } from "../redux/features/CounterSlice"
import Product from "./Product"
import { useDispatch, useSelector } from 'react-redux'
function Simple({bg}) {
    const selector=useSelector(products1)
    const dispatch=useDispatch()
    return (
        <div className="size-full mt-[9.37rem] px-16">
            <div className="max-w-[44.22rerm] flex flex-col justify-center items-center">
                <h2 className="font-semibold text-5xl text-black pb-4">Simple and tasty recipes</h2>
                <span className="text-center">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </span>
            </div>
            <div>
                <Product dispatch={dispatch} products={selector} bg={bg} coll={[3,2]}  />
            </div>
        </div>
    )
}

export default Simple