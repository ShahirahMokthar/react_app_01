import React from 'react';
import Video from './video';


function VideoContainer() {
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
                List of videos:
            </div>
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                <Video myid = "Hfx1X9WSGYQ" likes="40" dislike="10"></Video>
                <Video myid = "uCpYUrJVZUAuCpYUrJVZUA" likes="8"  dislike="10"></Video> 
                <Video myid = "IM-r9lEZciM" likes="23" dislike="9"></Video>
                <Video myid = "IUQlYbKwiWg" likes="11" dislike="6"></Video>
                <Video myid = "MvcDM2nLdzI" likes="14" dislike="4"></Video>
                <Video myid = "efrR9eP2hUo" likes="8" dislike="5"></Video>
                <Video myid = "3G293is403I" likes="7" dislike="7"></Video>
                <Video myid = "Yh4CrPHVBdE" likes="32" dislike="9"></Video>
                <Video myid = "yMqldbY2AAg" likes="22" dislike="3"></Video>
                <Video myid = "t0grczCICMk" likes="87" dislike="2"></Video>
                <Video myid = "i5acg3Hvu6g" likes="14" dislike="1"></Video>
                <Video myid = "nNrgRVIzeHg" likes="13" dislike="7"></Video>
            </div>
            
 
        </div>
     );
}

export default VideoContainer;