import React from 'react';
import Logo from '../app/logo';
import VideoContainer from '../app/videocontainer';

function MyRootComponent() {
    return ( 
        <div>
            <h1>Root Component</h1>
            My Logo
            <br />
            <Logo></Logo>
            <VideoContainer></VideoContainer>
        </div>
     );
}

export default MyRootComponent;