import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators    } from '@angular/forms';
import { ExerciseService } from 'src/app/shared/exercise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.component.html',
  styleUrls: ['./edit-exercise.component.scss']
})
export class EditExerciseComponent implements OnInit, AfterViewInit {

  @ViewChild('exerciseNameInput') exerciseNameInputBox: ElementRef;

  exerciseForm: FormGroup;

  constructor(private exerciseService: ExerciseService, private router: Router) { }

  ngOnInit() {

    const exercise = this.exerciseService.getExercise();

    const exerciseName = new FormControl(exercise.exerciseName, [ Validators.required ]);
    const source = new FormControl(exercise.source, [ Validators.required ]);
    const category = new FormControl(exercise.category, [ Validators.required ]);
    const description = new FormControl(exercise.description);

    this.exerciseForm = new FormGroup({
      exerciseName,
      source,
      category,
      description
    });
  }

  ngAfterViewInit() {
    if (this.exerciseNameInputBox.nativeElement) {
      this.exerciseNameInputBox.nativeElement.focus();
    }
  }

  saveExercise(formValues) {
    if (this.exerciseForm.valid) {
      this.exerciseService.update({
        exerciseName: formValues.exerciseName,
        source: formValues.source,
        category: formValues.category,
        description: formValues.description
      });
      this.router.navigate(['exercises']);
    }
  }

  cancel() {
    this.router.navigate(['exercises']);
  }
}
