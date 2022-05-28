/*
input: [1, 3, 2, 4]
output: [1, 2, 3, 4]
*/

function option1(input, start, end) {
    // select last element as pivot
    const pivot = input[end]
    
    // skip if less or equal to one element
    if (start >= end) {
        return
    }

    let pivotIndex = start

    for (let i = start; i < end; i++) {
        // i <= pivot, then swap i to the left of pivot to be
        if (input[i] <= pivot) {
            [input[i], input[pivotIndex]] = [input[pivotIndex], input[i]]
            pivotIndex++
        }
    }
    
    // swap pivot to pivotIndex
    input[end] = input[pivotIndex]
    input[pivotIndex] = pivot

    option1(input, start, pivotIndex - 1)
    option1(input, pivotIndex + 1, end)
}

function option2(input, start, end) {
    // select first element as pivot
    const pivot = input[start]
    
    // skip if less or equal to one element
    if (start >= end) {
        return
    }

    let pivotIndex = start

    for (let i = start + 1; i <= end; i++) {
        // i <= pivot, then swap i to the left of pivot to be
        if (input[i] <= pivot) {
            // do not modify the original pivot at this moment
            pivotIndex++
            [input[i], input[pivotIndex]] = [input[pivotIndex], input[i]]
        }
    }

    // swap pivot to pivotIndex
    input[start] = input[pivotIndex]
    input[pivotIndex] = pivot

    option2(input, start, pivotIndex - 1)
    option2(input, pivotIndex + 1, end)
}

function option3(input, start, end) {
    // select first element as pivot
    const pivot = input[start]
    let leftIndex = start
    let rightIndex = end

    // skip if less or equal to one element
    if (start >= end) {
        return
    }

    while (leftIndex < rightIndex) {
        // move rightIndex left if right > pivot
        while (input[rightIndex] > pivot && leftIndex < rightIndex) {
            rightIndex--
        }

        // move leftIndex right if left <= pivot
        while (input[leftIndex] <= pivot && leftIndex < rightIndex) {
            leftIndex++
        }

        // leftIndex < rightIndex, then swap left and right
        if (leftIndex < rightIndex) {
            [input[rightIndex], input[leftIndex]] = [input[leftIndex], input[rightIndex]]
        }
    }

    input[start] = input[leftIndex]
    input[leftIndex] = pivot

    option3(input, start, leftIndex - 1)
    option3(input, leftIndex + 1, end)
}

function option4(input, start, end) {
    // select mid element as pivot
    const pivotIndex = Math.floor((start + end) / 2)
    const pivot = input[pivotIndex]
    let leftIndex = start
    let rightIndex = end

    // skip if less or equal to one element
    if (start >= end) {
        return
    }

    while (true) {
        // move rightIndex left if right > pivot
        while (input[rightIndex] > pivot) {
            rightIndex--
        }

        // move leftIndex right if left < pivot
        while (input[leftIndex] < pivot) {
            leftIndex++
        }

        // leftIndex < rightIndex, then swap left and right
        if (leftIndex < rightIndex) {
            [input[rightIndex], input[leftIndex]] = [input[leftIndex], input[rightIndex]]
            leftIndex++
            rightIndex--
        } else {
            break
        }
    }

    option4(input, start, rightIndex)
    option4(input, rightIndex + 1, end)
}

function quickSort(input) {
    console.log(input)
    // option1(input, 0, input.length - 1)
    // option2(input, 0, input.length - 1)
    // option3(input, 0, input.length - 1)
    option4(input, 0, input.length - 1)
    console.log(input)

    return input
}

// quickSort([1, 3, 2, 4])
// quickSort([1, 2, 3, 4])
// quickSort([4, 3, 2, 1])
// quickSort([])
// quickSort([1])

const testInput = []

for (let i = 0; i < 6; i++) {
    testInput.push(Math.floor(Math.random() * 10))
}

quickSort(testInput);
