/*
Colleen is turning n years old! Therefore, she has n candles of various heights on her cake. Because the taller candles tower over the shorter ones, Colleen can only blow out the tallest candles.

Given the height for each individual candle, find and print the number of candles she can successfully blow out.
*/

let numOfCandles = Int(readLine()!)!
let heightOfCandles = readLine()!.components(separatedBy: " ").map{ Int($0)! }
let tallestCandleValue = heightOfCandles.max()
var numberOfTallestCandles = 0

for index in 0..<numOfCandles where heightOfCandles[index] == tallestCandleValue {
    numberOfTallestCandles += 1
}
