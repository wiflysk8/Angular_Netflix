import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.scss']
})
export class ComedyComponent implements OnInit {
  @Input() photoGallery!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
