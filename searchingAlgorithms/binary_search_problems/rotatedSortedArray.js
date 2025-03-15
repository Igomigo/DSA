// Find the index of the target in a rotated sorted array
const rotatedSortedArray = (arr, target) => {
    let left = 0, right = arr.length - 1;
    mid = 0;

    while (left <= right) {
        mid = Math.floor((right + left) / 2);

       if (arr[mid] === target) return mid;

       // Check which half is sorted
       if (arr[left] <= arr[mid]) { // Left half is sorted
        // If target is within the left sorted half
        if (arr[left] <= target && target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
       } else { // Right half is sorted
        // If target is within the right sorted half
        if (arr[mid] < target && target <= arr[right]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
       }
    }

    return "Not found";
}

// Example Usage:
arr = [6, 7, 8, 1, 2, 3, 4, 5];
console.log(rotatedSortedArray(arr, 8));