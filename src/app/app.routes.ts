import { Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { AboutComponent } from './pages/components/about/about.component';
import { ContactComponent } from './pages/components/contact/contact.component';
import { NotfoundComponent } from './core/components/notfound/notfound.component';

export const routes: Routes = [

    {path:"",redirectTo:"home", pathMatch:'full' },
    {path:'home',component:HomeComponent,title:'home'},
    {path:'about',component:AboutComponent,title:'about'},
    {path:'contact',component:ContactComponent,title:'contact'},
    {path:"**",component:NotfoundComponent}



];
