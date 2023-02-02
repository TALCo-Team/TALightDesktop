#!/usr/bin/env python3
# Example: somma -> free sum
import sys
cnt = int(input())
print("cnt:", cnt, file=sys.stderr)
for i in range(cnt):
    line = input()
    print("line:", line, file=sys.stderr)
    nums = line.split(" ")
    a = int(nums[0])
    b = int(nums[1])
    print(a+b)
    