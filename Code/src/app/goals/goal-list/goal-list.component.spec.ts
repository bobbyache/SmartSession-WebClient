import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalListComponent } from './goal-list.component';
import { CreateGoalComponent } from '../create-goal/create-goal.component';
import { ExerciseListComponent } from 'src/app/exercises/exercise-list/exercise-list.component';
import { EditExerciseComponent } from 'src/app/exercises/edit-exercise/edit-exercise.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatListModule, MatIconModule, MatProgressBarModule, MatButtonModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoalService } from 'src/app/shared/goal.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ApplicationSettingsService } from 'src/app/shared/application-settings.service';

describe('GoalListComponent', () => {
  let component: GoalListComponent;
  let fixture: ComponentFixture<GoalListComponent>;

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
        ApplicationSettingsService,
        HttpHandler,
        HttpClient,
        GoalService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
