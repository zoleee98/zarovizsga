function osszesOszto(num: number): number[] {
    const divisors: number[] = []
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) divisors.push(i)
    }
    return divisors
}

function parosDarab(array: number[]): number {
    return array.filter(num => num % 2 === 0).length
}

function fuggvenyhivasPalindrom(callback: () => string): boolean {
    const str: string = callback()
    return str === str.split("").reverse().join("")
}