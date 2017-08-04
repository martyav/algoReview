func threeShortestWords(_ arr: [String]) -> [String]? {

    guard arr.count > 2 else {
        print("How can we find the 3 shortest words in an array that's smaller than 3??")
        return nil
    }

    var shortestOfAll: (word: String, length: Int) = ("", Int.max)
    var secondShortest: (word: String, length: Int) = ("", Int.max)
    var thirdShortest: (word: String, length: Int) = ("", Int.max)

    var topShortest = [String]()
    var runningTally = [String : Int]()

    for word in arr {

        runningTally[word] = word.characters.count

    }

    for item in runningTally {

        if item.value < shortestOfAll.length {

            thirdShortest = secondShortest

            secondShortest = shortestOfAll

            shortestOfAll.word = item.key

            shortestOfAll.length = item.value

        } else if item.value < secondShortest.length {

            thirdShortest = secondShortest

            secondShortest.word = item.key

            secondShortest.length = item.value

        } else if item.value < thirdShortest.length {

            thirdShortest.word = item.key

            thirdShortest.length = item.value
        }
    }

    _ = [

        shortestOfAll,

        secondShortest,

        thirdShortest

        ].map { topShortest.append($0.word) }

    return topShortest
}

