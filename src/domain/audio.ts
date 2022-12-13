import { Optional } from './types';

// helper function that checks if our browser supports the AudioContext API
export const accessContext = (): Optional<AudioContextType> => {
  return window.AudioContext || window.webkitAudioContext || null;
};
