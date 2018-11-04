# Given an array of ints, return True if the array contains a 2 next to a 2 somewhere.

def has22(nums):
  if nums.count(2) > 1:

    for index in range(1, len(nums)):
      if nums[index] == nums[index - 1] and nums[index] == 2:
        return True
  
  return False
