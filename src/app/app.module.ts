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
import { ExtraitPipe } from './extrait.pipe';
import { VoteComponent } from './vote/vote.component';

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
    VoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
