import './VinylRecord.css'
import vinyl from '../assets/images/vinyl_red.png';

export const VinylRecord = (props: { name: string }) => {
  return (
    <view className='VinylRecordView'>
      <image src={vinyl} className='VinylImage' />
    </view>
  );
};
