import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { contentRoutes } from './shared/routes/content.routes';

const routes: Routes = [

  // { path: 'auth/login', component: LoginComponent },
  
    // AuthGuard
   { path: '', component: LayoutComponent, children: contentRoutes }

 // {path:'',component:LoginComponent} //Added by me
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
