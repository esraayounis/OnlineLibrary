import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LeftsideComponent } from './shared/leftside/leftside.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthordetailsComponent } from './authordetails/authordetails.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BorrowComponent } from './borrow/borrow.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { DataentryloginComponent } from './dataentrylogin/dataentrylogin.component';
import { SearchPipe } from './search.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { BookofcategoryComponent } from './bookofcategory/bookofcategory.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FormoneComponent} from './formone/formone.component';
import {NnnComponent} from './nnn/nnn.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailsforborrowedComponent } from './detailsforborrowed/detailsforborrowed.component';
//import { DataentryShownewborrowedbooksComponent } from './dataentry-shownewborrowedbooks/dataentry-shownewborrowedbooks.component';
import { ShowNewborrowComponent } from './show-newborrow/show-newborrow.component';
import { RequestedforborrowComponent } from './requestedforborrow/requestedforborrow.component';
import { BookserachPipe } from './bookserach.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftsideComponent,
    HomeComponent,
    AuthorsComponent,
    AuthordetailsComponent,
    OurteamComponent,
    BookdetailsComponent,
    BorrowComponent,
    DataentryComponent,
    DataentryloginComponent,
    SearchPipe,
    BookofcategoryComponent,
    UserRegistrationComponent,
    FormoneComponent,
    NnnComponent,
    DetailsforborrowedComponent,
    ShowNewborrowComponent,
    RequestedforborrowComponent,
    BookserachPipe,
    AboutusComponent,
    
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,BrowserAnimationsModule,CarouselModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    library.add(faCoffee);
  }
}
