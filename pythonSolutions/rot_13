# Return a decoded string when given a message where
# all the letters from a to z (but not A to Z) have been converted
# to their opposite-side-of-the-alphabet counterparts.
# 
# For example, a becomes z, y becomes b, etc.
#
# Punctuation and any uppercase letters should be ignored.

def translate(message):
  def _decode(lowercase_letter):
    ascii_value = ord(lowercase_letter)
    begining_of_alphabet = 97
    distance_from_mid_point = 109 - ascii_value
    total_distance_to_decoded_letter = distance_from_mid_point + 13
    letter_we_want = chr(begining_of_alphabet + total_distance_to_decoded_letter)
    
    return letter_we_want
  
  translated_message = ""
    
  for character in message:
    if character.isalpha() and character == character.lower():
      translated_message += _decode(character)
    else:
      translated_message += character
    
  return translated_message
