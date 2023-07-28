import { useState } from "react";
import Icon from "../components/icon";
import Modal from "../components/modal";
import TableLayout from "../components/table-layout";
import labels from "../labels";
import { Language, Resume } from "../models";
import { cx, swx } from "../utilities/react.utilities";
import { country, digits, format_timeframe, location, simple_location, format_year_month } from "../utilities/utilitites";
import styles from './t1.module.scss'

// const styles: { [key: string]: string } = { }

export default function Template1({ resume: cv, language: lang, printing }: { resume: Resume, language?: Language, printing?: boolean }) {
	const lbl = labels[lang ?? 'en']

	const [activeImage, setActiveImage] = useState<string>()

	return <TableLayout className={cx(styles.content)}>
		<tr> {/* Header */}
			<td className={styles.side}></td>
			<td className={styles.main}>
				<h1>{cv.profile.name} {cv.profile.last_name}</h1>
				<h3>{cv.profile.title}</h3>
			</td>
		</tr>

		<tr> {/* Contact */}
			<td className={styles.side}>
				<h2>{lbl.contact}</h2>
			</td>
			<td className={styles.main}>
				<div className={styles.block}>
					<div className="flex gap-2">
						<strong>{lbl.email}:</strong>
						<a href={`mailto:${cv.profile.contact_info.email}`} className="min-w-max">
							{cv.profile.contact_info.email}
						</a>
					</div>
					{cv.profile.contact_info.phone && <div className="flex gap-2">
						<strong>{lbl.phone}:</strong>
						<a href={`tel:${digits(cv.profile.contact_info.phone)}`} className="min-w-max">
							{cv.profile.contact_info.phone}
						</a>
					</div>}
				</div>
				<div className={styles.block}>
					<div className={cx("flex max-w-min gap-4")}>
						<a
							title={`LinkedIn: ${cv.profile.socials?.linkedin}`}
							href={`https://linkedin.com/in/${cv.profile.socials?.linkedin}`} target='_blank'
							className="min-w-max"
						>
							<Icon icon={['fab', 'linkedin']} className="mr-1"/>{cv.profile.socials?.linkedin}
						</a>
						<a 
							title={`GitHub: ${cv.profile.socials?.github}`}
							href={`https://github.com/${cv.profile.socials?.github}`} target='_blank'
							className="min-w-max"
						>
							<Icon icon={['fab', 'github']} className="mr-1"/>{cv.profile.socials?.github}
						</a>
						<a
							title={`Twitter: @${cv.profile.socials?.twitter}`}
							href={`https://twitter.com/${cv.profile.socials?.twitter}`} target='_blank'
							className="min-w-max"
						>
							<Icon icon={['fab', 'twitter']} className="mr-1"/>{`@${cv.profile.socials?.twitter}`}
						</a>
					</div>
				</div>
			</td>
		</tr>

		{cv.profile.brag && <tr> {/* Profile / Brag */}
			<td className={styles.side}>
				<h2>{lbl.profile}</h2>
			</td>
			<td className={styles.main}>
				{swx(typeof cv.profile.brag, {
					string: cv.profile.brag as string,
				}, (cv.profile.brag as any)?.join('\n'))}
			</td>
		</tr>}

		{cv.experience?.length? <tr> {/* Work Experience */}
			<td className={styles.side}>
				<h2>{lbl.work_experience}</h2>
			</td>
			<td className={cx(styles.main, 'flex flex-col gap-6')}>
				{cv.experience
					.reverse()
					.sort_by([
						(e, i) => e.timeframe.to?.year  ?? (1_000_000 + i),
						(e, i) => e.timeframe.to?.month ?? (1_000_000 + i),
					], false)
					.map(exp => <div>
						<h4>{exp.title}</h4>
						<div className="flex gap-4 font-semibold">
							<div>
								<a href={exp.institution?.link} target='_blank'>
									{exp.institution?.name}
								</a>
								, {exp.institution?.location && <span title={country(exp.institution.location)}>
									{simple_location(exp.institution.location)}
								</span>}
							</div>
							<div className="border-l pl-4">
								<span title={format_year_month(exp.timeframe.from, lang)}>
									{exp.timeframe.from.year}
								</span> – <span title={exp.timeframe.to && format_year_month(exp.timeframe.to, lang)}>
									{exp.timeframe.to?.year ?? lbl.present}
								</span>
								{/* <span className={styles.duration}> ({!exp.timeframe.to && '≥'}{format_timeframe(exp.timeframe, lang)})</span> */}
							</div>
						</div>
						{exp.brag && (typeof exp.brag == 'string'
							? <p className={styles.bluff}>{exp.brag}</p>
							: <ul className={styles.bluff}>
								{exp.brag.clean().map(bluff => <li>{bluff}</li>)}
								</ul>)}
					</div>)}
			</td>
		</tr> : null}

		{cv.education?.length? <tr> {/* Education */}
			<td className={styles.side}>
				<h2>{lbl.education}</h2>
			</td>
			<td className={styles.main}>
				<div className='grid grid-cols-2 grid-flow-col gap-4'>
					{cv.education
						?.sort_by([
							(e, i) => e.timeframe.to?.year  ?? (1_000_000 + i),
							(e, i) => e.timeframe.to?.month ?? (1_000_000 + i)
						], false)
						?.map(ed =>
							<div className="bg-gray-100 p-4">
								<h5 className="font-bold">{ed.type}</h5>
								<div>{ed.title}</div>
								<a href={ed.institution.link} target='_blank'>{ed.institution.name}</a>
								<div>{ed.institution.location && location(ed.institution.location)}</div>
								<div>
									<span title={format_year_month(ed.timeframe.from, lang)}>
										{ed.timeframe.from.year}
									</span> – <span title={ed.timeframe.to && format_year_month(ed.timeframe.to, lang)}>
										{ed.timeframe.to?.year ?? lbl.present}
									</span>
								</div>
							</div>
						)}
				</div>
			</td>
		</tr> : null}
		
		{cv.skills?.length? <tr> {/* Skills */}
			<td className={styles.side}>
				<h2>{lbl.skills}</h2>
			</td>
			<td className={styles.main}>
				<div className="flex gap-12">
					{cv.skills?.split_into(3).map(skills =>
						<ul>
							{skills.map(({ name, level }) =>
								<li className="font-medium list-disc">
									<div className="flex items-baseline justify-between gap-4">
										<span>{name}</span>
										{level && <span className="font-thin text-gray-500 min-w-max" style={{ fontSize: '.6rem' }}>({level})</span>}
									</div>
								</li>
							)}
						</ul>
					)}
				</div>
			</td>
		</tr> : null}

		{cv.references?.length? <tr> {/* References */}
			<td className={styles.side}>
				<h2>{lbl.references}</h2>
			</td>
			<td className={cx(styles.main, 'flex flex-wrap gap-8')}>
				{cv.references.map(ref =>
					<div className="bg-gray-100 p-4">
						<h5>{ref.name} {ref.last_name}</h5>
						<div>{ref.title}</div>
						<a href={`mailto:${ref.contact_info.email}`} className='min-w-max block'>
							<Icon icon={['far', 'envelope']}/> {ref.contact_info.email}
						</a>
						{false && ref.contact_info.phone && 
						<a href={`tel:${digits(ref.contact_info.phone!)}`} className='min-w-max block'>
							<Icon icon='mobile-screen'/> {ref.contact_info.phone}
						</a>}
					</div>
				)}
			</td>
		</tr> : null}

		{cv.projects?.length? <tr>
			<td className={cx(styles.side, '!align-top')}>
				<h2>{lbl.projects}</h2>
			</td>
			<td className={cx(styles.main, 'grid gap-6')}>
				{cv.projects.map(pro => 
					<div>
						<div className="flex gap-4">
							{pro.image && <a href={pro.image} target="_blank" className="self-center cursor-zoom-in">
								<img
									src={pro.image} alt={pro.title}
									className="max-h-[200px] max-w-[250px] object-contain"
									onMouseEnter={() => setActiveImage(pro.image)}
									onMouseLeave={() => setActiveImage(undefined)}/>
							</a>}
							<div className="flex flex-col border-l pl-4">
								<h3>{pro.title}</h3>
								<div className="flex-1">
									{typeof pro.description == 'string'
										? <p>{pro.description}</p>
										: pro.description.clean().map(d => <p>{d}</p>).interspace(<br/>)}
								</div>
								<div className="flex flex-wrap gap-4 print:flex-col print:gap-1 items-baseline text-blue-600 mt-4">
									{pro.links?.map(({ label, url }) => 
										<a href={url} target='_blank'>{!printing? `(${label})` : `${label}: ${url}`}</a>
									)}
								</div>
							</div>
						</div>
					</div>
				)}
			</td>
		</tr> : null}

		{activeImage && <Modal
			backdropClassName="pointer-events-none !bg-black !bg-opacity-50"
			className="pointer-events-none !bg-transparent !shadow-none">
			<img src={activeImage} className="object-contain max-h-[90vh]"/>
		</Modal>}
	</TableLayout>
}