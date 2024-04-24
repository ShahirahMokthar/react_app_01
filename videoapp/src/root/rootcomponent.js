import React from 'react';
import Logo from '../app/logo';
import VideoContainer from '../app/videocontainer';
import ProductContainer from '../app/productcontainer';
import AddVideo from '../app/addvideo';

function MyRootComponent() {
    return ( 
        <div>
            <div style={
                    {color:"red",
                    textAlign:"center",
                    fontFamily:"sans-serif"
                    }}>
              <Logo></Logo>  
            </div>
            
            <hr color= "violet"/>

            <br /><br />
            
            <VideoContainer></VideoContainer>
            <ProductContainer></ProductContainer>
            <AddVideo></AddVideo>

        </div>
     );
}

export default MyRootComponent;