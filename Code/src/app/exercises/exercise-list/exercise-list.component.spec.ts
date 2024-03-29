import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseListComponent } from './exercise-list.component';
import { GoalListComponent } from 'src/app/goals/goal-list/goal-list.component';
import { CreateGoalComponent } from 'src/app/goals/create-goal/create-goal.component';
import { EditExerciseComponent } from '../edit-exercise/edit-exercise.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ExerciseListComponent', () => {
  let component: ExerciseListComponent;
  let fixture: ComponentFixture<ExerciseListComponent>;

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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
