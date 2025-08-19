import type { ListSnapEvent } from '@lynx-js/types';
import { useAtom } from 'jotai';
import { currentTitleAtom, managerAtom } from '../State.jsx';
import { SongItem } from './SongItem.jsx'

export const SongList = () => {
  const [, setCurrentTitle] = useAtom(currentTitleAtom);
  const [manager, ] = useAtom(managerAtom);

  // triggered when the finger leaves the screen after a swipe
  const handleSnap = (e: ListSnapEvent) => {
    manager?.switchTo(e.detail.position);

    setCurrentTitle(manager?.currentSong?.title ?? null);
  };
  return (
    <list
      scroll-orientation="vertical"
      list-type="single"
      span-count={1}
      // use item-snap to achieve pagination
      item-snap={{ factor: 0, offset: 0 }}
      // bug with bindsnap, let's ignore it
      // @ts-ignore
      bindsnap={handleSnap}
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      {Array.from({ length: manager?.currentPositions.length ?? 0 }).map((item, index) => {
        return (
          <list-item
            item-key={`list-item-${index}`}
            key={`list-item-${index}`}
          >
            <SongItem index={index} />
          </list-item>
        );
      })}
    </list>
  );
};