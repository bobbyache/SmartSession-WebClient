import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
// import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { GoalListComponent } from './goals/goal-list/goal-list.component';
import { AppRoutes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { GoalService } from './shared/goal.service';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { CreateGoalComponent } from './goals/create-goal/create-goal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExerciseListComponent } from './exercises/exercise-list/exercise-list.component';
import { EditExerciseComponent } from './exercises/edit-exercise/edit-exercise.component';
import { ExerciseService } from './shared/exercise.service';

@NgModule({
  declarations: [
    // your components and pipes etc.
    AppComponent,
    ExerciseListComponent,
    GoalListComponent,
    NavBarComponent,
    CreateGoalComponent,
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
    // FlexLayoutModule
  ],
  providers: [
    // for all your services etc.
    GoalService,
    ExerciseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
