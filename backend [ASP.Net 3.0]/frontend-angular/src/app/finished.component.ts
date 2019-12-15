import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material'

@Component({
  template: `
        <h1 *ngIf="data.correct != 0; else elseBlock"> Correct Guess! </h1>
        <ng-template #elseBlock><div style="font-weight: bold">Wrong Guess! Better luck next time. </div></ng-template>
        <h2>You Guessed {{data.correct}}/{{data.total}}</h2>
        `
})
export class FinishedComponent {
    constructor(@Inject(MAT_DIALOG_DATA) private data) {}
}


