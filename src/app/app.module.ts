import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';
import { CoursesComponent } from './courses/courses.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';

import { ExtraitPipe } from './extrait.pipe';
import { VoteComponent } from './vote/vote.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: "todos", component: TodosComponent },
  { path: "courses", component: CoursesComponent },
  { path: "blog", component: SiteComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    FormComponent,
    CoursesComponent,
    ExtraitPipe,
    VoteComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
