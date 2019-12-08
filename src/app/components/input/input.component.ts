import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'af-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() checkbox: boolean = false;
  @Input() value: string = '';
  @Input() autofocus: boolean = false;
  @Input() placeholder: string = '';
  @Output() inputChecked = new EventEmitter<boolean>();
  @Output() submitValue = new EventEmitter<string>();
  checked: boolean = false;
  showUnderline: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  listen(event: KeyboardEvent) {
    event.preventDefault();
    if (event.keyCode === 13) {
      this.submitValue.emit(this.value);
      this.value = '';
    }
  }

}
