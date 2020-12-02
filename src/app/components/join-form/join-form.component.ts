import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.css'],
})
export class JoinFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  hideModal() {
    $('#joinModal').modal('hide');
  }
}
