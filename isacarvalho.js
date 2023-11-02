function Bookshelf(ownerName,favoriteBooks) {
  this.ownerName = ownerName;  
  this.favoriteBooks = [];
  }

  Bookshelf.prototype.addFavoriteBook = function(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  };

  Bookshelf.prototype.printFavoriteBooks = function() {
    console.log(`${String(this.ownerName)}Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  };

  Bookshelf.prototype.sortFavoriteBooksByAlphabeticDescendingOrder = function() {
    this.favoriteBooks = this.favoriteBooks.sort((a,b) => b.localeCompare(a));
    console.log(this.favoriteBooks);
  }


function loadBooks(bookshelf) {
  fakeAjax(BOOK_API, function onBooks(bookNames) {
    for (let bookName of bookNames) {
      bookshelf.addFavoriteBook(bookName);
    }
    bookshelf.printFavoriteBooks();
    bookshelf.sortFavoriteBooksByAlphabeticDescendingOrder();
  });
}

var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf("Lisa ");
loadBooks(myBooks);


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}
