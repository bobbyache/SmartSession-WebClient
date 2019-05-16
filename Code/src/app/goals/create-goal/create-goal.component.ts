import { Component, OnInit } from '@angular/core';
import { IGoal } from '../goal.model';
import { GoalService } from 'src/app/shared/goal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.scss']
})
export class CreateGoalComponent implements OnInit {

  goalName: string;
  deadlineDate: string;
  category: string;
  description: string;
  mouseOverLogin: boolean;

  constructor(private goalService: GoalService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
    const goal: IGoal = {
        goalName: formValues.goalName,
        deadlineDate: formValues.deadlineDate,
        category: formValues.category,
        description: formValues.description
    };

    this.goalService.create(goal);
    this.router.navigate(['goals']);
  }

  cancel() {
    this.router.navigate(['goals']);
  }

}
