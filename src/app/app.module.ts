import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes: Route[] = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotfoundComponent },
  {
    path: 'member',
    canActivateChild: [AuthGuard],
    children: [{ path: 'profile/:id', component: ProfileComponent }]
  },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    NotfoundComponent,
    ProfileComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
