import { createSlice } from "@reduxjs/toolkit";
import Mask1 from '../../assets/Mask1.png';  
import Mask2 from '../../assets/Mask2.png';  
import Mask3 from '../../assets/Mask3.png';  
import Mask4 from '../../assets/Mask4.png';
import Mask5 from '../../assets/Mask5.png';  
import Mask6 from '../../assets/Mask6.png';  
import Mask7 from '../../assets/Mask7.png';  
import Mask8 from '../../assets/Mask8.png';  
import Mask9 from '../../assets/Mask9.png'; 
import Mask10 from '../../assets/foods6.png';  
import Mask11 from '../../assets/foods7.png';  
import Mask12 from '../../assets/foods8.png';  
import Mask13 from '../../assets/foods9.png';  
import Mask14 from '../../assets/foods10.png';  
import Mask15 from '../../assets/foods11.png';  
import Mask16 from '../../assets/foods12.png';  
import Mask17 from '../../assets/foods5.jpg';

const initialState={
    products1:[  
        { id: 1, name: 'Big and Juicy Wagyu Beef Cheeseburger', img: Mask1, like: false ,width:false},  
        { id: 2, name: 'Fresh Lime Roasted Salmon with Ginger Sauce', img: Mask2, like: false ,width:false},  
        { id: 3, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask3, like: false ,width:false},  
        { id: 4, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask4, like: false ,width:true},  
        { id: 5, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask5, like: false ,width:false},  
        { id: 6, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask6, like: false ,width:false},  
        { id: 7, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask7, like: false ,width:false},  
        { id: 8, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask8, like: false ,width:false},  
        { id: 9, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask9, like: false ,width:false}, 
        { id: 10, name: 'Big and Juicy Wagyu Beef Cheeseburger', img: Mask10, like: false ,width:false},  
        { id: 11, name: 'Fresh Lime Roasted Salmon with Ginger Sauce', img: Mask11, like: false ,width:false},  
        { id: 12, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask12, like: false ,width:false},  
        { id: 13, name: 'Barbeque Spicy Sandwiches with Chips ', img: Mask13, like: false ,width:false},  
        { id: 14, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask14, like: false ,width:false},  
        { id: 15, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask15, like: false ,width:false},  
        { id: 16, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask16, like: false ,width:false},  
        { id: 17, name: 'Strawberry Oatmeal Pancake with Honey Syrup', img: Mask17, like: false ,width:false},  
    ]
}

export const CounterSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addLike: (state, action) => {  
            const productId = action.payload; 
            state.products1=state.products1.map(product=>
                product.id == productId ? ({...product,like : !product.like}) : product
            ) 
        },
    }
})
export default CounterSlice.reducer
export const { addLike } = CounterSlice.actions
export const products1 = (store) => store.products.products1.slice(0,9)
export const products2 = (store) => store.products.products1.slice(9)

