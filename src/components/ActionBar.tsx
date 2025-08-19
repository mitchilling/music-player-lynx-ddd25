import { useAtom } from 'jotai';
import { currentIsLikedAtom, managerAtom } from '../State.jsx';

export const ActionBar = () => {
  const [currentIsLiked, setCurrentIsLiked] = useAtom(currentIsLikedAtom);
  const [manager,] = useAtom(managerAtom);

  const toggleLike = () => {
    const liked = manager?.toggleLike();
    setCurrentIsLiked(liked ?? false);
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
      <text>Play</text>
      <text>Share</text>
    </view>
  );
};
