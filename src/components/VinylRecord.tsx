import { useAtom } from 'jotai';
import { isPlayingAtom, currentCoverImageAtom } from '../State.jsx';

import './VinylRecord.css'
import vinyl from '../assets/images/vinyl_red.png';

export const VinylRecord = () => {
  const [isPlaying, ] = useAtom(isPlayingAtom);
  const [coverImage, ] = useAtom(currentCoverImageAtom);

  return (
    <view className='VinylRecordView'>
      <image src={vinyl} className={`VinylImage ${isPlaying ? 'playing' : ''}`} >
        {coverImage && (
          <image src={coverImage} className='CoverImage' />
        )}
      </image>
    </view>
  );
};
