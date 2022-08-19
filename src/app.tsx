import Template1 from "./templates/t1";
import { Institution, Language, Location, Resume } from "./models";
import labels from "./labels";
import { swx } from "./utilities/react.utilities";
import { useEffect, useState } from "react";
import { global_hotkey } from "./utilities/utilitites";
import { usePrint } from "./components/printer";
import Icon from "./components/icon";

export function App() {
  const [language, setLang] = useState<Language>("en");
  const lbl = labels[language];

  const santo_domingo: Location = {
    country: swx(language, {
      en: {
        name: "Dominican Republic",
        code: "DR",
      },
      es: {
        name: "República Dominicana",
        code: "RD",
      },
    }),
    city: "Santo Domingo",
  };

  const transneg: Institution = {
    name: "Transneg SRL",
    link: "https://transnegrd.com",
    location: santo_domingo,
  };

  const source = swx(language, { en: "Source", es: "Código fuente" });

  const resume: Resume = {
    profile: {
      name: "Gorky",
      last_name: "Rojas",
      title: swx(language, {
        en: "Senior Software Developer",
        es: "Desarrollador de Software Senior",
      }),
      date_of_birth: new Date("1998-05-27"),
      location: santo_domingo,
      contact_info: {
        phone: "+1 (829) 560-1684",
        email: "jobs@gorky.dev",
      },
      socials: {
        linkedin: "gorky-rojas",
        github: "GorkyR",
        twitter: "RojasGorky",
      },
      //@TODO: bluff
    },
    experience: [
      {
        institution: transneg,
        title: swx(language, {
          en: "Software Developer",
          es: "Desarrollador de Software",
        }),
        timeframe: {
          from: { year: 2018, month: 11 },
          to: { year: 2020, month: 11 },
        },
        brag: [
          swx(language, {
            en: "Develop enterprise web application front-ends in Angular.",
            es: "Desarrollar front-ends de apliaciones web empresariales en Angular.",
          }),
          swx(language, {
            en: "Develop and extend API back-ends in ASP.NET C#.",
            es: "Desarrollar y extender back-ends en ASP.NET C#.",
          }),
          swx(language, {
            en: "Maintain and support MVC C# web applications.",
            es: "Mantener aplicaciones web MVC C#.",
          }),
          swx(language, {
            en: "Migrate and modernize legacy WebForms VB.NET applications to modern web stacks (Angular + ASP.NET C#).",
            es: "Migrar y modernizar aplicaciones legacy WebForms VB.NET a tecnologías modernas (Angular + ASP.NET C#).",
          }),
          [
            swx(language, {
              en: "Employ the following frameworks, architectures, and tools:",
              es: "Emplear las siguientes arquitecturas y herramientas:",
            }),
            "Angular2+, .NET Core 3.1, Onion Architecture, Git, SCRUM, Entity Framework, Transact-SQL, CQRS.",
          ].join("\n"),
        ],
      },
      {
        institution: transneg,
        title: swx(language, {
          en: "Senior Software Developer",
          es: "Desarrollador de Software Senior",
        }),
        timeframe: {
          from: { year: 2020, month: 11 },
        },
        brag: [
          swx(language, {
            en: "Design technical architecture and structure of whole products; front-end, back-end, database, services/dependencies.",
            es: "Diseñar la arquitectura y estructura de productos compleatos; front-end, back-end, base de datos, servicios/dependencias.",
          }),
          swx(language, {
            en: "Lead a team of developers with analysis and definition of features and product requirements; code review, and development assistance.",
            es: "Liderar un equipo de desarrolladores con el análisis y definición de requerimientos de los productos y funcionalidades; revisión de código, y asistencia en el desarrollo.",
          }),
          swx(language, {
            en: "Requirement analysis, feature design, planning and estimation sessions with Product Owners.",
            es: "Sesiones de análisis de requerimientos, diseño de funcionalidades, planificación y estimación con los Product Owners.",
          }),
          swx(language, {
            en: "Guide and set company code and architecture standards and best-practices, and ensure adherance to company standards via code review for development teams.",
            es: "Guiar el establecimiento de estándares y mejores-prácticas de código y arquitectura para la empresa, y asegurar el cumplimiento de los estándares a través de revisiones de código para los equipos de desarrollo.",
          }),
          swx(language, {
            en: "Develop enterprise web application front-ends with ReactJS and Angular.",
            es: "Desarrollar front-ends de aplicaciones web empresariales con ReactJS y Angular.",
          }),
          swx(language, {
            en: "Design and develop API back-ends in ASP.NET C#.",
            es: "Diseñar y desarrollar back-ends API en ASP.NET C#.",
          }),
          swx(language, {
            en: "Develop mobile apps with Angular + Cordova.",
            es: "Desarrollar aplicaciones móviles con Angular + Cordova.",
          }),
          swx(language, {
            en: "Manage repositories, continuous integration and deployment, configuration in Azure DevOps.",
            es: "Manejar repositorios, su configuración e integración y despliegue continuo en Azure DevOps.",
          }),
        ],
      },
    ],
    education: [
      {
        type: lbl.ed_types.college,
        institution: {
          name: "Universidad Autónoma de Santo Domingo",
          link: "https://uasd.edu.do",
          location: santo_domingo,
        },
        subject: swx(language, {
          en: "Computer Science",
          es: "Informática",
        }),
        title: swx(language, {
          en: "Bachelor of Computer Science (BCS)",
          es: "Licenciatura en Informática",
        }),
        timeframe: {
          from: { year: 2016, month: 1 },
          to: { year: 2020, month: 11 },
        },
      },
    ],
    skills: [
      { name: "ReactJS", level: lbl.levels.advanced },
      { name: "Angular", level: lbl.levels.expert },
      { name: "ASP.NET", level: lbl.levels.expert },
      { name: "NodeJS", level: lbl.levels.advanced },
      { name: "C#" },
      { name: "Typescript" },
      { name: "Python" },
      { name: "HTML" },
      { name: "English", level: "5 / C1" },
      { name: "Spanish", level: "5 / C2" },
    ],
    references: [
      {
        name: "Jean Carlo",
        last_name: "Jimenez",
        title: swx(language, {
          en: "MSIS, Software Specialist",
          es: "MCSI, Especialista de Software",
        }),
        contact_info: {
          email: "jeanjmnez@gmail.com",
          phone: "+1 (849) 206-8413",
        },
      },
    ],
    projects: [
      // {
      //   title: 'Quota',
      //   description: swx(language, {
      //     en: [
      //       '',
      //       '(Sold)'
      //     ],
      //     es: [
      //       '',
      //       '(Vendida)'
      //     ]
      //   }),
      // },
      {
        title: "Finn",
        description: swx(language, {
          en: [
            "Finance tracking web app, to record, organize and categorize my expenses month-by-month.",
            "Made with ReactJS and Typescript.",
          ],
          es: [
            "Aplicación web de manejo de finanzas, para registrar, organizar y categorizar mis gastos mes-a-mes.",
            "Hecha con ReactJS y Typescript.",
          ],
        }),
        image: "https://iili.io/XWPAdJ.png",
        links: [{ label: source, url: "https://github.com/GorkyR/Finn" }],
      },
      {
        title: "Notty",
        description: swx(language, {
          en: [
            "Mobile application for taking notes through a familiar interface, similar to chat applications, with better editing, formatting and categorization capabilities, for Android.",
            "Made with Flutter and Dart.",
          ],
          es: [
            "Aplicacion móvil para tomar notas a través de una interfaz familiar, similar a aplicaciones de chat, con mejor capacidad de edicion, formato, y categorización, para Android.",
            "Hecha con Flutter y Dart.",
          ],
        }),
        image: "https://iili.io/XWP2Ub.png",
        links: [{ label: source, url: "https://github.com/GorkyR/Notty" }],
      },
      {
        title: "Fidd",
        description: swx(language, {
          en: [
            "Native Windows desktop app for managing and reading RSS feeds on Windows, written in C#.",
            "It has a Windows service which updates your subscriptions periodically, and a WPF client.",
          ],
          es: [
            "Aplicación de escritorio nativa para Windows para gestionar y leer canales RSS, desarrollada en C#.",
            "Tiene un servicio de Windows que actualiza las suscripciones periodicamente, y un cliente WPF.",
          ],
        }),
        image:
          "https://camo.githubusercontent.com/9b3aca7f11bf6c7a43ee69241c615c3269057b02ae973e6a7907593dfdaa3faf/68747470733a2f2f692e696d6775722e636f6d2f394536777436622e706e67",
        links: [{ label: source, url: "https://github.com/GorkyR/Fidd" }],
      },
      {
        title: "AutoServicio UASD",
        description: swx(language, {
          en: [
            "Third-party-client application that provides a cleaner and more convenient interface for my university's academic management platform, and allows students to enroll in classes and visualize their academic status and information.",
            "It has a Windows desktop client made with WPF, and an Android mobile client made with Xamarin.Android; both in C#.",
          ],
          es: [
            "Cliente de tercero para la plataforma de auto-gestión académica de mi universidad que provee una interfaz más eficiente y conveniente, y permite a los estudiantes registrar sus clases y visualizar su estado y demás información académica.",
            "Tiene un cliente de escritorio Windows hecho con WPF, y un cliente móvil Android hecho con Xamarin.Android; ambos con C#.",
          ],
        }),
        image: "https://iili.io/XWLXkJ.png",
        links: [
          { label: source, url: "https://github.com/GorkyR/AutoServicioUASD" },
        ],
      },
      {
        title: swx(language, { en: "This resume", es: "Este curriculum" }),
        description: swx(language, {
          en: "This resume is an extensible ReactJS application that feeds my resume data into a visual template.  It is hosted and can be interacted with online and features a language switcher.",
          es: "Este curriculum es una aplicación ReactJS que transforma mi data de curriculum sobre una plantilla visual.  Esta alojada y puede interactuar con ella online, y cuenta con un selector de idioma.",
        }),
        links: [
          {
            label: swx(language, {
              en: "Online resume",
              es: "Curriculum online",
            }),
            url: "https://gorkyr.github.io/resume",
          },
          { label: source, url: "https://github.com/GorkyR/resume" },
        ],
      },
    ],
  };

  useEffect(() => {
    document.title = `Resume | ${resume.profile.name} ${resume.profile.last_name}`;
  }, [resume.profile.name + resume.profile.last_name]);

  useEffect(
    () => global_hotkey("l", () => setLang((l) => (l == "en" ? "es" : "en"))),
    []
  );
  useEffect(() => global_hotkey("s", () => {}), []);

  const content = (printing?: boolean) => (
    <Template1 resume={resume} language={language} printing={printing} />
  );

  const print = usePrint();
  useEffect(() => global_hotkey("p", () => print(content(true))), [language]);

  return (
    <div className="relative">
      {content()}
      <div className="fixed top-0 right-0 grid place-items-start gap-1 text-xs p-2">
        <button
          onClick={() => setLang((l) => (l == "en" ? "es" : "en"))}
          className="border rounded px-2 py-1 bg-white hover:bg-neutral-100"
        >
          <Icon icon="language" />{" "}
          {swx(language, { en: "Language", es: "Lenguaje" })} (l):{" "}
          {swx(language, { en: "[en] es", es: "en [es]" })}
        </button>
        <button
          onClick={() => print(content(true))}
          className="border rounded px-2 py-1 bg-white hover:bg-neutral-100"
        >
          <Icon icon="print" /> {swx(language, { en: "Print", es: "Imprimir" })}{" "}
          (p)
        </button>
      </div>
    </div>
  );
}
