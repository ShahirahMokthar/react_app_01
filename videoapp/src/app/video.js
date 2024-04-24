import React from 'react';
import ActionComponent from './action';

function Video(props) {

    let name = "Shahirah"
    let score = 8
    let likes = 40
    let videourl = `https://www.youtube.com/embed/${props.myid}?`

    return ( 
        <div style={{
            border: "2px solid pink",
            padding: "5px",
            margin: "10px"
        }}>
            <h3>My video {props.myid}</h3>
            <iframe width="350" src={videourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <br />
            {name} age is {score}
            <br />
            Likes: {props.likes}
            <ActionComponent passlikes={props.likes} passdislikes={props.dislike}></ActionComponent>
        </div>
     );
}

export default Video;