var ThirdpartyLib;
(function (ThirdpartyLib) {
    class LibraryItem {
        get copies() {
            return this._copies;
        }
        set copies(value) {
            this._copies = value;
        }
        display() {
            throw new Error("Method not implemented");
        }
    }
    ThirdpartyLib.LibraryItem = LibraryItem;
    class Book extends LibraryItem {
        constructor(author, title, copies) {
            super();
            this.author = author;
            this.title = title;
            this.copies = copies;
        }
        display() {
            console.log("Book:");
            console.log("--Author: " + this.author);
            console.log("--Title: " + this.title);
            console.log("--# Copies: " + this.copies);
            console.log("");
        }
    }
    ThirdpartyLib.Book = Book;
    class Video extends LibraryItem {
        constructor(director, title, playTime, copies) {
            super();
            this.director = director;
            this.title = title;
            this.playTime = playTime;
            this.copies = copies;
        }
        display() {
            console.log("Video:");
            console.log("--Director: " + this.director);
            console.log("--Title: " + this.title);
            console.log("--Play Time: " + this.playTime);
            console.log("--# Copies: " + this.copies);
            console.log("");
        }
    }
    ThirdpartyLib.Video = Video;
})(ThirdpartyLib || (ThirdpartyLib = {}));
var Decorator;
(function (Decorator_1) {
    class Decorator {
        constructor(libraryItem) {
            this._libraryItem = libraryItem;
        }
        get libraryItem() {
            return this._libraryItem;
        }
        get copies() {
            return this._libraryItem.copies;
        }
        set copies(value) {
            this._libraryItem.copies = value;
        }
        display() {
            this._libraryItem.display();
        }
    }
    class Borrowable extends Decorator {
        constructor(libraryItem) {
            super(libraryItem);
            this.borrowers = new Array();
        }
        borrowItem(name) {
            this.borrowers.push(name);
            this.libraryItem.copies--;
        }
        returnItem(name) {
            this.borrowers.splice(this.borrowers.indexOf(name));
            this.libraryItem.copies++;
        }
        display() {
            super.display();
            console.log("--borrowers:");
            this.borrowers.forEach((borrower) => {
                console.log("----borrower: " + borrower);
            });
            console.log("------");
        }
    }
    var book = new ThirdpartyLib.Book("Worley", "Inside ASP.NET", 10);
    book.display();
    var borrowableBook = new Borrowable(book);
    borrowableBook.borrowItem("Book borrower #1");
    borrowableBook.borrowItem("Book borrower #2");
    borrowableBook.display();
    var video = new ThirdpartyLib.Video("Spielberg", "Jaws", 23, 92);
    video.display();
    var borrowableVideo = new Borrowable(video);
    borrowableVideo.borrowItem("Video borrower #1");
    borrowableVideo.borrowItem("Video borrower #2");
    borrowableVideo.display();
})(Decorator || (Decorator = {}));
//# sourceMappingURL=decorator.js.map