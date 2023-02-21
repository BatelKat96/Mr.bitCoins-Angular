import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ChartsComponent } from './cmps/charts/charts.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component'
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactResolver } from './services/contact.resolver';

const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'contacts', component: ContactIndexComponent },
  { path: 'charts', component: ChartsComponent },
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
