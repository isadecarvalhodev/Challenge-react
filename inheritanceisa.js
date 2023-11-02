function BooksParent(ownerName,favoriteBooks) {
    this.ownerName = ownerName;  
    this.favoriteBooks = [];
    }
  
    BooksParent.prototype.addFavoriteBook = function(bookName) {
      if (!bookName.includes("Great")) {
        this.favoriteBooks.push(bookName);
      }
    };
  
    BooksParent.prototype.printFavoriteBooks = function() {
      console.log(`${String(this.ownerName)}Favorite Books: ${String(this.favoriteBooks.length)}`);
      for (let bookName of this.favoriteBooks) {
        console.log(bookName);
      }
    };
  
    BooksParent.prototype.sortFavoriteBooksByAlphabeticDescendingOrder = function() {
      this.favoriteBooks = this.favoriteBooks.sort((a,b) => b.localeCompare(a));
      console.log(this.favoriteBooks);
    }

    function CardBox(ownerName, favoriteBooks) {
        BooksParent.call(this,ownerName,favoriteBooks);
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
  

 
  var myBooks = new BooksParent("Luisa");
  var myCardBox = new CardBox("Maria", ["Livro do Desassossego", 
  "Moby dick", "A menina do Mar"
]);



  
  var BOOK_API = "https://some.url/api";
  var myBooks = new BooksParent("Lisa ");
  loadBooks(myBooks);
  loadBooks(myCardBox);

  
  
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
  