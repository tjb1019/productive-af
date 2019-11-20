import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'af-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  showUnderline: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
