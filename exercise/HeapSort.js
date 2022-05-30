/*
input: [1, 3, 2, 4]
output: [1, 2, 3, 4]

    0
  1   2
 3 4 5 6

*/

function buildMaxHeap(input, heapSize) {

    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
        maxHeapify(input, i, heapSize)
    }
}

function maxHeapify(input, rootIndex, heapSize) {
    const leftIndex = 2 * rootIndex + 1
    const rightIndex = 2 * rootIndex + 2

    let largestIndex = rootIndex

    if (leftIndex <= heapSize && input[leftIndex] > input[largestIndex]) {
        largestIndex = leftIndex
    }

    if (rightIndex <= heapSize && input[rightIndex] > input[largestIndex]) {
        largestIndex = rightIndex
    }

    if (largestIndex !== rootIndex) {
        [input[largestIndex], input[rootIndex]] = [input[rootIndex], input[largestIndex]]
        maxHeapify(input, largestIndex, heapSize)
    }
}

function heapSort(input) {
    let heapSize = input.length - 1

    buildMaxHeap(input, heapSize)

    while (heapSize > 0) {
        [input[0], input[heapSize]] = [input[heapSize], input[0]]
        maxHeapify(input, 0, --heapSize)
    }

    console.log(input)

    return input
}

heapSort([1, 3, 2, 4])
heapSort([1, 2, 3, 4])
heapSort([4, 3, 2, 1])
heapSort([])
heapSort([1])
