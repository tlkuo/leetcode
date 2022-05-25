/*
input:  [1, 3, 2, 4]
output: [1, 2, 3, 4]
           [i]
        [j]
*/

function insertionSort(input) {
    // loop i from 1 to length - 1
    for (let i = 1; i <= input.length - 1; i++) {
        // loop j from i - 1 to 0
        for (let j = i - 1; j >= 0; j--) {
            // compare j and j+1, ">" then swap
            if (input[j] > input[j+1]) {
                /*
                    const temp = input[j]
                    input[j] = input[j+1]
                    input[j+1] = temp
                */
                [input[j+1], input[j]] = [input[j], input[j+1]]
            } else {
                // sorted
                break
            }
        }
    }

    console.log(input)

    return input
}

insertionSort([1, 3, 2, 4])
insertionSort([1, 2, 3, 4]) 
insertionSort([4, 3, 2, 1]) 
insertionSort([]) 
insertionSort([1]) 
