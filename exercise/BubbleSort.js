/*
input:  [1, 3, 2, 4]
output: [1, 2, 3, 4]
---------------------
                 [j]
        [i]
*/

function bubbleSort(input) {
    // loop j from length - 1 to 1
    for (let j = input.length - 1; j >= 1; j--) {
        let swapped = false
        // loop i from 0 to j - 1
        for (let i = 0; i <= j - 1; i++) {
            // compare i and i+1, ">" then swap
            if (input[i] > input[i+1]) {
                /*
                const tmp = input[i]
                input[i] = input[i+1]
                input[i+1] = tmp;
                */
                [input[i+1], input[i]] = [input[i], input[i+1]]
                swapped = true
            }
        }

        if (!swapped) {
            // no swap. sorted
            break;
        }
    }

    console.log(input);

    return input;
}

bubbleSort([1, 3, 2, 4])
bubbleSort([1, 2, 3, 4]) 
bubbleSort([4, 3, 2, 1]) 
bubbleSort([]) 
bubbleSort([1]) 
