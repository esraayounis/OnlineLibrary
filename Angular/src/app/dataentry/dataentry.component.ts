import { Component, OnInit } from '@angular/core';
import { DataentryService } from './dataentry.service';
import { HttpClient } from '@angular/common/http';
import { dataentry } from './dataentry.model';
import { add_book } from './addbook.model';
import { add_author } from './addauthor.model';
import { add_publisher } from './addpublisher.model';
import { add_category } from './addcategory.model';
import { author } from '../authors/author.model';
import { getpublisher } from './getpublisher.model';
import { category } from '../shared/leftside/leftside.model';
import { bookmdel } from '../bookdetails/getbook.model';
import { getcopies } from './getcopies.model';
import { borrowbook } from './borrow.model';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})

export class DataentryComponent implements OnInit {
  getauthors:author[];
  borrowbooks=new borrowbook();
  getpublishers:getpublisher[];
  getcategories:category[];
  authors:add_author[]=[];
  booknamelist:bookmdel[]=[];
  nocopeis=new getcopies();
  author = new add_author();
  publisher = new add_publisher();
  category:add_category=new add_category();

  constructor(private _HttpClient:HttpClient) { }
  addBook(title:string,
    numberOfPage:number,
    contentPDF1:string,
    image:string,
    price:number,
    publishDate:Date,
    autherName:string,
    categoryName:string,
    publisherName:string)
  {
    alert(title+" Inserted");
     let book=new add_book();
     book.Title=title;
     book.NumberOfPage=numberOfPage;
     book.contentPDF=contentPDF1;
     book.Image=image;
     book.Price=price;
     book.PublishDate=publishDate;
     book.AutherName=autherName;
     book.CategoryName=categoryName;
     book.PublisherName=publisherName;
     //alert(JSON.stringify(book))
     this._HttpClient.post("http://localhost:61117/DataEntry/postForNewBook",book).
     subscribe(response=>{
     });
  }
  addborowbook(
    title:string,
    autherName:string,
    publicherName:string,
    numberOfPage:number,
    image:string
  )
  {
      alert(title+"  inserted");
      this.borrowbooks.ID=0;
      this.borrowbooks.Title=title;
      this.borrowbooks.AutherName=autherName;
      this.borrowbooks.PublicherName=publicherName;
      this.borrowbooks.NumberOfPage=numberOfPage;
      this.borrowbooks.Image=image;
      this._HttpClient.post("http://localhost:61117/DataEntry/PostForBorroweBook",this.borrowbooks
       
     ).
     subscribe(response=>{
     });
  }
  
  addAuthor(name :string,
    autherImage : string,
    jobDescribtion: string)
  {
      alert(name+" Inserted")
     this.author.Name=name;
      this.author.AutherImage=autherImage;
      this.author.JobDescribtion=jobDescribtion;
      
     this._HttpClient.post("http://localhost:61117/DataEntry/PostForAddAuther",this.author
       
     ).
     subscribe(response=>{

     });
  }

  addPublisher(name :string)
  {
      alert(name+" Inserted")
     this.publisher.Name=name;
     this._HttpClient.post("http://localhost:61117/DataEntry/addpublisher",this.publisher
       
     ).
     subscribe(response=>{

     });
  }
  addbookcopies(numofcopies :number,bookname:string)
  {
      alert(numofcopies+" Inserted for " +bookname);
      this.nocopeis.Title=bookname;
      this.nocopeis.NumberOfCopys=numofcopies;

     this._HttpClient.post("http://localhost:61117/DataEntry/putForCopy",this.nocopeis
       
     ).
     subscribe(response=>{

     });
  }


  addCategory(name :string)
  {
      alert(name+" Inserted");
     this.category.Name=name;
     this._HttpClient.post("http://localhost:61117/DataEntry/addcategory",this.category
       
     ).
     subscribe(response=>{

     });
  }
  ngOnInit() {
    this._HttpClient.get("http://localhost:61117/User/gatauthors").subscribe(
      response=>{
        this.getauthors=response as author[];
      }
    )

    this._HttpClient.get("http://localhost:61117/User/gatpublishers").subscribe(
      response=>{
        this.getpublishers=response as getpublisher[];
      }
    )

    this._HttpClient.get("http://localhost:61117/User/getcategories").subscribe(
      response=>{
        this.getcategories=response as category[];
      }
    )
    this._HttpClient.get("http://localhost:61117/User/Getbooks").subscribe(data=>{
        this.booknamelist=data as bookmdel[];
      })
  }


}
