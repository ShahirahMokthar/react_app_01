import React, { useState } from 'react';

function ActionComponent(props) {

    // declare a state variable -> dislike
    let[dislike, updatedislike] = useState(parseInt(props.passdislikes))
    let[likes, updateLike] = useState(parseInt(props.passlikes))

    function addLike(){
        console.log(likes)
        console.log(typeof likes)
        // only iAmTheAuthority can change the valuw
        // of state variable -> dislike
        updateLike(likes + 1)
    }

    function addDisLike(){
        console.log(dislike)
        console.log(typeof likes)
        updatedislike(dislike + 1);
    }

    return ( 
        <div>
            Likes: {likes}
            <button onClick={addLike}>+</button> 
            <br /> 
            Dislike: {dislike}
            <button onClick={addDisLike}>+</button>         
        </div>
     );
}

export default ActionComponent;