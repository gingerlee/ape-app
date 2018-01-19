import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animals-add',
  templateUrl: './animals-add.component.html',
  styleUrls: ['./animals-add.component.css']
})
export class AnimalsAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
