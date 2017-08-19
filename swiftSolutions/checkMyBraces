/*
 https://leetcode.com/problems/valid-parentheses/

 Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

func checkMy(braces: String) -> Bool {

    let bracesArr = Array(braces.characters)

    if bracesArr.count <= 1 { return false }

    var countParentheses = 0
    var countCurlyBraces = 0
    var countSquareBraces = 0

    for index in 0..<bracesArr.count {
        guard bracesArr.count >= index + 1 else { return false }

        switch bracesArr[index] {
        case "(":
            countParentheses += 1

            if bracesArr[index + 1] == ")" { continue }
            else {
                if !bracesArr[index..<bracesArr.count].contains(")") { return false }
            }

        case "[":
            countSquareBraces += 1

            if bracesArr[index + 1] == "]" { continue }
            else {
                if !bracesArr[index..<bracesArr.count].contains("]") { return false }
            }

        case "{":
            countCurlyBraces += 1

            if bracesArr[index + 1] == "}" { continue }
            else {
                if !bracesArr[index..<bracesArr.count].contains("}") { return false }
            }

        case ")":
            countParentheses += 1

            if bracesArr[index - 1] == "(" { continue }
            else {
                if countParentheses % 2 != 0 || !bracesArr[0..<index].contains("(") { return false }
            }

        case "]":
            countSquareBraces += 1

            if bracesArr[index - 1] == "[" { continue }
            else {
                if countParentheses % 2 != 0 || !bracesArr[0..<index].contains("[") { return false }
            }
            
        case "}":
            countCurlyBraces += 1
            
            if bracesArr[index - 1] == "{" { continue }
            else {
                if countParentheses % 2 != 0 || !bracesArr[0..<index].contains("{") { return false }
            }
            
        default:
            continue
        }
    }

    return true
}

checkMy(braces: "([({)])")

