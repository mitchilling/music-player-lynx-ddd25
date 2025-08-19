import { useAtom } from 'jotai';
import { currentIsLikedAtom, isPlayingAtom, managerAtom } from '../State.jsx';

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
    <view
      style={{ width: "100%", height: "20vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <text bindtap={toggleLike}>{currentIsLiked ? 'Liked' : 'Like'}</text>
      <text bindtap={togglePauseResume}>{isPlaying ? 'Pause' : 'Play'}</text>
      <text>Share</text>
    </view>
  );
};
