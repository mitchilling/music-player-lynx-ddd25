import { useAtom } from 'jotai';
import { currentTitleAtom } from '../State.jsx';

export const InfoBox = () => {
  const [currentTitle, ] = useAtom(currentTitleAtom);

  return (
    <view style={{ width: "100%", height: "10vh", display: "flex" }}>
      <text style={{ marginLeft: "20px" }}>
        {`${currentTitle ? currentTitle : "Empty Playlist"}`}
      </text>
    </view>
  );
}