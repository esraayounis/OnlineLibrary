namespace library.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class createdb : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Admins",
                c => new
                    {
                        AdminID = c.Int(nullable: false, identity: true),
                        userName = c.String(),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.AdminID);
            
            CreateTable(
                "dbo.Authers",
                c => new
                    {
                        AutherID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        AutherImage = c.String(),
                        JobDescribtion = c.String(),
                    })
                .PrimaryKey(t => t.AutherID);
            
            CreateTable(
                "dbo.Books",
                c => new
                    {
                        BookID = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        NumberOfPage = c.Int(nullable: false),
                        contentPDF = c.String(),
                        Image = c.String(),
                        NumberOfCopys = c.Int(nullable: false),
                        Price = c.Double(nullable: false),
                        PublishDate = c.DateTime(nullable: false),
                        ReateBook = c.Int(nullable: false),
                        NumberOfCustomerRate = c.Int(nullable: false),
                        AutherID = c.Int(nullable: false),
                        CategoryID = c.Int(nullable: false),
                        PublisherID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.BookID)
                .ForeignKey("dbo.Authers", t => t.AutherID, cascadeDelete: true)
                .ForeignKey("dbo.Categories", t => t.CategoryID, cascadeDelete: true)
                .ForeignKey("dbo.publishers", t => t.PublisherID, cascadeDelete: true)
                .Index(t => t.AutherID)
                .Index(t => t.CategoryID)
                .Index(t => t.PublisherID);
            
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        CategoryID = c.Int(nullable: false, identity: true),
                        CategoryName = c.String(),
                    })
                .PrimaryKey(t => t.CategoryID);
            
            CreateTable(
                "dbo.publishers",
                c => new
                    {
                        PublisherID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.PublisherID);
            
            CreateTable(
                "dbo.Purchases",
                c => new
                    {
                        PurchaseID = c.Int(nullable: false, identity: true),
                        UserID = c.Int(nullable: false),
                        PurchaseData = c.DateTime(nullable: false),
                        BookID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.PurchaseID)
                .ForeignKey("dbo.Books", t => t.BookID, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.UserID, cascadeDelete: true)
                .Index(t => t.UserID)
                .Index(t => t.BookID);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Address = c.String(),
                        PhoneNumber = c.String(),
                        Email = c.String(),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.UserID);
            
            CreateTable(
                "dbo.BorrowedBooks",
                c => new
                    {
                        BorrowedBookID = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        AutherName = c.String(),
                        PublicherName = c.String(),
                        NumberOfPage = c.Int(nullable: false),
                        Image = c.String(),
                        TimeOfRequsetToBorrow = c.DateTime(),
                        TimeOfPost = c.DateTime(nullable: false),
                        Request = c.Boolean(),
                        ISborrwed = c.Boolean(),
                        BookIdOfNewBook = c.Int(),
                        UserID = c.Int(),
                    })
                .PrimaryKey(t => t.BorrowedBookID)
                .ForeignKey("dbo.Users", t => t.UserID)
                .Index(t => t.UserID);
            
            CreateTable(
                "dbo.DataEntries",
                c => new
                    {
                        DataEntryID = c.Int(nullable: false, identity: true),
                        userName = c.String(),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.DataEntryID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Purchases", "UserID", "dbo.Users");
            DropForeignKey("dbo.BorrowedBooks", "UserID", "dbo.Users");
            DropForeignKey("dbo.Purchases", "BookID", "dbo.Books");
            DropForeignKey("dbo.Books", "PublisherID", "dbo.publishers");
            DropForeignKey("dbo.Books", "CategoryID", "dbo.Categories");
            DropForeignKey("dbo.Books", "AutherID", "dbo.Authers");
            DropIndex("dbo.BorrowedBooks", new[] { "UserID" });
            DropIndex("dbo.Purchases", new[] { "BookID" });
            DropIndex("dbo.Purchases", new[] { "UserID" });
            DropIndex("dbo.Books", new[] { "PublisherID" });
            DropIndex("dbo.Books", new[] { "CategoryID" });
            DropIndex("dbo.Books", new[] { "AutherID" });
            DropTable("dbo.DataEntries");
            DropTable("dbo.BorrowedBooks");
            DropTable("dbo.Users");
            DropTable("dbo.Purchases");
            DropTable("dbo.publishers");
            DropTable("dbo.Categories");
            DropTable("dbo.Books");
            DropTable("dbo.Authers");
            DropTable("dbo.Admins");
        }
    }
}
