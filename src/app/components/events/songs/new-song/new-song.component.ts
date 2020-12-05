import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Songs } from 'src/app/models/songs';
import { SongsService } from 'src/app/services/songs.service';

declare var $: any;

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.css'],
})
export class NewSongComponent implements OnInit {
  @ViewChild('titleInput', { static: false }) titleInputRef: ElementRef;
  @ViewChild('artistInput', { static: false }) artistInputRef: ElementRef;
  @ViewChild('genreInput', { static: false }) genreInputRef: ElementRef;
  @ViewChild('urlInput', { static: false }) urlInputRef: ElementRef;

  constructor(private songService: SongsService) {}

  ngOnInit(): void {}

  onAddSong() {
    const title = this.titleInputRef.nativeElement.value;
    const artist = this.artistInputRef.nativeElement.value;
    const genre = this.genreInputRef.nativeElement.value;
    const url = this.urlInputRef.nativeElement.value;
    const newSong = new Songs(title, artist, genre, url);
    this.songService.addSongs(newSong);
  }

  hideModal() {
    $('#songModal').modal('hide');
  }
}
