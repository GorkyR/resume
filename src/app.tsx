import Template1 from "./templates/t1"
import { Institution, Language, Location, Resume } from "./models"
import labels from "./labels"
import { swx } from "./utilities/react.utilities"
import { useEffect, useState } from "react"
import { global_hotkey } from "./utilities/utilitites"
import { usePrint } from "./components/printer"
import Icon from "./components/icon"

export function App() {
  const [language, setLang] = useState<Language>('en')
  const lbl = labels[language]
  
  const santo_domingo: Location = {
    country: swx(language, {
      en: {
        name: 'Dominican Republic',
        code: 'DR'
      },
      es: {
        name: 'República Dominicana',
        code: 'RD'
      }
    }),
    city: 'Santo Domingo'
  }
  
  const transneg: Institution = {
    name: 'Transneg SRL',
    link: 'https://transnegrd.com',
    location: santo_domingo
  }
  
  const resume: Resume = {
    profile: {
      name: 'Gorky',
      last_name: 'Rojas',
      title: swx(language, {
        en: 'Senior Software Developer',
        es: 'Desarrollador de Software Senior'
      }),
      date_of_birth: new Date('1998-05-27'),
      location: santo_domingo,
      contact_info: {
        phone: '+1 (829) 560-1684',
        email: 'gorkyrojas@gmail.com'
      },
      socials: {
        linkedin: 'gorky-rojas',
        github: 'GorkyR',
        twitter: 'RojasGorky'
      },
      //@TODO: bluff
    },
    experience: [
      {
        institution: transneg,
        title: swx(language, {
          en: 'Software Developer',
          es:  'Desarrollador de Software'
        }),
        timeframe: {
          from: { year: 2020, month: 11 },
          to:   { year: 2021, month: 11 },
        },
        brag: [
          swx(language, {
            en: 'Develop enterprise web application front-ends in Angular.',
            es: 'Desarrollar front-ends de apliaciones web empresariales en Angular.'
          }),
          swx(language, {
            en: 'Develop and extend API back-ends in ASP.NET C#.',
            es: 'Desarrollar y extender back-ends en ASP.NET C#.'
          }),
          swx(language, {
            en: 'Maintain and support MVC C# web applications.',
            es: 'Mantener aplicaciones web MVC C#.'
          }),
          swx(language, {
            en: 'Migrate and modernize legacy WebForms VB.NET applications to modern web stacks (Angular + ASP.NET C#).',
            es: 'Migrar y modernizar aplicaciones legacy WebForms VB.NET a tecnologías modernas (Angular + ASP.NET C#).',
          }),
          [ swx(language, {
              en: 'Employ the following frameworks, architectures, and tools:',
              es: 'Emplear las siguientes arquitecturas y herramientas:'
            }),
            'Angular2+, .NET Core 3.1, Onion Architecture, Git, SCRUM, Entity Framework, Transact-SQL, CQRS.' ].join('\n')
        ]
      },
      {
        institution: transneg,
        title: swx(language, {
           en: 'Senior Software Developer',
           es: 'Desarrollador de Software Senior'
        }),
        timeframe: {
          from: { year: 2021, month: 11 }
        },
        brag: [
          swx(language, {
            en: 'Design technical architecture and structure of whole products; front-end, back-end, database, services/dependencies.',
            es: 'Diseñar la arquitectura y estructura de productos compleatos; front-end, back-end, base de datos, servicios/dependencias.',
          }),
          swx(language, {
            en: 'Lead a team of developers with analysis and definition of features and product requirements; code review, and development assistance.',
            es: 'Liderar un equipo de desarrolladores con el análisis y definición de requerimientos de los productos y funcionalidades; revisión de código, y asistencia en el desarrollo.',
          }),
          swx(language, {
            en: 'Requirement analysis, feature design, planning and estimation sessions with Product Owners.',
            es: 'Sesiones de análisis de requerimientos, diseño de funcionalidades, planificación y estimación con los Product Owners.',
          }),
          swx(language, {
            en: 'Guide and set company code and architecture standards and best-practices, and ensure adherance to company standards via code review for development teams.',
            es: 'Guiar el establecimiento de estándares y mejores-prácticas de código y arquitectura para la empresa, y asegurar el cumplimiento de los estándares a través de revisiones de código para los equipos de desarrollo.',
          }),
          swx(language, {
            en: 'Develop enterprise web application front-ends with ReactJS and Angular.',
            es: 'Desarrollar front-ends de aplicaciones web empresariales con ReacJS y Angular.',
          }),
          swx(language, {
            en: 'Design and develop API back-ends in ASP.NET C#.',
            es: 'Diseñar y desarrollar back-ends API en ASP.NET C#.',
          }),
          swx(language, {
            en: 'Develop mobile apps with Angular + Cordova.',
            es: 'Desarrollar aplicaciones móviles con Angular + Cordova.',
          }),
          swx(language, {
            en: 'Manage repositories, continuous integration and deployment, configuration in Azure DevOps.',
            es: 'Manejar repositorios, su configuración e integración y despliegue continuo en Azure DevOps.',
          }),
        ]
      },
    ],
    education: [
      {
        type: lbl.ed_types.college,
        institution: {
          name: 'Universidad Autónoma de Santo Domingo',
          link: 'https://uasd.edu.do',
          location: santo_domingo
        },
        subject: swx(language, {
          en: 'Computer Science',
          es: 'Informática'
        }),
        title: swx(language, {
          en: 'Bachelor of Computer Science (BCS)',
          es: 'Licenciatura en Informática'
        }),
        timeframe: {
          from: { year: 2016, month: 1  },
          to:   { year: 2020, month: 11 }
        }
      }
    ],
    skills: [
      { name: 'ReactJS', level: lbl.levels.advanced },
      { name: 'Angular', level: lbl.levels.expert   },
      { name: 'ASP.NET', level: lbl.levels.expert   },
      { name: 'NodeJS',  level: lbl.levels.advanced },
      { name: 'C#'         },
      { name: 'Typescript' },
      { name: 'Python'     },
      { name: 'HTML'       },
      { name: 'English', level: '5 / C1' },
      { name: 'Spanish', level: '5 / C2' },
    ],
    references: [
      {
        name: 'Jean Carlo',
        last_name: 'Jimenez',
        title: swx(language, {
          en: 'MSIS, Software Specialist',
          es: 'MCSI, Especialista de Software'
        }),
        contact_info: {
          email: 'jeanjmnez@gmail.com',
          phone: '+1 (849) 206-8413',
        },
      }
    ],
  }

  useEffect(() => {
    document.title = `Résumé | ${resume.profile.name} ${resume.profile.last_name}`
  }, [resume.profile.name + resume.profile.last_name])

  useEffect(() => global_hotkey('l', () => setLang(l => l == 'en'? 'es' : 'en')), [])
  useEffect(() => global_hotkey('s', () => {}), [])

  const content = <Template1 resume={resume} language={language}/>
  
  const print = usePrint()
  useEffect(() => global_hotkey('p', () => print(content)), [language])

  return <div className="relative">
    {content}
    <div className="fixed top-0 right-0 grid place-items-start gap-1 text-xs p-2">
      <button
        onClick={() => setLang(l => l == 'en'? 'es' : 'en')}
        className="border rounded px-2 py-1 bg-white hover:bg-neutral-100">
        <Icon icon="language"/> {swx(language, { en: 'Language', es: 'Lenguaje' })}: {swx(language, { en: '[en] es', es: 'en [es]' })}
      </button>
      <button
        onClick={() => print(content)} 
        className="border rounded px-2 py-1 bg-white hover:bg-neutral-100">
        <Icon icon="print"/> {swx(language, { en: 'Print', es: 'Imprimir' })}
      </button>
    </div>
  </div>
}