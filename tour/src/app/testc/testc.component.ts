import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testc',
  template: `{{ text | uselessPipe: 'Mr':'Mike' }}`,
})
export class TestcComponent implements OnInit {
  text = 'my Name';
  constructor() {}

  ngOnInit(): void {}
}
