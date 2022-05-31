/*
input: [1, 3, 2, 4]
output: [1, 2, 3, 4]
*/

function radixSort(input) {
    const maxDigits = Math.max(...input.map(num => num.toString().length))
    
    for (let i = 0; i < maxDigits; i++) {
        const digitBuckets = Array.from({ length: 10}, () => [])

        input.forEach(num => {
            const digit = Math.floor(num / Math.pow(10, i)) % 10
            digitBuckets[digit].push(num)
        })

        input = [].concat(...digitBuckets)
    }

    console.log(input)

    return input
}

radixSort([1, 3, 2, 4])
radixSort([1, 2, 3, 4])
radixSort([4, 3, 2, 1])
radixSort([])
radixSort([1])
