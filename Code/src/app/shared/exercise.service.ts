import { Injectable } from '@angular/core';
import { IExercise } from '../exercises/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor() { }

  getExercise(): IExercise {
    return {
      exerciseName: 'My Exercise',
      source: 'exercise_2345.gp (Guitar Pro) in song list.',
      category: '1',
      description: 'The description from my exercise.'
    };
  }

  update(exercise: IExercise) {
    console.log(`updating {{ exercise.exerciseName }}`);
  }
}
