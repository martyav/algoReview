class Dog {
    var age: Int
    var name: String
    var breed: String
    
    init (age: Int, name: String, breed: String) {
        self.age = age
        self.name = name
        self.breed = breed
    }
}

let dogOne = Dog(age: 4, name: "Scooby", breed: "Great Dane")
let dogTwo = Dog(age: 1, name: "Scrappy", breed: "Great Dane")
let dogThree = Dog(age: 6, name: "Snoopy", breed: "Beagle")
let dogFour = Dog(age: 5, name: "Odie", breed: "Beagle")
let dogFive = Dog(age: 3, name: "Poochie", breed: "Beagle")

let earr = [dogOne, dogTwo, dogThree, dogFour, dogFive]

func findOneExample(arr: [Dog]) -> [String] {
    var uniques: [String] = []

    var listOfBreedsSoFar: [String] = []

    for dog in arr {
        if listOfBreedsSoFar.contains(dog.breed) {
                continue
        } else {
            uniques.append(dog.name)
            listOfBreedsSoFar.append(dog.breed)
        }
    }

    return uniques
}

print(findOneExample(arr: earr))
