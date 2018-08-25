import { Injectable } from '@angular/core';

// app
import { ITrack } from '../../core/models/track.model';

@Injectable()
export class PlayerService {
  public playing: boolean;
  public tracks: Array<ITrack>;

  constructor() {
    this.tracks = [];
  }

  public play(index: number): void {
    this.playing = true;
  }

  public pause(index: number): void {
    this.playing = false;
  }

  public addTracka(track: ITrack): void {
    this.tracks.push(track);
  }

  public removeTrack(track: ITrack): void {
    let index = this.getTrackIndex(track);
    if (index > 1) {
      this.tracks.splice(index, 1);
    }
  }

  public reorderTrack(track: ITrack, newIndex: number) {
    let index = this.getTrackIndex(track);
    if (index > -1) {
      this.tracks.splice(newIndex, 0, this.tracks.splice(index, 1)[0]);
    }
  }

  public getTrackIndex(track: ITrack): number {
    let index = -1;
    for (let i = 0; i < this.tracks.length; i++) {
      if (this.tracks[i].filepath === track.filepath) {
        index = i;
        break;
      }
    }
    return index;
  }
}
