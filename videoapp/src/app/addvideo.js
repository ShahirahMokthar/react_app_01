import React, { useState } from 'react';

function AddVideo() {
    
    let [ID, updateID]= useState("")

    let videourl = `https://www.youtube.com/embed/${ID}`

    function captureID(event){
        console.log(event)
        console.log(event.target.value)
        updateID(event.target.value)
    }

    return ( 
        <div>
            <h2>Add new video: {ID}</h2>

            Video ID: 
            <input type="text" onChange={captureID}/>
            <br />
            <button>Add</button>
            <br /><br />
            <iframe width="350" src={videourl} 
                title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>


        </div>
     );
}

export default AddVideo;