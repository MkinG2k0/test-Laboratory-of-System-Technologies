import { describe, it, expect } from 'vitest'

const generateRandomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) + min)
}

const generateArray = (length: number, min: number, max: number) => {
	return new Array(length).fill(0).map(() => generateRandomNumber(min, max))
}

const serializeNumber = (arr: number[]): string => {
	const numberMap = new Map<number, number>()

	arr.forEach((val) => {
		const newVal = (numberMap.get(val) || 0) + 1
		numberMap.set(val, newVal)
	})

	let str = ''
	numberMap.forEach((value, key) => {
		if (value > 1) {
			str += `${key}:${value}/`
		} else {
			str += `${key}/`
		}
	})

	return str
}

describe('test', () => {
	it('простейшие короткие', async () => {
		const arr = [2, 3, 3, 3, 5, 7, 7, 7, 11, 13, 13, 3, 5, 2, 17, 23]
		const serialize = serializeNumber(arr)
		const ratio = arr.toString().length / serialize.length
		console.log(ratio)
		expect(ratio).toBeGreaterThanOrEqual(1.2)
	})

	it('случайные - 50 чисел', async () => {
		const arr = generateArray(50, 1, 100)
		const serialize = serializeNumber(arr)
		const ratio = arr.toString().length / serialize.length
		console.log(ratio)
		expect(ratio).toBeGreaterThanOrEqual(1)
	})

	it('100 чисел', async () => {
		const arr = generateArray(100, 1, 100)
		const serialize = serializeNumber(arr)
		const ratio = arr.toString().length / serialize.length
		console.log(ratio)
		expect(ratio).toBeGreaterThanOrEqual(1)
	})

	it('500 чисел', async () => {
		const arr = generateArray(500, 1, 100)
		const serialize = serializeNumber(arr)
		const ratio = arr.toString().length / serialize.length
		console.log(ratio)
		expect(ratio).toBeGreaterThanOrEqual(1)
	})

	it('граничные - все числа 1 знака', async () => {
		const arr = generateArray(100, 1, 9)
		const serialize = serializeNumber(arr)
		const ratio = arr.toString().length / serialize.length
		console.log(ratio)
		expect(ratio).toBeGreaterThanOrEqual(1)
	})

	it('все числа из 2х знаков', async () => {
		const arr = generateArray(100, 10, 99)
		const serialize = serializeNumber(arr)
		const ratio = arr.toString().length / serialize.length
		console.log(ratio)
		expect(ratio).toBeGreaterThanOrEqual(1)
	})

	it('все числа из 3х знаков', async () => {
		const arr = generateArray(100, 100, 999)
		const serialize = serializeNumber(arr)
		const ratio = arr.toString().length / serialize.length
		console.log(ratio)
		expect(ratio).toBeGreaterThanOrEqual(1)
	})

	it('каждого числа по 3 - всего чисел 900', async () => {
		const arr = generateArray(900, 100, 200)
		const serialize = serializeNumber(arr)
		const ratio = arr.toString().length / serialize.length
		console.log(ratio)
		expect(ratio).toBeGreaterThanOrEqual(1)
	})
})
