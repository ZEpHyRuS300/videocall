import React, { useEffect } from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng';

const APP_ID='71d7a2563ce24170810de88973ce02f4';
const TOKEN='007eJxTYKi9vHByq2pTp7+e6yuRzLgzbPP+Srruv5q9o2PJS4ecU3sUGMwNU8wTjUzNjJNTjUwMzQ0sDA1SUi0sLM2BAgZGaSYqmenJDYGMDFv8GxgYoRDEZ2dIzkjMy0vNYWAAAL0nIF8=';
const CHANNEL='channel';

const client= AgoraRTC.createClient({
    mode:'rtc',
    codec:'vp8'
});
export const VideoRoom = () => {
    const handleUserJoined= () => {

    }
    const handleUserLeft= () => {

    }

    useEffect(()=> {
        client.on('user-published',handleUserJoined);
        client.on('user-left',handleUserLeft);

        client.join(APP_ID,CHANNEL,TOKEN,null).then((uid) => {
            return AgoraRTC.createMicrophoneAndCameraTracks()).then(tracks
                =>{
                    
                })

        })
    },[])
    return <div>VideoRoom</div>;
};