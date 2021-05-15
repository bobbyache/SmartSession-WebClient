import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Overlay } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { GoalListComponent } from './goals/goal-list/goal-list.component';
import { AppRoutes } from './app-routing.module';
import { GoalService } from './shared/goal.service';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { CreateGoalComponent } from './goals/create-goal/create-goal.component';
import { ExerciseListComponent } from './exercises/exercise-list/exercise-list.component';
import { EditExerciseComponent } from './exercises/edit-exercise/edit-exercise.component';
import { ExerciseService } from './shared/exercise.service';
import { ApplicationSettingsService } from './shared/application-settings.service';
import { SnackbarService } from './shared/snackbar.service';
import { CoreInfrastructureService } from './shared/core-infrastructure.service';
import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseListComponent,
    GoalListComponent,
    NavBarComponent,
    CreateGoalComponent,
    EditExerciseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes), // points to your app-routing.module
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    Overlay,
    // for all your services etc.
    CoreInfrastructureService,
    ApplicationSettingsService,
    GoalService,
    ExerciseService,
    SnackbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
