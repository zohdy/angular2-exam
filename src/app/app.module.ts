import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Skal bruges ifm. Model Driven Forms
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DataBindingComponent }  from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormsTemplateComponent } from './components/forms/forms-template.component';
import { FormsModelComponent } from './components/forms/forms-model.component';
import { RoutingComponent } from './components/routing/routing.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { Routing }  from './app.routes';
import { ChildComponent } from './components/input-outputs/child.component';
import { ParentComponent } from './components/input-outputs/parent.component';
import { FilterPipe} from './components/pipes/custom-filter-pipe/filter.pipe';
import { SubRouteComponent } from './components/routing/sub-route.component';
import { AnotherSubRouteComponent } from './components/routing/another-sub-route.component';
import { RoutingWithParamComponent } from './components/routing/routing-with-param.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HttpTestComponent } from './components/services/http-test.component';
import { UnitTestingComponent } from './components/unit-testing/unit-testing.component';
import { CapitalizePipe} from './components/unit-testing/pipe-testing/capitalized.pipe';


@NgModule({

  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    FormsTemplateComponent,
    FormsModelComponent,
    RoutingComponent,
    PipesComponent,
    ChildComponent,
    ParentComponent,
    FilterPipe,
    CapitalizePipe,
    SubRouteComponent,
    AnotherSubRouteComponent,
    PageNotFoundComponent,
    RoutingWithParamComponent,
    HttpTestComponent,
    UnitTestingComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ReactiveFormsModule // Skal bruges ifm. Model Driven Forms
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
