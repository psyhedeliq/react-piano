/// <reference types="react-scripts" />

// create an AudioContext type, technically it means that out custom type it's literally a type of widowAudioContext; AudioContext is not a type per se but a constructor function, so to make TypeScript understand what type we want to declare we explicitly define it as typeof AudioContext
type AudioContextType = typeof AudioContext;

interface Window extends Window {
  webkitAudioContext: AudioContextType;
}