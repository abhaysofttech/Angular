import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
            <button class="btn btn-primary" [class.active]="isActive">Save</button>
             <button class="btn btn-primary" [style.backgroundColor]="isActive?'blue':'white'">Save 2</button>  
             <button (click)="onSave()">Click Save</button>
             `
})
export class CoursesComponent {
    isActive = false;
    onSave(){
        console.log("Button was clicked")
    }
}