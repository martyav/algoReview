import UIKit

//: # Examples of different kinds of Big O runtime

//: ## Constant Time

func printOneArrayItem(_ arr:[Int], index: Int) {
    print(arr[index])
}

//: ## Linear Time

func printAllArrayItems(_ arr:[Int]) {
    for item in arr {
        print(item)
    }
}

//: ## Quadratic Time

func printDeck(suits: [Character], nums: [String]) {
    for suit in suits {
        for num in nums {
            print("The \(num) of \(suit)s.")
        }
    }
}

//: ## Cubic Time

func printPokemon(names: [String], areas: [Int], regions: [String]) {
    for region in regions {
        for area in areas {
            for name in names {
                print(region, area, name)
            }
        }
    }
}

//: ## Linearithmic Time

func orderPokemonByName(box: [String]) {
    let sortedPokemon = box.sorted(by: <)
    print(sortedPokemon)
}
