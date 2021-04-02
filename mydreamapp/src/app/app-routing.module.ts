import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { ChildComponent } from './child/child.component';
import { SampleDetailComponent } from './sample-detail/sample-detail.component';
import { SampleserviceComponent } from './sampleservice/sampleservice.component';

const routes: Routes = [{path:'authenticate',component:ChildComponent},
{
  path:'cart',component:CartListComponent
},
{path:'sample', component:SampleserviceComponent},
{path:'', redirectTo:'/cart', pathMatch:'full'},
{path:'sample/:id', component:SampleDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
