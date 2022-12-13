import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tal-select-problem-view',
  templateUrl: './select-problem-view.component.html',
  styleUrls: ['./select-problem-view.component.scss']
})
export class SelectProblemViewComponent implements OnInit {

  public problems: any[] = [
    {
      id: 1, name: 'Problem 1',
    },
    {
      id: 2, name: 'Problem 2',
    },
    {
      id: 3, name: 'Problem 3',
    },
    {
      id: 4, name: 'Problem 4',
    },
  ];

  public selectedProblem: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
