import { addLike } from "../redux/features/CounterSlice";
import Card from "./Card";


function Product({products,dispatch,bg,coll}) {  


    const clickHandler=(id)=>{ 
        dispatch(addLike(id))  
        console.log(id);
        
    }

    
    return (  
        <>  
            <Card bg={bg} data={products} clickHandler={clickHandler} coll={coll} /> 
        </>  
    );  
}  

export default Product;