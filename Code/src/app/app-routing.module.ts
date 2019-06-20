import { Routes } from '@angular/router';
import { ExerciseListComponent } from './exercises/exercise-list/exercise-list.component';
import { GoalListComponent } from './goals/goal-list/goal-list.component';
import { CreateGoalComponent } from './goals/create-goal/create-goal.component';
import { EditExerciseComponent } from './exercises/edit-exercise/edit-exercise.component';

export const AppRoutes = [
    { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
    { path: 'goals', component: GoalListComponent },
    { path: 'goals/new', component: CreateGoalComponent },
    { path: 'goals/:id', component: ExerciseListComponent },
    { path: 'exercises', component: ExerciseListComponent },
    { path: 'exercises/new', component: EditExerciseComponent },
    // { path: '', redirectTo: 'goals', pathMatch: 'full' }
    { path: '**', redirectTo: 'demo', pathMatch: 'full' }
];
