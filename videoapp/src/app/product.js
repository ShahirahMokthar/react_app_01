import React from 'react';

function Product() {

    let quantity = 8

    return (
              
        
        <div style={{
            border: "2px solid pink",
            padding:"5px",
            margin: "10px",
        }}>
            <h3>New Product</h3>
            <img src="https://picsum.photos/id/67/200/200" alt=""></img>
            <br /><br />
            Quantity: {quantity}

        </div>
     );
}

export default Product;

