'''
https://www.hackerrank.com/challenges/reduced-string/problem

Steve has a string, s, consisting of n lowercase English alphabetic letters. In one operation, he can delete any pair
of adjacent letters with the same value. For example, string "aabcc" would become either "aab" or "bcc" after 1 
operation.

Steve wants to reduce s as much as possible. To do this, he will repeat the above operation as many times as it can 
be performed. Help Steve out by finding and printing s's non-reducible form!

Note: If the final string is empty, print Empty String.
'''

def super_reduced_string(s):
    if len(s) == 0:
        return "Empty String"
    
    for index in range(len(s) - 1):
        if s[index] == s[index + 1]:
            return super_reduced_string(s[:index] + s[index + 2:])
    
    return s
