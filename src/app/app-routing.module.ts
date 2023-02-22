import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component'
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactResolver } from './services/contact.resolver';

const routes: Routes = [

  { path: '', component: HomePageComponent },
  {
    path: 'contacts', component: ContactIndexComponent, children: [
      { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolver } },
      { path: 'edit', component: ContactEditComponent }
    ]
  },
  {
    path: 'contacts/:id',
    component: ContactDetailsComponent,
    canActivate: [AuthGuard],
    resolve: { contact: ContactResolver }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment?.production })],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
