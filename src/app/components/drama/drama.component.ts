import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.scss']
})
export class DramaComponent implements OnInit {
  @Input() photoGallery!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
