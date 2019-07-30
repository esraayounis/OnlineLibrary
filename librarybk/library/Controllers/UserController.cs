using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using library.Models;
using library.ViewModel;

namespace library.Controllers
{
    public class UserController : ApiController
    {
        LibraryContext context;
        public UserController()
        {
            context = new LibraryContext();
        }
        [HttpPost]
        public int Post(ViewUser user1)
        {


            var ChackName = context.Users.FirstOrDefault(ww => ww.Name == user1.Name);
            if (ChackName == null)
            {
                User user = new User();
                user.Name = user1.Name;
                user.Password = user1.Password;
                user.PhoneNumber = user1.PhoneNumber;
                user.Address = user1.Address;
                user.Email = user1.Email;
                context.Users.Add(user);
                context.SaveChanges();
                return user.UserID;
            }
            else
            {
                return 0;
            }

        }

        [HttpPost]
        public int Get(logain log)
        {
            var x = context.Users.FirstOrDefault(ww => ww.Name == log.Name);
            if (x == null)
            {
                return 0;
            }
            else
            {
                if (x.Password == log.Password)
                {
                    return x.UserID;
                }
                else
                {
                    return 0;
                }
            }

        }
        //[HttpPost]
        //public int Buy(BuyBook buybook)
        //{
        //    var bookToBuy = context.Books.FirstOrDefault(ww => ww.Title == buybook.BookName);

        //    if (bookToBuy.NumberOfCopys > 0)
        //    {

        //        User user = new User();
        //        user.UserID = buybook.UserId;
        //        Purchase purchase = new Purchase();
        //        purchase.BookID = bookToBuy.BookID;
        //        purchase.UserID = buybook.UserId;
        //        purchase.PurchaseData = DateTime.Now;
        //        context.Purchases.Add(purchase);
        //        bookToBuy.NumberOfCopys--;
        //        context.SaveChanges();
        //        return purchase.PurchaseID;
        //    }
        //    else
        //    {
        //        return 0;
        //    }
        //}


        [HttpPost]
        public int Buy(BuyBook buybook)
        {
            var bookToBuy = context.Books.FirstOrDefault(ww => ww.Title == buybook.BookName);

            if (buybook.UserId != null)
            {
                if (bookToBuy.NumberOfCopys > 0)
                {


                    Purchase purchase = new Purchase();
                    purchase.BookID = bookToBuy.BookID;
                    purchase.UserID = buybook.UserId;
                    purchase.PurchaseData = DateTime.Now;
                    context.Purchases.Add(purchase);
                    bookToBuy.NumberOfCopys--;
                    context.SaveChanges();
                    return 1;
                }
                else
                {
                    return 2;
                }
            }
            else
            {
                return 3;
            }
        }






        [HttpPost]

        public int borrow(BorrowActionViewModel borrowbook)
        {
            var booktoborrow = context.BorrowedBooks.FirstOrDefault(ww => ww.BorrowedBookID == borrowbook.BorrowedBookId);
            if (booktoborrow.ISborrwed == false && booktoborrow.Request == false)
            {
                booktoborrow.ISborrwed = true;
                User user = new User();
                user.UserID = borrowbook.UserId;
                booktoborrow.UserID = borrowbook.UserId;
                context.SaveChanges();
                return booktoborrow.BorrowedBookID;
            }
            else
            {
                return 0;
            }

        }

        [HttpPost]
        public IEnumerable<getbooks> getuserbooks(SendID id)
        {
            var userpurchase = context.Purchases.Where(ww => ww.UserID == id.ID).ToList();

            List<getbooks> bookslist = new List<getbooks>();

            foreach (var item in userpurchase)
            {
                getbooks g = new getbooks();
                var username = context.Users.FirstOrDefault(ww => ww.UserID == item.UserID);
                g.userName = username.Name;
                var bookname = context.Books.FirstOrDefault(ww => ww.BookID == item.BookID);
                g.BookName = bookname.Title;
                bookslist.Add(g);
            }
            return bookslist;
        }
        //////////////////////////////////////////////
        [HttpGet]
        public IEnumerable<getallcategories> getcategories()
        {
            var listofCategories = context.Categories.ToList();
            var list = new List<getallcategories>();
            foreach (var item in listofCategories)
            {
                getallcategories get = new getallcategories()
                {
                    catname = item.CategoryName
                };

                list.Add(get);
            }
            return list;
        }
        [HttpGet]
        public IEnumerable<getallauthors> gatauthors()
        {
            var listofAuthors = context.Authers.ToList();
            var list = new List<getallauthors>();
            foreach (var item in listofAuthors)
            {
                getallauthors get = new getallauthors()
                {
                    authorname = item.Name,
                    authorimage = item.AutherImage,
                    description = item.JobDescribtion
                };

                list.Add(get);
            }
            return list;
        }
        [HttpGet]
        public IEnumerable<getallpublishers> gatpublishers()
        {
            var listofPublishers = context.Publishers.ToList();
            var list = new List<getallpublishers>();
            foreach (var item in listofPublishers)
            {
                getallpublishers get = new getallpublishers()
                {
                    publishername = item.Name
                };

                list.Add(get);
            }
            return list;
        }
        [HttpGet]
        //[Route("User/get/{authorname:alpha}")]
        public List<booksofauthor> getbooksofauthor(string auther)
        {
            var author = context.Authers.FirstOrDefault(ww => ww.Name == auther);
            var listofbooks = context.Books.Where(ww => ww.AutherID == author.AutherID).ToList();
            var list = new List<booksofauthor>();
            foreach (var item in listofbooks)
            {
                booksofauthor book = new booksofauthor()
                {
                    bookname = item.Title,
                    bookimage = item.Image
                };
                list.Add(book);
            }
            return list;
        }
        [HttpGet]
        public getbookbysearch searchBooks(string book)
        {
            PublicherModel book1 = new PublicherModel();
            //var searchedbook = context.Books.FirstOrDefault(ww => ww.Title == book);
            var searchedbook = context.Books.FirstOrDefault(ww => ww.Title == book);
            var bookauthor = context.Authers.FirstOrDefault(ww => ww.AutherID == searchedbook.AutherID);
            var bookpublisher = context.Publishers.FirstOrDefault(ww => ww.PublisherID == searchedbook.PublisherID);
            getbookbysearch bookmodel = new getbookbysearch();
            bookmodel.Title = searchedbook.Title;
            bookmodel.Image = searchedbook.Image;
            bookmodel.NumberOfPage = searchedbook.NumberOfPage;
            bookmodel.Price = searchedbook.Price;
            bookmodel.PublishDate = searchedbook.PublishDate;
            bookmodel.PublisherName = bookpublisher.Name;
            bookmodel.AuthorName = bookauthor.Name;
            bookmodel.CategoryName = (context.Categories.FirstOrDefault(ww => ww.CategoryID == searchedbook.CategoryID).CategoryName);
            return bookmodel;
        }
        [HttpGet]
        public IEnumerable<getbooksnotborrowed> getbooksthatcanbeborrowed()
        {
            var notborrowedbooks = context.BorrowedBooks.Where(ww => ww.ISborrwed == false&&ww.Request==false).ToList();
            List<getbooksnotborrowed> listofnotborrowedbooks = new List<getbooksnotborrowed>();
            foreach (var item in notborrowedbooks)
            {

                getbooksnotborrowed g = new getbooksnotborrowed()
                {
                    ID=item.BorrowedBookID,
                    Title = item.Title,
                    Image = item.Image,
                    AutherName = item.AutherName,
                    NumberOfPage = item.NumberOfPage,
                    PublisherName = item.PublicherName
                };
                listofnotborrowedbooks.Add(g);

            }
            return listofnotborrowedbooks;
        }
        [HttpGet]

        public List<AddBook> Getbooks()
        {
            using (context = new LibraryContext())
            {
                List<AddBook> book = new List<AddBook>();
                var books = context.Books.ToList();
                foreach (var item in books)
                {
                    AddBook x = new AddBook();
                    x.Title = item.Title;
                    x.NumberOfPage = item.NumberOfPage;
                    x.Price = item.Price;
                    x.PublishDate = item.PublishDate;
                    x.Image = item.Image;
                    x.contentPDF = item.contentPDF;
                    x.PublisherName = (context.Publishers.FirstOrDefault(ww => ww.PublisherID == item.PublisherID).Name);
                    x.AutherName = (context.Authers.FirstOrDefault(ww => ww.AutherID == item.AutherID).Name);
                    x.CategoryName = (context.Categories.FirstOrDefault(ww => ww.CategoryID == item.CategoryID).CategoryName);
                    book.Add(x);

                }
                return book;
            }

        }
        [HttpGet]
        public List<AddBook> GetbooksByCategory(string name)
        {
            List<AddBook> bookCatgory = new List<AddBook>();
            using (context = new LibraryContext())
            {
                var x = context.Categories.FirstOrDefault(cc => cc.CategoryName == name);

                var bookByCat = context.Books.ToList();
                foreach (var item in bookByCat)
                {
                    if (item.CategoryID == x.CategoryID)
                    {
                        AddBook y = new AddBook();
                        y.Title = item.Title;
                        y.NumberOfPage = item.NumberOfPage;
                        y.Price = item.Price;
                        y.PublishDate = item.PublishDate;
                        y.Image = item.Image;
                        y.contentPDF = item.contentPDF;
                        y.PublisherName = (context.Publishers.FirstOrDefault(ww => ww.PublisherID == item.PublisherID).Name);
                        y.AutherName = (context.Authers.FirstOrDefault(ww => ww.AutherID == item.AutherID).Name);
                        y.CategoryName = x.CategoryName;
                        bookCatgory.Add(y);
                    }
                }
                return bookCatgory;
            }
        }

        [HttpGet]
        public AddAuther GetAuthweByName(string Auther)
        {
            AddAuther x = new AddAuther();
            var auther = context.Authers.FirstOrDefault(ww => ww.Name == Auther);
            x.AutherImage = auther.AutherImage;
            x.JobDescribtion= auther.JobDescribtion;
            x.Name= auther.Name ;
            return x;

        }
        [HttpPost]
        public int UserRequestForBorrow(BorrowBookModel book)
        {
            BorrowedBook Bbook = new BorrowedBook();
            Bbook.Title = book.Title;
            Bbook.AutherName = book.AutherName;
            Bbook.PublicherName = book.PublicherName;
            Bbook.NumberOfPage = book.NumberOfPage;
            Bbook.Image = book.Image;
            Bbook.TimeOfPost = DateTime.Now;
            Bbook.Request = null;
            Bbook.ISborrwed = null;
            Bbook.UserID = null;
            context.BorrowedBooks.Add(Bbook);
            context.SaveChanges();
            return Bbook.BorrowedBookID;
        }
        [HttpPost]
        public Boolean UserRequestForBorrow2(borrowbook2 b)
        {
            var book = context.BorrowedBooks.Find(b.bookID);
            book.Request = true;
            book.BookIdOfNewBook = b.newbookID;
            book.UserID = b.userID;

            book.TimeOfRequsetToBorrow = DateTime.Now;
            context.SaveChanges();
            return true;
        }



    }
}