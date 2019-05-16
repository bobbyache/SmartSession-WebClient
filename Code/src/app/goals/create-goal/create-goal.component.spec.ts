import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGoalComponent } from './create-goal.component';
import { GoalListComponent } from '../goal-list/goal-list.component';
import { ExerciseListComponent } from 'src/app/exercises/exercise-list/exercise-list.component';
import { EditExerciseComponent } from 'src/app/exercises/edit-exercise/edit-exercise.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatListModule, MatIconModule, MatProgressBarModule, MatButtonModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoalService } from 'src/app/shared/goal.service';

describe('CreateGoalComponent', () => {
  let component: CreateGoalComponent;
  let fixture: ComponentFixture<CreateGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoalListComponent,
        CreateGoalComponent,
        ExerciseListComponent,
        EditExerciseComponent
      ],
      imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatProgressBarModule,
        MatButtonModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        GoalService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
