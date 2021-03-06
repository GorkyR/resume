import { Language } from "../models"
import { chunk, initials, sort_by, split_into, titlecase } from "./utilitites"

declare global {
	interface Array<T> {
		sort_by<K>(key: (item: T, index: number) => K, ascending?: boolean): T[]
		sort_by(keys: ((item: T, index: number) => any)[], ascending?: boolean): T[]
		chunk(length: number): T[][]
		split_into(count: number): T[][]
		clean(): T[]
		interspace<I>(item: I): (T | I)[]
	}
	interface String {
		title(language?: Language): string
		initials(): string
	}
}

Array.prototype.sort_by ??= function<T, K>(this: T[], key_or_keys: ((item: T, index: number) => K) | ((item: T, index: number) => any)[], ascending: boolean = true) {
	return sort_by(this, key_or_keys as any, ascending)
}

Array.prototype.chunk ??= function<T>(this: T[], length: number) {
	return chunk(this, length)
}

Array.prototype.split_into ??= function<T>(this: T[], count: number){
	return split_into(this, count)
}

Array.prototype.clean ??= function<T>(this: T[]) {
	return this.filter(_ => _)
}

Array.prototype.interspace ??= function<T, I>(this: T[], separator: I) {
	if (this.length <= 1) return this.slice()
	const interspaced: (T | I)[] = [this[0]]
	for (let item of this.slice(1)) {
		interspaced.push(separator)
		interspaced.push(item)
	}
	return interspaced
}

String.prototype.title ??= function(this: string, language: Language = 'en') {
	return titlecase(this, language)
}

String.prototype.initials ??= function(this: string) {
	return initials(this)
}

export {}