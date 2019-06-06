import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/shared/goal.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { CoreInfrastructureService } from 'src/app/shared/core-infrastructure.service';

@Component({
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent implements OnInit {

  columnsToDisplay = ['title', 'category', 'progress'];
  goals: any;

  constructor(private goalService: GoalService, private core: CoreInfrastructureService) { }

  ngOnInit(): void {
    this.goalService.allgoals().subscribe(
      (result) => {
        this.goals = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  notify(goal) {
    this.core.informationSnackbar(goal.title);
  }
}
