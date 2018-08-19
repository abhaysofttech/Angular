import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
            <button class="btn btn-primary" [class.active]="isActive">Save</button>
             <button class="btn btn-primary" [style.backgroundColor]="isActive?'blue':'white'">Save 2</button>  `
})
export class CoursesComponent {
    isActive = false;
}