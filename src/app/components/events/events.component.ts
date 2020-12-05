import { Component, OnInit } from '@angular/core';
import { Songs } from 'src/app/models/songs';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  inputs: ['song'],
})
export class EventsComponent implements OnInit {
  songs: Songs[];

  constructor(private songService: SongsService) {}

  ngOnInit(): void {
    const list = (this.songs = this.songService.getSong());
    console.log(list);
  }

  sortedSongs(): Songs[] {
    return this.songs.sort((a: Songs, b: Songs) => b.votes - a.votes);
  }
}
