/*
input: [1, 3, 2, 4]
output: [1, 2, 3, 4]
*/

function recursive(input, start, end) {

    // zero or one element, skip
    if (start >= end) {
        return 
    }

    // divide
    // find the middle element
    const mid = Math.floor((start + end) / 2)
    // sort from start to middle
    recursive(input, start, mid)
    // sort from middle + 1 to end
    recursive(input, mid + 1, end)

    // merge two sorted array
    const left = input.slice(start, mid + 1)
    const right = input.slice(mid + 1, end + 1)
    let leftIndex = 0
    let rightIndex = 0
    let currentIndex = start
    // compare left and right
    while (leftIndex < left.length && rightIndex < right.length) {
        // "<=" then select left and leftIndex++
        if (left[leftIndex] <= right[rightIndex]) {
            input[currentIndex] = left[leftIndex]
            leftIndex++
        }
        // ">" then select right and rightIndex++
        else if (left[leftIndex] > right[rightIndex]) {
            input[currentIndex] = right[rightIndex]
            rightIndex++
        }
        currentIndex++
    }
    // append the remaining elements at left
    while (leftIndex < left.length) {
        input[currentIndex] = left[leftIndex]
        leftIndex++
        currentIndex++
    }
    // append the remaining elements at right (may skip it)

    // while (rightIndex < right.length) {
    //     input[currentIndex] = right[rightIndex]
    //     rightIndex++
    //     currentIndex++
    // }
}

function iteration(input) {
    // divide
    let blocks = input.map((_, index) => ({ start: index, end: index }))

    // merge
    while (blocks.length > 1) {
        const nextBlocks = []

        for (let i = 0; i < blocks.length; i += 2) {
            if (i + 1 < blocks.length) {
                const leftBlock = blocks[i]
                const rightBlock = blocks[i+1]
                const left = input.slice(leftBlock.start, leftBlock.end + 1)
                const right = input.slice(rightBlock.start, rightBlock.end + 1)
                
                // compare left and right
                let leftIndex = 0
                let rightIndex = 0
                let currentIndex = leftBlock.start
                while (leftIndex < left.length && rightIndex < right.length) {
                    // "<=" then select left and leftIndex++
                    if (left[leftIndex] <= right[rightIndex]) {
                        input[currentIndex] = left[leftIndex]
                        leftIndex++
                    }
                    // ">" then select right and rightIndex++
                    else {
                        input[currentIndex] = right[rightIndex]
                        rightIndex++
                    }
                    currentIndex++
                }
                // append the remaining elements at left
                while (leftIndex < left.length) {
                    input[currentIndex] = left[leftIndex]
                    leftIndex++
                    currentIndex++
                }
                // append the remaining elements at right (may skip it)

                // while (rightIndex < right.length) {
                //     input[currentIndex] = right[rightIndex]
                //     rightIndex++
                //     currentIndex++
                // }

                nextBlocks.push({ start: leftBlock.start, end: rightBlock.end })
            } else {
                // one block left
                nextBlocks.push(blocks[i])
            }
        }
        blocks = nextBlocks
    }
}

function mergeSort(input) {
    console.log('----', input, '----')

    // recursive
    let test = [...input]
    recursive(test, 0, input.length - 1)
    console.log('recursive', test)

    // iteration
    test = [...input]
    iteration(test)
    console.log('iteration', test)
}

mergeSort([1, 3, 2, 4])
mergeSort([1, 2, 3, 4])
mergeSort([4, 3, 2, 1])
mergeSort([])
mergeSort([1])
