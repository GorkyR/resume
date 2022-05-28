type AtLeastOneOf<T> = { [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>; }[keyof T]

export type Country = string | { name: string; code?: string }
export type Location = AtLeastOneOf<{ country: Country; city: string }>
export type Institution = { name: string; link?: string; location?: Location }
export type RoughYearMonth = { year: number, month?: number }
export type Timeframe = { from: RoughYearMonth; to?: RoughYearMonth }
export type YearMonth = { year: number; month: number }
export type ContactInfo = { email: string; phone?: string }

export interface Resume {
	profile: {
		name: string
		last_name: string
		title: string
		date_of_birth?: Date
		location?: Location
		contact_info: ContactInfo
		socials?: {
			linkedin?: string
			github?: string
			twitter?: string
			instagram?: string
		}
		brag?: string | string[]
	}
	experience?: {
		institution?: Institution
		title: string
		timeframe: Timeframe
		brag?: string | string[]
	}[]
	education?: {
		type: string
		institution: Institution
		subject: string
		title: string
		timeframe: Timeframe
	}[]
	skills?: {
		name: string
		level?: string
	}[]
	references?: {
		name: string
		last_name: string
		title: string
		relationship?: string
		institution?: Institution
		contact_info: ContactInfo
	}[],
}

export type Language = 'en' | 'es'