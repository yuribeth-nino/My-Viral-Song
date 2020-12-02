import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  hideModal() {
    $('#createModal').modal('hide');
  }
}
