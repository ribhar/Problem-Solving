#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def plusMinus(arr):
    # Write your code here
    p =0
    n =0
    z =0
    
    for x in arr:
        if x>0:
            p+=1
        elif x<0:
            n+=1
        else:
            z+=1
    print(round(p/len(arr),6))
    print(round(n/len(arr),6))
    print(round(z/len(arr),6))

if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)
