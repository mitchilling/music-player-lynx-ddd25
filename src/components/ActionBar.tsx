import { useAtom } from 'jotai';
import { currentIsLikedAtom, isPlayingAtom, managerAtom } from '../State.jsx';

import './ActionBar.css';
import heartEmpty from '../assets/icons/heart_empty.png'
import heartFull from '../assets/icons/heart_full_red.png'
import playIcon from '../assets/icons/play_light.png'
import pauseIcon from '../assets/icons/pause_light.png'
import shareIcon from '../assets/icons/share_light.png'

export const ActionBar = () => {
  const [currentIsLiked, setCurrentIsLiked] = useAtom(currentIsLikedAtom);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const [manager,] = useAtom(managerAtom);

  const toggleLike = () => {
    const liked = manager?.toggleLike();
    setCurrentIsLiked(liked ?? false);
  };

  const togglePauseResume = () => {
    manager?.togglePauseResume();
    setIsPlaying(manager?.isPlaying ?? false);
  };

  return (
    <view className='ActionBarView'>
      <view bindtap={toggleLike}>
        {currentIsLiked
          ? <image src={heartFull} className='HeartIcon' />
          : <image src={heartEmpty} className='HeartIcon' />}
      </view>
      <view bindtap={togglePauseResume}>
        {isPlaying
          ? <image src={pauseIcon} className='PlayIcon' />
          : <image src={playIcon} className='PlayIcon' />}
      </view>
      {/* not implemented yet */}
      <view>
        <image src={shareIcon} className='ShareIcon' />
      </view>
    </view>
  );
};
