import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: false,
})
export class SidenavComponent {
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }
}
