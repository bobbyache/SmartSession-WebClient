import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { GoalListComponent } from './goal-list.component';
import { CreateGoalComponent } from '../create-goal/create-goal.component';
import { ExerciseListComponent } from 'src/app/exercises/exercise-list/exercise-list.component';
import { EditExerciseComponent } from 'src/app/exercises/edit-exercise/edit-exercise.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoalService } from 'src/app/shared/goal.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CoreInfrastructureService } from 'src/app/shared/core-infrastructure.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { ApplicationSettingsService } from 'src/app/shared/application-settings.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { of } from 'rxjs';

describe('GoalListComponent', () => {
  let component: GoalListComponent;
  let fixture: ComponentFixture<GoalListComponent>;
  let injector: TestBed;
  let service: GoalService;

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
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        SnackbarService,
        ApplicationSettingsService,
        CoreInfrastructureService,
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
    injector = getTestBed();
    service = injector.get(GoalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of goals', () => {
    spyOn(service, 'all').and.returnValue(of({}));
    component.ngOnInit();
    expect(service.all).toHaveBeenCalledTimes(1);
  });
});
