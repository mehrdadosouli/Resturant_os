import Card from "./Card";

function Product({products,setProducts,bg,coll}) {  


    const clickHandler=(id)=>{ 
        setProducts(prevProduct=>
            prevProduct.map(elem=>
                elem.id == id ?
                { ...elem , like : !elem.like } :
                elem
            )
        )  
    }

    
    return (  
        <>  
            <Card bg={bg} data={products} clickHandler={clickHandler} coll={coll} /> 
        </>  
    );  
}  

export default Product;