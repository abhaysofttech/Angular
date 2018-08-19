import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `<h2>{{title}}</h2>
               <ul>
                    <li *ngFor="let course of courses">
                        {{course}}
                    </li>
               </ul>
               <h2 [textContent] = "title"></h2>
               <img src="{{ imageUrl}}" />

               <table>
               <tr>
               <td [attr.colspan]="colSpan">Data</td>
               </tr>
               </table>
               `
})
export class CoursesComponent {
    title = "List of Courses"
    courses;
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
        
    }

    //Logic for calling  an HTTP Service

}