import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  @Output()
  addNew: EventEmitter<void> = new EventEmitter();
  @Output()
  openFilter: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
