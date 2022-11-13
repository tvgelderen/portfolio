import { navbar } from "../languages/ui"

export const NavbarData = language => {
    if (navbar[language] === undefined)
        language = 'en'

    return ([
    {
        id: "home",
        name: navbar[language].home,
        path: "/",

    },
    {
        id: "about",
        name: navbar[language].about,
        path: "/#about",
    },
    {
        id: "skills",
        name: navbar[language].skills,
        path: "/#skills",
    },
    {
        id: "projects",
        name: navbar[language].projects,
        path: "/#projects",
    },
    {
        id: "contact",
        name: navbar[language].contact,
        path: "/#contact",
    },
])}