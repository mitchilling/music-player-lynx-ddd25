import { useAtom } from 'jotai';
import { isPlayingAtom } from '../State.jsx';

import './VinylRecord.css'
import vinyl from '../assets/images/vinyl_red.png';

export const VinylRecord = () => {
  const [isPlaying, ] = useAtom(isPlayingAtom);

  return (
    <view className='VinylRecordView'>
      <image src={vinyl} className='VinylImage' />
    </view>
  );
};
