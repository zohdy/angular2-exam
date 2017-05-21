import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import { DataBindingComponent }  from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormsTemplateComponent } from './components/forms/forms-template.component';
import { RoutingComponent } from './components/routing/routing.component';
import { RoutingWithParamComponent } from './components/routing/routing-with-param.component';
import { SubRouteComponent } from './components/routing/sub-route.component';
import { AnotherSubRouteComponent } from './components/routing/another-sub-route.component';
import { ParentComponent } from './components/input-outputs/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HttpTestComponent } from './components/services/http-test.component';
import { UnitTestingComponent } from './components/unit-testing/unit-testing.component';

const App_Routes: Routes = [

    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'directives',
        component: DirectivesComponent
    },
    {
        path: 'forms',
        component: FormsTemplateComponent
    },
    {
        path: 'pipes',
        component: PipesComponent
    },
    {
        path: 'routing',
        component: RoutingComponent,
            // CHILD ROUTES - Går til f.eks. http://localhost.com/routing/subroute 
            children: [
            {
                path: 'subroute',
                component: SubRouteComponent
            },
            {
                path: 'another-subroute',
                component: AnotherSubRouteComponent
            }
        ]
    },
    {   // Dynamisk URL - :id er en variabel der er baseret på en værdi der bestemmes af brugeren
        path: 'route-with-param/:id',
        component: RoutingWithParamComponent
    },
    {
        path: 'input-outputs',
        component: ParentComponent
    },
    {
        path: 'services',
        component: HttpTestComponent
    },
    {
        path: 'unit-testing',
        component: UnitTestingComponent
    },
    {
        // ** = Hvis ikke der matches med nogle af de definerede routs 
        path: '**',
        component: PageNotFoundComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(App_Routes);
