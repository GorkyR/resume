import { Language, Location, RoughYearMonth, Timeframe } from "../models"

export function titlecase(text: string, lang: Language = 'en'): string {
	if (text.length <= 1) return text.toUpperCase()

	text = text.split(' ')
		.map(word => word.length <= 1
			? word.toUpperCase() 
			: word[0].toUpperCase() + word.substring(1).toLowerCase())
		.join(' ')

	function decapitalize(text: string, words: string[]) {
		for (let word of words)
			text = text.replaceAll(` ${word} `, ` ${word.toLowerCase()} `)
		return text
	}

	switch (lang) {
		case 'en': return decapitalize(text,
			['Of', 'And', 'A', 'An', 'The',
			'But', 'For', 'At', 'By', 'To'])
		case 'es': return decapitalize(text, 
			['Un', 'Una', 'La', 'El', 'Y', 'Pero', 
			'Para', 'En', 'Por', 'Desde', 'Hasta'])
	}
}

export function initials(text: string): string {
	return text.split(' ')
		.map(word => word.length? word[0] : null)
		.filter(t => t)
		.join('')
		.toUpperCase()
}

export function timeframe_to_months({ from, to }: Timeframe): number {
	to ??= (() => {
		const today = new Date()
		return { year: today.getFullYear(), month: today.getMonth() + 1 }
	})()
	return ((to.month ?? 1) - (from.month ?? 1)) + (to.year - from.year) * 12 + 1
}

export function format_timeframe(timeframe: Timeframe, lang: Language = 'en'): string {
	const months_ = timeframe_to_months(timeframe)
	const [years, months] = [Math.floor(months_/12), months_%12]
	switch (lang) {
		case 'en':
			return [
				years?  `${years} year${years==1? '' : 's'}` : null,
				months? `${months} month${months == 1? '' : 's'}` : null
			].clean().join(', ')
		case 'es':
			return [
				years?  `${years} año${years==1? '' : 's'}` : null,
				months? `${months} mes${months == 1? '' : 'es'}` : null
			].clean().join(', ')
	}
}

export function location(l: Location): string {
	return [l.city, (l.country as any)?.name ?? l.country].clean().join(', ')
}

export function simple_location(l: Location): string {
	return l.city || (typeof l.country === 'string'
		? l.country.initials()
		: l.country!.code ?? l.country!.name.initials())
}

export function country(l: Location): string {
	return typeof l.country === 'string'
		? l.country
		: l.country!.name
}

export function sort_by<T, K>(collection: T[], key: (item: T, index: number) => K, ascending?: boolean): T[]
export function sort_by<T>(collection: T[], keys: ((item: T, index: number) => any)[], ascending?: boolean): T[]
export function sort_by<T, K>(collection: T[], key_or_keys: ((item: T, index: number) => K) | ((item: T, index: number) => any)[], ascending: boolean = true): T[] {
	if (typeof key_or_keys !== 'function') {
		for (let sort of key_or_keys.reverse())
			collection = sort_by(collection, sort, ascending)
		return collection
	}
	const key = key_or_keys
	collection = collection.slice()
		.map((item, index) => ({ item, index }))
		.sort(({ item: a, index: ia }, { item: b, index: ib }) => {
			const [keya, keyb] = [key(a, ia), key(b, ib)]
			switch (typeof keya) {
				case 'string': 
					return (keya.localeCompare(keyb as any))
				case 'number': default:
					return ((keya as any) - (keyb as any))
			}
		})
		.map(({ item }) => item)
	if (!ascending)
		collection = collection.reverse()
	return collection
}
export function chunk<T>(collection: T[], chunk_length: number): T[][] {
	if (collection?.length <= chunk_length)
		return [collection?.slice()];
	const chunks: T[][] = [];
	for (let i = 0; i < collection?.length; i += chunk_length)
		chunks.push(collection?.slice(i, i + chunk_length));
	return chunks;
}

export function split_into<T>(collection: T[], count: number): T[][] {
	return chunk(collection, Math.ceil(collection?.length / count));
}

export function digits(text: string): string {
	return [...text].filter(c => '0123456789'.includes(c)).join('')
}

const months = {
	en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
}
export function format_year_month(year_month: RoughYearMonth, lang: Language = 'en'): string {
	return [
		year_month.month && months[lang][year_month.month - 1],
		year_month.year
	].clean().join(' ')
}

export function global_hotkey(keys: string | string[], callback: () => void): () => void {
	keys = (typeof keys === 'string'
		? keys.split('+').map(key => key.trim().toLowerCase())
		: keys.map(key => key.toLowerCase()))
	keys = keys.map(k => k === 'space'? ' ' : k)
	const listener = (event: KeyboardEvent) => {
		let { key, shiftKey, ctrlKey, altKey } = event
		key = key.toLowerCase()
		if (
			['input', 'select','textarea'].every(tag => !(event.target as any as HTMLElement).matches(tag)) &&
			(!['shift', 'ctrl', 'alt'].includes(key) && keys.includes(key)) &&
			(!keys.includes('shift') || shiftKey) &&
			(!keys.includes('ctrl')  || ctrlKey) &&
			(!keys.includes('alt')   || altKey)
		) {
			callback()
			event.preventDefault()
			event.stopPropagation()
		}
	}
	window.addEventListener('keydown', listener)
	return () => window.removeEventListener('keydown', listener)
}