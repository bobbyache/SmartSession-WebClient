import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { IGoal } from '../goal.model';
import { GoalService } from 'src/app/shared/goal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.scss']
})
export class CreateGoalComponent implements OnInit, AfterViewInit {

  @ViewChild('goalNameInput') goalNameInputBox: ElementRef;

  goalName: string;
  deadlineDate: string;
  category: string;
  description: string;
  mouseOverLogin: boolean;

  constructor(private goalService: GoalService, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.goalNameInputBox.nativeElement) {
      this.goalNameInputBox.nativeElement.focus();
    }
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
