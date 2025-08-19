import { useAtom } from 'jotai';
import { currentTitleAtom } from '../State.jsx';

import './InfoBox.css'

export const InfoBox = () => {
  const [currentTitle, ] = useAtom(currentTitleAtom);

  return (
    <view className="InfoBoxView">
      <text className='Title'>
        {`${currentTitle ? currentTitle : "Empty Playlist"}`}
      </text>
    </view>
  );
}
