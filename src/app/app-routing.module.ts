import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditrecipeComponent } from './editrecipe/editrecipe.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './home/item-details/item-details.component';
import { ProfileComponent } from './Profile/profile.component';

const routes: Routes = [{path:"",component:ProfileComponent},{path:"profile",component:HomeComponent},{path:"profile/:id",component:ItemDetailsComponent},{path:"edit/:id",component:EditrecipeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
