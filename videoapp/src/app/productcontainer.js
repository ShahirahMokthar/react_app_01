import React from 'react';
import Product from './product';

function ProductContainer() {
    return ( 
        <div style={{
            border: "3px solid pink",
            padding: "10px",
            display:"flex",
            flexDirection:"column",
            marginTop:"10px"
        }}>
            <div style={{
                padding:"10px"
            }}>
            List of Products
            </div> 
            <div>
            <Product></Product>
            </div>
        </div>

        
     )
}

export default ProductContainer;