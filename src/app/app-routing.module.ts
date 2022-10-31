import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from './logged.guard';
import { NoLoggedGuard } from './no-logged.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/feed/feed.module').then(m => m.FeedPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    /*canActivate:[NoLoggedGuard]*/
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    /*canActivate:[NoLoggedGuard]*/
  },
  {
    path: 'feed',
    loadChildren: () => import('./pages/feed/feed.module').then( m => m.FeedPageModule),
    // canActivate:[LoggedGuard]
  },
  {
    path: 'feed/:id',
    loadChildren: () => import('./pages/movie-datails/movie-datails.module').then( m => m.MovieDatailsPageModule),
    // canActivate:[LoggedGuard]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
