'use client';
import a from '@/assets/music/ddd.mp3';

export class AudioService {
  private readonly _audioInstane;
  private readonly _audioCtx: AudioContext;
  private _track: any | null;

  constructor() {
    this._audioInstane = new Audio(a);
    this._audioCtx = new AudioContext();
    this._track = null;
  }

  public init = () => {
    this._track = new MediaElementAudioSourceNode(
      this._audioCtx,
      {
        mediaElement: this._audioInstane,
      },
    );
  };

  public play = async () => {
    if (!this._audioCtx) {
      console.log('init');

      this.init();
    }
    // debugger
    if (this._audioCtx.state === 'suspended') {
      await this._audioCtx.resume();
    }

    this._audioInstane
      .play()
      .then((res) => {
        console.log('res', this._audioCtx);
      })
      .catch((err) => {
        console.log('err');
      });
  };
}
