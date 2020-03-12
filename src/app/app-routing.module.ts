import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from '../app/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SidedrawerComponent } from './sidedrawer/sidedrawer.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { ContentMasterComponent } from '../app/content-master/content-master.component';
import { EventMasterComponent } from '../app/event-master/event-master.component';
import { GalleryComponent } from '../app/gallery/gallery.component';
import { QuestionBankMasterComponent } from '../app/question-bank-master/question-bank-master.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      outlet: 'header',
      component: HeaderComponent
    },
    {
      path: '',
      outlet: 'sidedrawer',
      component: SidedrawerComponent
    },
    {
      path: 'achievements',
      component: AchievementsComponent
    },
    {
      path: 'courses',
      component: CoursesComponent
    },
    {
      path: 'content',
      component: ContentMasterComponent
    },
    {
      path: 'qbank',
      component: QuestionBankMasterComponent
    },
    {
      path: 'gallery',
      component: GalleryComponent
    },
    {
      path: 'events',
      component: EventMasterComponent
    }
  ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
