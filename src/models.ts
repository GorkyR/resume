export type Country = string | { name: string; code?: string }
export type Location = { country: Country } | { city: string } | { country: Country; city: string }
export type Institution = { name: string; link?: string; location?: Location }
export type RoughYearMonth = { year: number, month?: number }
export type Timeframe = { from: RoughYearMonth; to?: RoughYearMonth }
export type YearMonth = { year: number; month: number }
export type ContactInfo = { phone: string; email?: string }

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
		bluff?: string | string[]
	}
	experience: {
		institution?: Institution
		title: string
		timeframe: Timeframe
		bluff?: string | string[]
	}[]
	education?: {
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
		institution?: Institution
		contact_info: ContactInfo
		relationship?: string
	}[]
}