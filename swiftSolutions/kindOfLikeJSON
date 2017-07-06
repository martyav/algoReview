class Book {
    var title: String
    var author: String
    init(title: String, author: String) {
        self.title = title
        self.author = author
    }
}

var sampleInput = [ ["title" : "The name of the Wind", "author": "Patrick Rothfuss"] , ["title": "Ubik", "author": "Philip K. Dick"] ]

/*
 Write a function that takes an Array of Dictionaries and a closure as input, and returns Void.  The closure should take an Array of Books as input and return Void.
 
 Your function should convert the Array of Dictionaries into an Array of Books, then call your closure passing in your Array of Books.
 
 After you have completed writing your function, you should call your function passing in sampleInput, and a closure that prints out all of the titles in an Array of Books.
 */

func convertDictionaries(groupOfDictionaries: [[String:String]], printTitles: (_ groupOfBooks: [Book]) -> Void ) -> Void {
    var convertedToBooks: [Book] = []
    
    for item in groupOfDictionaries {
        if let title = item["title"],
            let author = item["author"] {
            let newBook = Book(title: title, author: author)
            convertedToBooks.append(newBook)
        } else { continue }
    }
    
    printTitles(convertedToBooks)
}

let printTitles = { (arrOfBooks: [Book]) in
    for item in arrOfBooks {
        print(item.title)
    }
}

convertDictionaries(groupOfDictionaries: sampleInput, printTitles: printTitles)
