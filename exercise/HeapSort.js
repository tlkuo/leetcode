/*
input: [1, 3, 2, 4]
output: [1, 2, 3, 4]

    0
  1   2
 3 4 5 6

*/

function buildMaxHeap(input) {

    for (let i = Math.floor(input.length / 2) - 1; i >= 0; i--) {
        maxHeapify(input, i, input.length)
    }
}

function maxHeapify(input, rootIndex, heapSize) {
    const leftIndex = 2 * rootIndex + 1
    const rightIndex = 2 * rootIndex + 2

    let largestIndex = rootIndex

    if (leftIndex < heapSize && input[leftIndex] > input[largestIndex]) {
        largestIndex = leftIndex
    }

    if (rightIndex < heapSize && input[rightIndex] > input[largestIndex]) {
        largestIndex = rightIndex
    }

    if (largestIndex !== rootIndex) {
        [input[largestIndex], input[rootIndex]] = [input[rootIndex], input[largestIndex]]
        maxHeapify(input, largestIndex, heapSize)
    }
}

function buildMinHeap(input) {

    for (let i = Math.floor(input.length / 2) - 1; i >= 0; i--) {
        minHeapify(input, i, input.length)
    }
}

function minHeapify(input, rootIndex, heapSize) {
    const leftIndex = rootIndex * 2 + 1
    const rightIndex = rootIndex * 2 + 2
    let minimalIndex = rootIndex

    if (leftIndex < heapSize && input[leftIndex] < input[minimalIndex]) {
        minimalIndex = leftIndex
    }

    if (rightIndex < heapSize && input[rightIndex] < input[minimalIndex]) {
        minimalIndex = rightIndex
    }

    if (minimalIndex !== rootIndex) {
        [input[minimalIndex], input[rootIndex]] = [input[rootIndex], input[minimalIndex]]
        minHeapify(input, minimalIndex, heapSize)
    }
}

function heapSort(input) {
    let heapSize = input.length

    buildMaxHeap(input)
    // buildMinHeap(input)

    while (heapSize > 0) {
        [input[0], input[heapSize - 1]] = [input[heapSize - 1], input[0]]
        maxHeapify(input, 0, --heapSize)
        // minHeapify(input, 0, --heapSize)
    }

    console.log(input)

    return input
}

heapSort([1, 3, 2, 4])
heapSort([1, 2, 3, 4])
heapSort([4, 3, 2, 1])
heapSort([])
heapSort([1])
