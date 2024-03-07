import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/profileInfo', pathMatch: 'full' },
  { path: 'profileInfo', component: ProfileInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
