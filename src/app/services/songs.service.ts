import { EventEmitter, Injectable } from '@angular/core';
import { Songs } from '../models/songs';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  songChanged = new EventEmitter<Songs[]>();
  private song: Songs[] = [
    new Songs(
      'its beginning to look a lot like christmas',
      'Michael Buble',
      'Rock',
      'https://www.youtube.com/watch?v=QJ5DOWPGxwg'
    ),
    new Songs(
      'All I Want for Christmas Is You',
      'Mariah Carey ',
      'Pop',
      'https://www.youtube.com/watch?v=aAkMkVFwAoo'
    ),
  ];

  constructor() {}

  getSong() {
    return this.song.slice();
  }

  addSongs(Songs: Songs) {
    this.song.push(Songs);
    this.songChanged.emit(this.song.slice());
  }
}
