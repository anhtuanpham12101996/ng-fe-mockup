import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReviewCourseComponent } from './Task_ReviewCourse/review-course/review-course.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ReviewCourseComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
