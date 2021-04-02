import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { studentComponent} from './student/student.component';
import { ChildComponent } from './child/child.component';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { SimpleComponent } from './simple/simple.component';
import { SampleserviceComponent } from './sampleservice/sampleservice.component';
import { ServicewithhttpComponent } from './servicewithhttp/servicewithhttp.component';
import { HttpClientModule } from '@angular/common/http';
import { SampleDetailComponent } from './sample-detail/sample-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    studentComponent,
    ChildComponent,
    CartComponent,
    CartListComponent,
    SimpleComponent,
    SampleserviceComponent,
    ServicewithhttpComponent,
    SampleDetailComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,RouterModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
