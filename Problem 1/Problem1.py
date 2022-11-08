def sum_to_n_a(n):
  if (not isinstance(n, int) or n < 1):
    return "Please input integer value larger or equal to 1"
  sum = 0
  for i in range (1, n + 1):
    sum += i
  return sum

def sum_to_n_b(n):
  if (not isinstance(n, int) or n < 1):
    return "Please input integer value larger or equal to 1"
  if n == 1:
    return 1
  else:
    return n + sum_to_n_b(n - 1)

def sum_to_n_c(n):
  if (not isinstance(n, int) or n < 1):
    return "Please input integer value larger or equal to 1"
  sum = ((1 + n) * (n)) / 2
  return int(sum)


print(sum_to_n_a(-1)) 
print(sum_to_n_b(5.5)) 
print(sum_to_n_c(5)) 

