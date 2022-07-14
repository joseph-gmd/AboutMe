import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  hobbies() {
    this.router.navigate(['/hobbies'])
  }
  menu() {
    this.router.navigate(['/menu'])
  }
}
