import { create } from 'zustand';
import { AudioService } from '@/services/audio.service';

export const audioStore = create((set) => ({
  AudioService: new AudioService(),
}));
