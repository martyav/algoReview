# See https://github.com/martyav/algoReview/blob/master/swiftSolutions/birthdayCandles

puts "Give me some candle heights. Type 'quit' to quit"
print "> "

heightOfCandles = []

while (input = $stdin.gets.chomp) != "quit"
     heightOfCandles << input.to_i
     print "> "
end

'''
Note -- we need that weird syntax around the input. No assignment,
no parentheses, no end to loop.
'''

tallestCandle = heightOfCandles.max
numberOfTallCandles = 0

heightOfCandles.each do |candle|
     numberOfTallCandles += 1 if candle == tallestCandle
end

puts "There are #{numberOfTallCandles} tallest candles to blow out!"
