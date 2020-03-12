import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SidedrawerComponent } from './sidedrawer/sidedrawer.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventMasterComponent } from './event-master/event-master.component';
import { ContentMasterComponent } from './content-master/content-master.component';
import { QuestionBankMasterComponent } from './question-bank-master/question-bank-master.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    AchievementsComponent,
    SidedrawerComponent,
    CoursesComponent,
    HeaderComponent,
    GalleryComponent,
    EventMasterComponent,
    ContentMasterComponent,
    QuestionBankMasterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
