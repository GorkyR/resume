import Template1 from "./templates/t1"
import { Institution, Language, Resume } from "./models"
import labels from "./labels"
import { swx } from "./utilities/react.utilities"

const language: Language = 'en'
const lbl = labels[language]

const transneg: Institution = {
  name: 'Transneg SRL',
  link: 'https://transnegrd.com',
  location: {
    country: 'Dominican Republic',
    city: 'Santo Domingo'
  }
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
    location: {
      country: 'Dominican Republic',
      city: 'Santo Domingo'
    },
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
        'Develop enterprise web application front-ends in Angular.',
        'Develop and extend API back-ends in ASP.NET C#.',
        'Maintain and support MVC C# web applications.',
        'Migrate and modernize legacy WebForms VB.NET applications to modern web stacks (Angular + ASP.NET C#).',
        [ 'Employ the following frameworks, architectures, and tools:',
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
        'Design technical architecture and structure of whole products; front-end, back-end, database, services/dependencies.',
        'Lead a team of developers with analysis and definition of features and product requirements; code review, and technical assistance.',
        'Requirement analysis, feature design, planning and estimation sessions with Product Owners.',
        'Guide and set company code and architecture standards and best-practices, and ensure adherance to company standards via code review for development teams.',
        'Develop enterprise web application front-ends with ReactJS and Angular.',
        'Design and develop API back-ends in ASP.NET C#.',
        'Develop mobile apps with Angular + Cordova.',
        'Manage repositories, continuous integration and deployment, configuration in Azure DevOps.'
      ]
    },
  ],
  education: [
    {
      type: lbl.ed_types.college,
      institution: {
        name: 'Universidad Autónoma de Santo Domingo',
        link: 'https://uasd.edu.do',
        location: {
          country: 'Dominican Republic',
          city: 'Santo Domingo'
        }
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
      contact_info: { phone: '+1 (849) 206-8413' },
    }
  ]
}

export const App = () => <Template1 resume={resume} language={language}/>