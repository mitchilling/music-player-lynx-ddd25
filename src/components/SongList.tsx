import { useAtom } from 'jotai';
import { managerAtom } from '../State.jsx';
import { SongItem } from './SongItem.jsx'

export const SongList = () => {
  const [manager, ] = useAtom(managerAtom);

  return (
    <list
      scroll-orientation="vertical"
      list-type="single"
      span-count={1}
      // use item-snap to achieve pagination
      item-snap={{ factor: 0, offset: 0 }}
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