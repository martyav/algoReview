// Convert AM/PM time to military time -- https://www.hackerrank.com/challenges/time-conversion/problem

// Read the string
var s = readLine()!
var timeStamp:[Character] = []

for char in s {
    timeStamp.append(char)
}

let hour = String(timeStamp[0]) + String(timeStamp[1])
let hourAsInt = Int((String(timeStamp[0])) + (String(timeStamp[1])))!

func militaryTime(_ time: [Character]) -> String {
    var newHour = ""
    
    func stampMinusLetters(_ time: [Character]) -> String {
        return String(time[0...(time.count - 3)])
    }
    
    switch time[8] {
    case "A":
        guard hourAsInt >= 12 else { 
            return stampMinusLetters(time)
        }
        
        if hour == "12" {
            newHour = "00"
        } 
    case "P":
        guard hour != "12" else {
            return stampMinusLetters(time)
        } 
        
        if hourAsInt < 12 { 
            newHour = String(hourAsInt + 12)
        }
    default: 
        break
    }
    
    return String(newHour) + String(time[2...(time.count - 3)])
}
