import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
  { path: 'listalibros', loadChildren: () => import('./listbooks/listbooks.module').then(m => m.ListbooksModule) },
  { path: 'agregarlibros', loadChildren: () => import('./addbooks/addbooks.module').then(m => m.AddbooksModule) },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
