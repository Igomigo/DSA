def binary_search(list, item):
    # Binary search algorithm
    # Time complexity: O(log n) = logarithmic Time
    
    low = 0
    high = len(list) - 1

    while (low <= high):
        mid = (low + high) // 2
        guess = list[mid]

        if (guess == item):
            return mid
        elif (guess > item):
            high = mid - 1
        else:
            low = mid + 1
    
    return None

# Example Usage:
my_list = [1, 3, 5, 7, 9]
print (binary_search(my_list, 3)) # => 1
print (binary_search(my_list, -1)) # => None

# With strings
my_str = ["apple", "banana", "cherry", "grape", "mango", "peach"]
print (binary_search(my_str, "grape")) # 3