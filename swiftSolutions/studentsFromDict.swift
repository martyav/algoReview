/*
 Sample input:
 let arrayOne = ["Amber", "Ana", "Annie", "Cristopher"]
 let arrayTwo = ["Spadafora", "Ma", "Tung", "Chavez"]
 
 class Student {
 let firstName: String
 let lastName: String
 init(first: String, last: String) {
 self.firstName = first
 self.lastName = last
 }
 }
 
 Write a function that takes two Arrays of Strings as input, and returns a dictionary mapping the value at each index of the first Array to the value at each corresponding index of the second Array.  Assume the arrays are both of size n.
 
 Then write a function that takes a dictionary as input and returns an Array of Student objects.
 */


let arrayOne = ["Amber", "Ana", "Annie", "Cristopher"]
let arrayTwo = ["Spadafora", "Ma", "Tung", "Chavez"]

class Student {
    let firstName: String
    let lastName: String
    init(first: String, last: String) {
        self.firstName = first
        self.lastName = last
    }
}

func makeDictFrom(arr1: [String], arr2: [String]) -> [String:String] {
    let n = arr1.count
    var ourDict: [String:String] = [:]

    for index in 0..<n {
        ourDict[arr1[index]] = arr2[index]
    }

    return ourDict
}

var studentArr = makeDictFrom(arr1: arrayOne, arr2: arrayTwo)

func makeStudentFrom(dict: [String:String]) -> [Student] {
    var students = [Student]()

    for (k,v) in dict {
        let firstName = k
        let lastName = v
        let currentstudent = Student(first: firstName, last: lastName)
        students.append(currentstudent)
    }
    return students
}

makeStudentFrom(dict: studentArr)
