import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthordetailsComponent } from './authordetails/authordetails.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BorrowComponent } from './borrow/borrow.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { DataentryloginComponent } from './dataentrylogin/dataentrylogin.component';
import { BookofcategoryComponent } from './bookofcategory/bookofcategory.component';
import { FormoneComponent} from './formone/formone.component';
import {NnnComponent} from './nnn/nnn.component';
import { DetailsforborrowedComponent } from './detailsforborrowed/detailsforborrowed.component';
import {ShowNewborrowComponent} from './show-newborrow/show-newborrow.component';
import { RequestedforborrowComponent } from './requestedforborrow/requestedforborrow.component';
import {AboutusComponent} from './aboutus/aboutus.component'
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"authordetails/:AutherName",component:AuthordetailsComponent},
  {path:"bookdetails/:name",component:BookdetailsComponent},
  {path:"borrow",component:BorrowComponent},
  {path:"dataentry",component:DataentryloginComponent},
  {path:"afterlgin",component:DataentryComponent},
  {path:"ourteam",component:OurteamComponent},
  {path:"categoreis/:bookofcat",component:BookofcategoryComponent},
  {path:"authors",component:AuthorsComponent},
  {path:"borrowbook/:id",component:DetailsforborrowedComponent},
  {path:"formoncomponent",component:FormoneComponent},
  {path:"nnn",component:NnnComponent},
  {path:"shownewborrowed/:id",component:ShowNewborrowComponent},
  {path:"request",component:RequestedforborrowComponent},
  {path:"aboutus",component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
