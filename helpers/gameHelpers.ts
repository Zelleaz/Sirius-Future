export const randomSort = (data: string[]): string[] => {
    let j: number
    let temp: string
    const arr = data

    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
    }

    return arr
}

export const sliceString = (str: string): {first: string, second: string} => {
    let length = Math.floor(str.length)
    let first: string, second: string

    if (length % 2 === 0) {
        first = str.slice(0, length / 2)
        second = str.slice(length / 2)
    } else {
        let random = Math.floor(Math.random() * 10)

        if (random > 5) {
            first = str.slice(0, Math.floor(length / 2))
            second = str.slice(Math.floor(length / 2))
        } else {
            first = str.slice(0, Math.floor(length / 2) + 1)
            second = str.slice(Math.floor(length / 2) + 1)
        }
    }
    return {
        first,
        second
    }
}

export const filterByWordsLength = (data: string[], length: number): string[] => {
    return data.filter(str => str.length === length)
}