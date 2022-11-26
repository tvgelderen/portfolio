export const ProjectData = [
    {
        id: "netflix-clone",
        name: "Netflix Clone",
        images: [
            '/img/projects/netflix.png'
        ],
        githubURL: "https://github.com/TvGelderen/netflix-clone",
        liveURL: "https://netflix-clone-tvgelderen.vercel.app/",
        skills: [
            "TypeScript",
            "NextJS",
            "Tailwind CSS",
            "Firebase"
        ],
        content: new Map([
            ['en', {
                brief_description: "A netflix clone made using NextJS, Tailwind CSS for the front-end and Firebase for the back-end and authentication. The movie data was collected using the API from The Movie Database (TMDB).",
                description: ""
            }],
            ['nl', {
                brief_description: "",
                description: ""
            }]
        ])
    },
    {
        id: "us-national-parks",
        name: "National Parks",
        images: [
            '/img/projects/us-national-parks.png',
            '/img/projects/us-national-parks_yosemite.png',
            '/img/projects/us-national-parks_yosemite2.png',
            '/img/projects/us-national-parks_map-modal.png'
        ],
        githubURL: "https://github.com/TvGelderen/us-national-parks",
        liveURL: "https://us-national-parks-tvgelderen.vercel.app/",
        skills: [
            "JavaScript",
            "NextJS",
            "Tailwind CSS"
        ],
        content: new Map([
            ['en', {
                brief_description: "A NextJS web application which shows images from some of the United States' national parks. It uses a GoogleMaps API to show the location of each park.",
                description: ""
            }],
            ['nl', {
                brief_description: "",
                description: ""
            }]
        ])
    },
    {
        id: "crypto-watch",
        name: "Crypto Watch",
        images: [
            '/img/projects/cryptowatch.png',
            '/img/projects/cryptowatch_list.png',
            '/img/projects/cryptowatch_coins.png',
            '/img/projects/cryptowatch_btc.png' 
        ],
        githubURL: "https://github.com/TvGelderen/crypto-watch",
        liveURL: "",
        skills: [
            "JavaScript",
            "ReactJS",
            "Bootstrap"
        ],
        content: new Map([
            ['en', {
                brief_description: "",
                description: ""
            }],
            ['nl', {
                brief_description: "",
                description: ""
            }]
        ])
    }
]