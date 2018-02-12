'''
http://codingbat.com/prob/p190859?parent=/doc/practice/makebricks-solution-code.html

We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). 
Return the number of small bars to use, assuming we always use big bars before small bars. 
Return -1 if it can't be done.

make_chocolate(4, 1, 9) → 4
make_chocolate(4, 1, 10) → -1
make_chocolate(4, 1, 7) → 2
'''

def make_chocolate(small, big, goal):
  # Check if we have exactly the number of big bars needed and don't need to use any small bars
  
  if (goal % 5 == 0) and (big * 5 >= goal):
    return 0
    
  # Check if we have exactly the number of small bars needed, and no big bars
  
  if (big == 0) and small >= goal:
    return goal
  
  # Check if we have very close to enough big bars, but need to use 4 or less small bars to cover the 
  # difference
  
  if (goal % 5 > 0) and (goal/5 <= big) and (goal % 5 <= small):
    return goal % 5
  
  # Check if we have enough bars in combination to cover the goal, but we have many more small bars than 
  # big bars
  
  if ((big * 5) + small >= goal) and ((big * 5) < goal):
    return abs((big * 5) - goal)
    
  return -1
