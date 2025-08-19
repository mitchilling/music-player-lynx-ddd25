import { ActionBar } from './ActionBar.jsx';
import { InfoBox } from './InfoBox.js';
import { ProgressBar } from './ProgressBar.jsx';
import { VinylRecord } from './VinylRecord.jsx';

import './SongItem.css';

export const SongItem = (props: { index: number }) => {
  return (
    <view className="SongItem">
      <VinylRecord name={`song-${props.index}`} />
      <InfoBox />
      <ProgressBar />
      <ActionBar />
    </view>
  );
};
