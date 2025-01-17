import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'insurBase-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent implements OnInit {
  public userProfile: any;
  public userInitials = 'BS';

  constructor() {}

  ngOnInit() {
  }
}
