import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {EmptyComponent} from './empty/empty.component';

const routes: Routes = [

  {path: 'main', component: MainComponent},
  {path: 'empty', component: EmptyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
