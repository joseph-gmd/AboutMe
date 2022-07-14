import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.page.html',
  styleUrls: ['./hobbies.page.scss'],
})
export class HobbiesPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  overview(){
    this.router.navigate(['/overview'])
  }
  menu() {
    this.router.navigate(['/menu'])
  }
}
