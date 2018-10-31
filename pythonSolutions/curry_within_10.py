def near_hundred(n):
  def within10(a): 
    def near100():
      return abs(100 - a) <= 10
      
    def near200():
      return abs(200 - a) <= 10
    
    return near100() or near200()
    
  return within10(n)
  
  # Baby's first curry
