import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animals-edit',
  templateUrl: './animals-edit.component.html',
  styleUrls: ['./animals-edit.component.css']
})
export class AnimalsEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
