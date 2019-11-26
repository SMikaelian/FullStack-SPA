import { Component, Inject } from '@angular/core';
import { QuestionComponent } from './question.component'
import { QuestionsComponent } from './questions.component'
import {MAT_DIALOG_DATA} from '@angular/material'

@Component({
  template: `
        <h1> Thanks for your order! </h1>
        <h2>{{data.correct}}/{{data.total}}</h2>
        `
})
export class FinishedComponent {
    constructor(@Inject(MAT_DIALOG_DATA) private data) {}
}


