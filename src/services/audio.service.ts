export class AudioService {
  private readonly _audioInstane;

  constructor() {
    this._audioInstane = new Audio();
  }

  public init = () => {
    this._audioInstane.load();
  };
}
