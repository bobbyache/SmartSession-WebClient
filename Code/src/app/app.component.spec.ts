import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { GoalListComponent } from './goals/goal-list/goal-list.component';
import { CreateGoalComponent } from './goals/create-goal/create-goal.component';
import { ExerciseListComponent } from './exercises/exercise-list/exercise-list.component';
import { EditExerciseComponent } from './exercises/edit-exercise/edit-exercise.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { MatTableModule, MatProgressBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavBarComponent,
        GoalListComponent,
        CreateGoalComponent,
        ExerciseListComponent,
        EditExerciseComponent
      ],
      imports: [
        RouterModule.forRoot(AppRoutes),
        MatTableModule,
        MatProgressBarModule,
        FormsModule,
        ReactiveFormsModule
       ]
    })
    .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SmartSession 1.0.0'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SmartSession 1.0.0');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to SmartSession 1.0.0!');
  });
});
