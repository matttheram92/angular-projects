import { Component, OnInit } from '@angular/core';
import { Rsvp } from '../rsvp/rsvp.model';
import { RsvpService } from '../rsvp/rsvp.service';
import { SongRequest } from '../song-requests/song-requests.model';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  rsvpService!: RsvpService;
  rsvps!: Rsvp[];
  rsvpColumns: string[] = ['name', 'attending', 'dietaryRequirements'];
  songs!: SongRequest[];
  songColumns: string[] = ['songName', 'personName'];

  constructor(rsvpService: RsvpService) { 
    this.rsvpService = rsvpService;
  }

  async ngOnInit(): Promise<void> {
    this.rsvps = await this.rsvpService.getRsvpList();
    this.songs = await this.rsvpService.getSongList();
  }

}
