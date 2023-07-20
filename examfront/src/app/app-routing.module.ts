import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddSubjectComponent } from './pages/admin/add-subject/add-subject.component';
import { ViewSemestersComponent } from './pages/admin/view-semesters/view-semesters.component';
import { AddSemesterComponent } from './pages/admin/add-semester/add-semester.component';
import { ViewSubjectsComponent } from './pages/admin/view-subjects/view-subjects.component';
import { UpdateSubjectComponent } from './pages/admin/update-subject/update-subject.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { LoadSubjectComponent } from './pages/user/load-subject/load-subject.component';

const routes: Routes = [
  {
     path:'',
     component:HomeComponent,
     pathMatch:'full',

  },
  {
    path:'signup', 
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path:'login',
    component :LoginComponent,
    pathMatch: 'full',
  },

  {
    path:'admin',
    component: DashboardComponent,
    // Add AdminGuard here
    children:[
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'add-subject',
        component: AddSubjectComponent,
      },
      {
        path: 'view-semesters',
        component: ViewSemestersComponent,
      },
      {
        path: 'add-semester',
        component: AddSemesterComponent,
      },
      {
        path: 'view-subjects',
        component: ViewSubjectsComponent,
      },
      {
        path: 'subject/:subjectId',
        component: UpdateSubjectComponent,
      },
      {
        path: 'view-questions/:SubjectId/:title',
        component: ViewQuestionsComponent
      },
      {
        path: 'add-question/:subjectId/:title',
        component: AddQuestionComponent,
      }
    ]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    children: [

      {
        path: ':subjectId',
        component: LoadSubjectComponent,
      }

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
