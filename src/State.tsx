import { atom } from 'jotai';

import type { PlaybackManager } from './model/PlaybackManager.jsx';

export const managerAtom = atom<PlaybackManager | null>(null);

export const currentIsLikedAtom = atom(false);
