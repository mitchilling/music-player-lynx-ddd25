import { ActionBar } from './ActionBar.jsx';
import { InfoBox } from './InfoBox.js';
import { ProgressBar } from './ProgressBar.jsx';
import { VinylRecord } from './VinylRecord.jsx';

export const SongItem = (props: { index: number }) => {
  return (
    <view
      style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <VinylRecord name={`song-${props.index}`} />
      <InfoBox />
      <ProgressBar />
      <ActionBar />
    </view>
  );
};
