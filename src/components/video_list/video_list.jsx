import React from 'react';
import VideoItem from '../video_item/video_item'

const VideoList = (props) => (
            <ul>
                {props.videos.map( (video, idx) => <VideoItem  key={idx} video={video}/>)}
            </ul>
    );

export default VideoList;