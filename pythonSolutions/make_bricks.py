'''
http://codingbat.com/prob/p118406

We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch 
each) and big bricks (5 inches each). Return True if it is possible to make the goal by choosing 
from the given bricks. This is a little harder than it looks and can be done without any loops. 
See also: Introduction to MakeBricks

make_bricks(3, 1, 8) → True
make_bricks(3, 1, 9) → False
make_bricks(3, 2, 10) → True
'''

def make_bricks(small, big, goal):
  # check if we are able to use only one pile to meet our goal, without 
  # making up the difference with bricks from another pile
  
  if (goal <= small) or (goal % 5 == 0 and goal/5 <= big): 
    return True
  
  # check if we have almost the exact amount of small bricks to meet the
  # goal, but we need to take some from the big pile to cover our butts
  
  elif (goal % small == 5 and big > 0):
      return True
  
  # check if we have almost the exact amount of big bricks to meet our goal,
  # but we need to take some from the small pile to cover our butts
  
  elif (goal <= (big * 5) + small) and (goal % 5 <= small):
    return True
  
  return False
