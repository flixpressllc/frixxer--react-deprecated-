import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import { useVideoFeed } from './utils/dev-utils';
import Ticker from './components/Ticker';

export default () => {
  const [videos] = useVideoFeed();

  return (
    <div className="h-screen w-screen bg-blue-darkest">
      <VideoPlayer videos={videos} />
      <Ticker
        items={['Test One', 'Test Two']}
        className="bg-black text-yellow text-5xl"
      />
    </div>
  );
};
