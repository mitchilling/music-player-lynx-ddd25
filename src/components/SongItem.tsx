import { useAtom } from 'jotai';

import { currentIndexAtom } from '../State.jsx';
import { ActionBar } from './ActionBar.jsx';
import { InfoBox } from './InfoBox.js';
import { ProgressBar } from './ProgressBar.jsx';
import { VinylRecord } from './VinylRecord.jsx';

import './SongItem.css';

export interface SongItemProps {
  index: number;
}

export const SongItem = (props: SongItemProps) => {
  const [currentIndex,] = useAtom(currentIndexAtom);

  return (
    <view className="SongItem">
      <VinylRecord name={`song-${props.index}`} />
      <InfoBox />
      {/* only mount progress bar when index is correct, to reduce timer cost */}
      {currentIndex === props.index && (
        <ProgressBar
          index={props.index}
        />
      )}
      <ActionBar />
    </view>
  );
};
