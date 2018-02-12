# In a hallway marked by -'s, people are represented by < and > characters.
# The points of the angle brackets denote direction of movement. 
#
# Count the numbers of times people will pass by and individually greet each other, 
# assuming that all people walk at the same rate and keep a constant speed.
#
# Sample input: ">-<-<"
#
# A hallway of - lines, with two < people walking left and one > person walking right.
#
# The > person will greet each of the < people (1, 2 greetings) and they will greet 
# the > individually (3, 4 greetings), but the < walkers will never greet each other 
# because they will never pass each other. They are following one another at a constant 
# rate!
#
# Therefore, the total number of greetings in this scenario is 4.

def count_the_greetings(s):
    count = 0
    limit = len(s)
    
    if limit <= 1:
        return count
        
    for index in range(limit):
        if s[index] == "<":
            if index == 0:
                continue
            else:
                for secondary_index in range(index):
                    if s[secondary_index] == ">":
                        count += 2
    
    return count
