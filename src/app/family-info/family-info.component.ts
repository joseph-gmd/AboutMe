import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.scss'],
})
export class FamilyInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  public family: any = [
    {id: 1, fname: 'Felipe Diaz', relevance: 0},
    {id: 2, fname: 'Lerma Diaz', relevance: 1},
    {id: 3, fname: 'Pauline Diaz', relevance: 2}
  ];
}
