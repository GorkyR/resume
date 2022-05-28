import { titlecase } from "./utilities/utilitites"

interface Labels {
	contact: string
	profile: string
	work_experience: string
	education: string
	skills: string
	email: string
	phone: string
	levels: {
		expert: string
		advanced: string
		intermediate: string
		beginner: string
	}
	present: string
	ed_types: {
		college: string
		highschool: string
		certification: string
	}
}

const en: Labels = {
	contact: titlecase('contact'),
	profile: titlecase('profile'),
	work_experience: titlecase('work experience'),
	education: titlecase('education'),
	skills: titlecase('skills'),
	email: titlecase('e-mail'),
	phone: titlecase('phone'),
	levels: {
		expert: titlecase('expert'),
		advanced: titlecase('advanced'),
		intermediate: titlecase('intermediate'),
		beginner: titlecase('beginner'),
	},
	present: titlecase('present'),
	ed_types: {
		college: titlecase('college'),
		highschool: titlecase('high school'),
		certification: titlecase('certification')
	},
}

const es: Labels = {
	contact: titlecase('contacto', 'es'),
	profile: titlecase('perfíl', 'es'),
	work_experience: titlecase('experiencia laboral', 'es'),
	education: titlecase('educación', 'es'),
	skills: titlecase('habilidades', 'es'),
	email: titlecase('correo electrónico', 'es'),
	phone: titlecase('teléfono', 'es'),
	levels: {
		expert: titlecase('experto', 'es'),
		advanced: titlecase('advanzado', 'es'),
		intermediate: titlecase('intermedio', 'es'),
		beginner: titlecase('principiante', 'es'),
	},
	present: titlecase('actualidad', 'es'),
	ed_types: {
		college: titlecase('universidad', 'es'),
		highschool: titlecase('secundaria', 'es'),
		certification: titlecase('certificación', 'es'),
	},
}

export default { en, es }