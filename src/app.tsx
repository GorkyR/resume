import Template1 from "./templates/1"
import { Institution, Resume } from "./models"

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
    title: 'Senior Software Developer',
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
      title: 'Software Developer',
      timeframe: {
        from: { year: 2020, month: 11 },
        to: { year: 2021, month: 11 },
      }
      //@TODO: bluff
    },
    {
      institution: transneg,
      title: 'Senior Software Developer',
      timeframe: {
        from: { year: 2021, month: 11 }
      }
      //@TODO: bluff
    },
  ],
  education: [
    {
      institution: {
        name: 'Universidad Autónoma de Santo Domingo',
        link: 'https://uasd.edu.do',
        location: {
          country: 'Dominican Republic',
          city: 'Santo Domingo'
        }
      },
      subject: 'Computer Science',
      title: 'Bachelor of computer science (BCS)',
      timeframe: {
        from: { year: 2016 },
        to: { year: 2020 }
      }
    }
  ],
  skills: [
    { name: 'ReactJS', level: 'Advanced' },
    { name: 'Angular', level: 'Expert'   },
    { name: 'ASP.NET', level: 'Expert'   },
    { name: 'NodeJS',  level: 'Advanced' },
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
      title: '',
      contact_info: { phone: '' },
    }
  ]
}

export default function App() {
  return <Template1 resume={resume}/>
}