import { navbar } from "../../languages/ui"

export const NavbarData = (language:string) => {
    if (navbar.get(language) === undefined)
        language = 'en'

    return ([
    {
        id: "hero",
        name: navbar.get(language)?.home,
        path: "/",

    },
    {
        id: "about",
        name: navbar.get(language)?.about,
        path: "/#about",
    },
    {
        id: "skills",
        name: navbar.get(language)?.skills,
        path: "/#skills",
    },
    {
        id: "projects",
        name: navbar.get(language)?.projects,
        path: "/#projects",
    },
    {
        id: "contact",
        name: navbar.get(language)?.contact,
        path: "/#contact",
    },
])}