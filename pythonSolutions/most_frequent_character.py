# Frequency tables, frequency hashes, frequency dictionaries...
#
# Tomayto, tomahto, we're tracking a character alongside how many times it appears in a string.
#
# One small optimization is to update the most-frequently-seen character at the same time as
# we update the dictionary. 
#
# Otherwise, we'd have to write a little more code to loop through the dictionary, to see where 
# the most frequent character is.

def most_frequent_character(string):
  if len(string) == 0:
    return None
  
  if len(string) == 1:
    return 1
  
  frequency_dict = {}
  most_frequent_so_far = ("", 0)
  
  for char in string:
    if char in frequency_dict:
      frequency_dict[char] += 1
    else:
      frequency_dict[char] = 1
      
    if frequency_dict[char] > most_frequent_so_far[1]:
      most_frequent_so_far = (char, frequency_dict[char])
  
  return most_frequent_so_far[0]
