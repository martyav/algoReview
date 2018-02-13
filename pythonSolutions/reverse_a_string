# In Python, strings are immutable, so we cannot really
# reverse a string in place.
#
# The closest we can come is, making an array of the string 
# and reversing that array in place, then return the string
# created when we join up the array.
#
# ...which kind of defeats the purpose of doing it in place, 
# namely so we're not creating new objects in memory. 
# 
# However, doing it in this way demonstrates you know how to
# reverse /arrays/ in place, at least...

def reverse_string(string):
  list = []
  list.extend(string)
  
  for index in range(len(string)/2):
    list[index], list[len(list) - 1 - index] = list[len(list) - 1 - index], list[index]

  return "".join(list)
