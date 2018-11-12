'''
Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- 
then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "def fix_teen(n):"that 
takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3
times (i.e. "decomposition"). Define the helper below and at the same indent level as the main no_teen_sum().
'''

def fix_teen(n):
  if n > 12 and n < 20:
    if n == 15 or n == 16:
      return n
    else:
      return 0
      
  return n

def no_teen_sum(a, b, c):
  sum = 0
  arr = [a,b,c]
    
  for index in range(3):
    current = arr[index]
    value_to_add = fix_teen(current)
    
    sum += value_to_add
    
  return sum
  
