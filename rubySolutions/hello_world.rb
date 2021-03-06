# First program

puts "Hello world."

# Hackerrank challenge: https://www.hackerrank.com/challenges/ruby-strings-encoding

def transcode(string)
    ''' 
    This is the proper way to alter the input string to a different encoding
    return string.encode!(Encoding::UTF_8)

    The below passes the hackerrank challenge, but does not change the internal byte representation
    '''
    string.force_encoding('UTF-8')
end

# Boring, basic loop

for number in 1..10
    puts number
end

# Ruby .each method loop

array = [1, 2, 3, 10, 20, 30]

array.each do |number|
	if number < 10
		puts number + 10
	elsif number >= 10
		puts number + (number/10)
	end
end

# Hackerrank simple array sum: https://www.hackerrank.com/challenges/simple-array-sum

def simpleArraySum(n, ar)
    return ar.reduce(:+)
end

n = gets.strip.to_i
ar = gets.strip
ar = ar.split(' ').map(&:to_i)
result = simpleArraySum(n, ar)
puts result;
