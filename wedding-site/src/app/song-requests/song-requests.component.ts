import { Component, OnInit } from '@angular/core';
import { RsvpService } from '../rsvp/rsvp.service';

@Component({
  selector: 'app-song-requests',
  templateUrl: './song-requests.component.html',
  styleUrls: ['./song-requests.component.scss']
})
export class SongRequestsComponent implements OnInit {
  songTitle: string = '';
  loading = false;
  success = false;

  constructor(
    public rsvpService: RsvpService) { }

  ngOnInit(): void {
  }

  async submitSongRequest(): Promise<void> {
    this.success = false;
    this.loading = true;
    await this.rsvpService.addSong(this.songTitle);
    const self = this;
    setTimeout(function () {
      self.loading = false;
      self.success = true;
      self.songTitle = '';
    }, 2000);
    setTimeout(function () {
      self.success = false;
    }, 4000);
  }

}
