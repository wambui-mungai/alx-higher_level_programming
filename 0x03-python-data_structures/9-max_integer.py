#!/usr/bin/python3
# 9-max_integer.py

def max_integer(my_list=[]):
    if not my_list:
        return None
    max_value = my_list[0]
    for number in my_list:
        if number > max_value:
            max_value = number
    return max_value
