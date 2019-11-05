import React from 'react';

import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
  const renderList = videos.map((video) => {
    console.log(video);
    return <VideoItem key={video.etag} video={video} />
  })

  return (
    <div>{renderList}</div>
  );
}

export default VideoList;