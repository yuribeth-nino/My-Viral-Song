import { Component, Input, OnInit } from '@angular/core';
import { Songs } from 'src/app/models/songs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  inputs: ['song'],
})
export class SongsComponent implements OnInit {
  @Input() song: Songs;
  constructor() {}

  ngOnInit(): void {}

  // call method that is in the interface songs which has the vote up ++
  voteUp() {
    this.song.voteUp();
  }
}
