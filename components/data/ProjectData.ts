export const ProjectData = [
    {
        id: "netflix-clone",
        name: "Netflix Clone",
        images: [
            '/img/projects/netflix_home.png',
            '/img/projects/netflix_profile.png',
            '/img/projects/netflix_stripe.png',
            '/img/projects/netflix_logged-out.png',
        ],
        githubURL: "https://github.com/TvGelderen/netflix-clone",
        liveURL: "https://netflix-clone-b7491.web.app/",
        skills: [
            "TypeScript",
            "NextJS",
            "Tailwind CSS",
            "Firebase"
        ],
        content: new Map([
            ['en', {
                brief_description: "A Netflix look-alike web application, which allows users to log in and save movies to their own watch list. It shows movies in different categories such as trending, top rated, and different genres. By clicking on a movie more information about it is shown along with the trailer.",
                description: "A website with a UI similar to Netflix which allows users to save movies to their watch list. Users can log in either with their Google accounts or by creating a new account using an email and password combination. By clicking on a movie's image a modal is shown which offers the movie trailer, a brief description of the movie, and the movie's genre, cast, and release date. All the data shown is pulled from the API offered by The Movie Database (TMDB)."
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
            '/img/projects/us-national-parks2.png',
            '/img/projects/us-national-parks3.png',
            '/img/projects/us-national-parks_yosemite.png',
            '/img/projects/us-national-parks_yosemite2.png',
            '/img/projects/us-national-parks_yosemite3.png',
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
                brief_description: "A web application which shows images from some of the United States' national parks. It uses a GoogleMaps API to show the location of each park.",
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
            '/img/projects/crypto-watch_home.png',
            '/img/projects/crypto-watch_list.png',
            '/img/projects/crypto-watch_chartsearch.png',
            '/img/projects/crypto-watch_coinpage.png' 
        ],
        githubURL: "https://github.com/TvGelderen/crypto-watch",
        liveURL: "https://crypto-watch-tvgelderen.vercel.app/",
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