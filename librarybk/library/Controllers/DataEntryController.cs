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
    public class DataEntryController : ApiController
    {
        LibraryContext context;
        public DataEntryController()
        {
            context = new LibraryContext();
        }
        //login DataEntry 
        [HttpPost]

        public bool PostForLogin(DataEntryView dataentry)
        {
            var x = context.DataEntries.FirstOrDefault(ww => ww.userName == dataentry.userName);
            if (x == null)
            {
                if (x.Password == dataentry.Password)
                {
                    return true;
                }
                else
                {
                    return false;

                }
            }
            else
            {
                return false;
            }
        }
        //Add Auther
        [HttpPost]
        public int PostForAddAuther(AddAuther auther1)
        {

            var chackAutherName = context.Authers.FirstOrDefault(ww => ww.Name == auther1.Name);
            if (chackAutherName == null)
            {
                Auther auther = new Auther();
                auther.Name = auther1.Name;
                auther.AutherImage = auther1.AutherImage;
                auther.JobDescribtion = auther1.JobDescribtion;
                context.Authers.Add(auther);
                context.SaveChanges();
                return 1;
            }
            else
            {
                return 0;
            }

        }

        //Add publisher
        [HttpPost]
        public int post(PublicherModel publichermoudel)
        {
            if ((context.Publishers.FirstOrDefault(ww => ww.Name == publichermoudel.Name) == null))

            {
                publisher publisher = new publisher();
                publisher.Name = publichermoudel.Name;
                context.Publishers.Add(publisher);
                context.SaveChanges();
                return 1;
            }
            else
            {
                return 0;
            }
        }
        //add New Book
        [HttpPost]
        public bool postForNewBook(AddBook bookView)
        {
            if ((context.Books.FirstOrDefault(ww => ww.Title == bookView.Title) == null))

            {
                Book book = new Book();
                var authering = context.Authers.FirstOrDefault(ww => ww.Name == bookView.AutherName);
                var categoring = context.Categories.FirstOrDefault(ww => ww.CategoryName == bookView.CategoryName);
                var publishing = context.Publishers.FirstOrDefault(ww => ww.Name == bookView.PublisherName);

                book.AutherID = authering.AutherID;
                book.CategoryID = categoring.CategoryID;
                book.PublisherID = publishing.PublisherID;
                book.PublishDate = bookView.PublishDate;
                book.Title = bookView.Title;
                book.NumberOfPage = bookView.NumberOfPage;
                book.contentPDF = bookView.contentPDF;
                book.Price = bookView.Price;
                book.Image = bookView.Image;
                context.Books.Add(book);
                context.SaveChanges();
                return true;
            }
            else
            {
                return false;

            }
        }


        //GET ALL BOOKS 
      
        /// add number of copy of exsist book
         [HttpPost]
        public int putForCopy(CopyNumberView copy)
        {
            Book book = new Book();
            var b = context.Books.FirstOrDefault(ww => ww.Title == copy.Title);
            b.NumberOfCopys = b.NumberOfCopys+ copy.NumberOfCopys;
            context.SaveChanges();
            return 1;
        }

        [HttpPost]
        public int addcategory(PublicherModel cat)
        {

            var checkcategory = context.Categories.FirstOrDefault(ww => ww.CategoryName == cat.Name);
            if (checkcategory == null)
            {
                Category c = new Category();
                c.CategoryName = cat.Name;
                context.Categories.Add(c);
                context.SaveChanges();
                return 1;
            }
            else
            {
                return 0;
            }

        }
        [HttpPost]
        public int addpublisher(PublicherModel publish)
        {

            var checkpublisher = context.Publishers.FirstOrDefault(ww => ww.Name == publish.Name);
            if (checkpublisher == null)
            {
                publisher p = new publisher();
                p.Name = publish.Name;
                
                context.Publishers.Add(p);
                context.SaveChanges();
                return 1;
            }
            else
            {
                return 0;
            }

        }
        [HttpPost]
        public Boolean PostForBorroweBook (BorrowBookModel book)
        {

            BorrowedBook Bbook = new BorrowedBook();
            Bbook.Title = book.Title;
            Bbook.AutherName = book.AutherName;
            Bbook.PublicherName = book.PublicherName;
            Bbook.NumberOfPage = book.NumberOfPage;
            Bbook.Image = book.Image;
            Bbook.TimeOfPost = DateTime.Now;
            Bbook.Request = false;
            Bbook.ISborrwed = false;
            Bbook.UserID = null;
            context.BorrowedBooks.Add(Bbook);
            context.SaveChanges();
            return true;

        }

       
        [HttpGet]
        public Boolean AcceptBorrowBooke(int BookID)
        {
            var Book = context.BorrowedBooks.Find(BookID);
            var newBook = context.BorrowedBooks.Find(Book.BookIdOfNewBook);
            Book.ISborrwed = true;
            newBook.Request = false;
            newBook.ISborrwed = false;
            context.SaveChanges();
            return true;
        }

        [HttpGet]
        public Boolean RejectBorrowBooke(int BookID)
        {
            var Book = context.BorrowedBooks.Find(BookID);
            var newBook = context.BorrowedBooks.Find(Book.BookIdOfNewBook);
            Book.Request = false;
            Book.BookIdOfNewBook = null;
            context.BorrowedBooks.Remove(newBook);
            context.SaveChanges();
            return true;
        }
        [HttpGet]
        public BorrowBookModel ShowBorrowBook(int BookID)
        {
            var Book = context.BorrowedBooks.Find(BookID);
            BorrowBookModel NBook = new BorrowBookModel();
            NBook.BorrowedBookID = Book.BorrowedBookID;
            NBook.AutherName = Book.AutherName;
            NBook.Title = Book.Title;
            NBook.PublicherName = Book.PublicherName;
            NBook.NumberOfPage = Book.NumberOfPage;
            NBook.Image = Book.Image;
            return NBook;
       
           


    }
        [HttpGet]
        public BorrowBookModel ShowNewBorrowBook(int BookID)
        {
            var Book = context.BorrowedBooks.Find(BookID);

            var NewBook = context.BorrowedBooks.Find(Book.BookIdOfNewBook);
            BorrowBookModel NBook = new BorrowBookModel();
            NBook.BorrowedBookID = NewBook.BorrowedBookID;
            NBook.AutherName = NewBook.AutherName;
            NBook.Title = NewBook.Title;
            NBook.PublicherName = NewBook.PublicherName;
            NBook.NumberOfPage = NewBook.NumberOfPage;
            NBook.Image = NewBook.Image;
            return NBook;
        }
        [HttpGet]
        public ShowUserModel ShowUserBorrow(int BookID)
        {
            var Book = context.BorrowedBooks.Find(BookID);
            var user = context.Users.Find(Book.UserID);
            ShowUserModel userData = new ShowUserModel();
            userData.Name = user.Name;
            userData.Address = user.Address;
            userData.PhoneNumber = user.PhoneNumber;
            userData.Email = user.Email;
            return userData;

        }
        [HttpGet]
        public IEnumerable<getbooksnotborrowed> requstedbooks()
        {
            var notborrowedbooks = context.BorrowedBooks.Where(ww => ww.Request == true&&ww.ISborrwed==false).ToList();
           
            List<getbooksnotborrowed> listofnotborrowedbooks = new List<getbooksnotborrowed>();
            foreach (var item in notborrowedbooks)
            {

                getbooksnotborrowed g = new getbooksnotborrowed()
                {
                    ID = item.BorrowedBookID,
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


        [HttpPost]
        public IEnumerable<getbooksnotborrowed> ShowListBorrowBook(IEnumerable<getbooksnotborrowed> cat)
        {
            List<getbooksnotborrowed> list1 = new List<getbooksnotborrowed>();
            foreach (var item in cat)
            {


                var Book = context.BorrowedBooks.Find(item.ID);
                var NewBook = context.BorrowedBooks.Find(Book.BookIdOfNewBook);
                getbooksnotborrowed NBook = new getbooksnotborrowed();
                NBook.ID = NewBook.BorrowedBookID;
                NBook.AutherName = NewBook.AutherName;
                NBook.Title = NewBook.Title;
                NBook.PublisherName = NewBook.PublicherName;
                NBook.NumberOfPage = NewBook.NumberOfPage;
                NBook.Image = NewBook.Image;
                list1.Add(NBook);
            }
            return list1;

        }


    }

}
