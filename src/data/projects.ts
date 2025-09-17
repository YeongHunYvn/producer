export type ProjectPoster = {
    id: string;
    title: string;
    role: string;
    description: string;
    image: string;
    tags: string[];
    year?: number;
    featured?: boolean;
    link?: string;
};

export const projectPosters: ProjectPoster[] = [
    {
        id: "soulark",
        title: "Soul Ark",
        role: "소울아크",
        description: "BlueStone Soft",
        image: "/projects/cover/soulark.png",
        tags: ["Game"],
        year: 2019,
    },
    {
        id: "heroes-showdown",
        title: "Heroes Showdown",
        role: "히어로즈 쇼다운",
        description: "Pathfinder8",
        image: "/projects/cover/heroesshowdown.jpeg",
        tags: ["Game"],
        year: 2020,
    },
    {
        id: "hit",
        title: "HIT",
        role: "히트",
        description: "Nexon Games",
        image: "/projects/cover/hit.webp",
        tags: ["Game"],
        year: 2015,
    },
    {
        id: "kaiser",
        title: "Kaiser",
        role: "카이저",
        description: "Pathfinder8",
        image: "/projects/cover/kaiser.jpg",
        tags: ["Game"],
        year: 2018,
    },
    {
        id: "larva",
        title: "Larva",
        role: "라바",
        description: "TUBAn",
        image: "/projects/cover/larva.png",
        tags: ["Animation"],
        year: 2015,
    },
    {
        id: "sealook",
        title: "Sealook",
        role: "씰룩",
        description: "Milliovolt",
        image: "/projects/cover/sealook.webp",
        tags: ["Animation"],
        year: 2022,
    },
    {
        id: "bread",
        title: "Bread Barbershop",
        role: "브레드이발소",
        description: "Monster Studio",
        image: "/projects/cover/bread.jpg",
        tags: ["Animation"],
        year: 2019,
    },
    {
        id: "tbuster",
        title: "T-Buster",
        role: "타오르지마 버스터",
        description: "Synergy Media",
        image: "/projects/cover/tbuster.jpg",
        tags: ["Animation"],
        year: 2017,
    },
    {
        id: "naughty",
        title: "Naughty Nuts",
        role: "너티너츠",
        description: "Mostapes",
        image: "/projects/cover/naughty.jpeg",
        tags: ["Animation"],
        year: 2019,
    },
    {
        id: "junglebox",
        title: "Jungle Box",
        role: "정글박스",
        description: "38C",
        image: "/projects/cover/junglebox.jpg",
        tags: ["Animation"],
        year: 2021,
    },
    {
        id: "maca",
        title: "Maca & Roni",
        role: "마카앤로니",
        description: "Acommz",
        image: "/projects/cover/maca.webp",
        tags: ["Animation"],
        year: 2023,
    },
    {
        id: "csp",
        title: "출사표",
        role: "출사표",
        description: "Drama",
        image: "/projects/cover/csp.webp",
        tags: ["OST", "Drama"],
        year: 2020,
    },
    {
        id: "joseon",
        title: "조선생존기",
        role: "조선생존기",
        description: "Drama",
        image: "/projects/cover/joseon.webp",
        tags: ["OST", "Drama"],
        year: 2019,
    },
    {
        id: "heroinside",
        title: "Hero Inside",
        role: "히어로 인사이드",
        description: "Animation",
        image: "/projects/cover/heroinside.jpg",
        tags: ["Animation"],
        year: 2023,
    },
    {
        id: "rotarypark",
        title: "Rotary Park",
        role: "로터리파크",
        description: "Animation",
        image: "/projects/cover/rotarypark.jpg",
        tags: ["Animation"],
        year: 2022,
    },
];


