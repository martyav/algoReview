# Given a certain amount to pay all hires, find the difference between the number of people you can hire
# if you pay each of your employees the most or the least amount possible.
#
# 1. You will always have at least one employee, who will be paid one dollar.
# 2. The next hire up must never be paid more than double their immediate subordinate.
# 3. The next hire up must never make less than the sum of their two immediate subordinates.
# 4. You must keep hiring until your next hire's pay matches or exceeds the total money you have left
#    to pay them
#
# Note that, if you have two employees, the second will always be paid either the same as the first
# (0 + 1) or exactly double the first (2 * 1)

def diff_between_pay_strategies(total_money):
  def _hires_per_stingiest_strategy(money):
    next_pay_level = 1
    pool = money - 1
    salaries = [1]
        
    while next_pay_level < pool:
      if len(salaries) == 1:
        next_pay_level = 1
      else:
        next_pay_level = salaries[-1] + salaries[-2]
          
      if next_pay_level > pool:
        break
      else:
        pool -= next_pay_level
        salaries.append(next_pay_level)
      
    return len(salaries)
        
  def _hires_per_most_generous_strategy(money):
    next_pay_level = 1
    pool = money - 1
    salaries = [1]
        
    while next_pay_level < pool:
      possible_pay = next_pay_level * 2
            
      if possible_pay > pool:
        possible_pay = (possible_pay - pool) + next_pay_level
                
        if len(salaries) > 2 and possible_pay > salaries[-1] + salaries[-2]:
          break
                
      next_pay_level = possible_pay
      pool -= next_pay_level
      salaries.append(next_pay_level)
        
    return len(salaries)    
        
  return _hires_per_stingiest_strategy(total_money) - _hires_per_most_generous_strategy(total_money)
