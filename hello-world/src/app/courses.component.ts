import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `<h2>{{title}}</h2>
                {{getTitle()}}`
})
export class CoursesComponent {
    title = "List of Courses"
    
    getTitle(){
        return this.title;
    }
}