// Function uses binary search to find the first
// and last occurrence of a number
const firstAndLastOccurrence = (arr, target) => {
    let left = 0, right = arr.length - 1;
    let mid = 0; // Determine the mid point
    let occurrences = [-1, -1]; // Default occurences incase target is not found
    
    // Find the first occurence of the target
    while(left <= right) {
        mid = Math.floor((right + left) / 2);

        if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            occurrences[0] = mid;
            right = mid - 1;
        }
    }

    // Reset the values and pointers
    left = 0, right = arr.length - 1;
    mid = 0;

    // Find the last occurence of the target
    while(left <= right) {
        mid = Math.floor((right + left) / 2);

        if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            occurrences[1] = mid;
            left = mid + 1;
        }
    }

    return occurrences;
}

// Example Usage:
arr = [2, 4, 4, 4, 6, 8, 9];
console.log(firstAndLastOccurrence(arr, 4));