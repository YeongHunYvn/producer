export type MusicCategory = 'game' | 'animation' | 'pop';

export type MusicItem = {
    id: string; // YouTube video id or SoundCloud track id
    title: string;
    subtitle?: string;
    category: MusicCategory;
    tags?: string[];
    platform?: 'youtube' | 'soundcloud'; // 플랫폼 구분
    soundcloudUrl?: string; // SoundCloud URL (SoundCloud인 경우)
    thumbnailUrl?: string; // 커스텀 썸네일 URL (SoundCloud 등)
};

export const musicItems: MusicItem[] = [
    // Game Music
    { id: "ZOxF_COk6TI", title: "SoulArk Trailer", category: "game", tags: ["Trailer", "Epic", "Action"] },
    { id: "_OCJ03bOyfs", title: "Heroes Showdown Trailer", category: "game", tags: ["Trailer", "Epic", "Song"] },
    { id: "yoTvu34lbsI", title: "T.O.P & Unknown Heroes Main Theme", category: "game", tags: ["Orchestral", "Hybrid"] },
    {
        id: "hit-gang-gang-sullai",
        title: "Hit - Gang Gang Sullai",
        category: "game",
        tags: ["Ethnic", "Orchestral"],
        platform: "soundcloud",
        soundcloudUrl: "https://soundcloud.com/compyyh/hit-gang-gang-sullai",
        thumbnailUrl: "https://i1.sndcdn.com/artworks-000184016700-dhrf1f-t500x500.jpg"
    },
    {
        id: "hit-the-lunar-new-year",
        title: "Hit - The Lunar New Year",
        category: "game",
        tags: ["Ethnic", "Orchestral"],
        platform: "soundcloud",
        soundcloudUrl: "https://soundcloud.com/compyyh/hit-the-lunar-new-year",
        thumbnailUrl: "https://i1.sndcdn.com/artworks-000204591044-d0rbbl-t500x500.jpg"
    },
    {
        id: "soulark-trailer-ending",
        title: "SoulArk Boss",
        category: "game",
        tags: ["Orchestral", "Action", "Epic"],
        platform: "soundcloud",
        soundcloudUrl: "https://soundcloud.com/compyyh/soulark-trailer-ending",
        thumbnailUrl: "https://i1.sndcdn.com/artworks-000170078866-u7cawl-t500x500.jpg"
    },
    {
        id: "kaiser-battle",
        title: "Kaiser Battle",
        category: "game",
        tags: ["Battle", "Action", "Percussion"],
        platform: "soundcloud",
        soundcloudUrl: "https://soundcloud.com/compyyh/kaiser-battle",
        thumbnailUrl: "https://i1.sndcdn.com/artworks-000361514220-ndmbsp-t500x500.jpg"
    },
    {
        id: "kaiser-field",
        title: "Kaiser Field",
        category: "game",
        tags: ["Orchestral", "Peaceful"],
        platform: "soundcloud",
        soundcloudUrl: "https://soundcloud.com/compyyh/kaiser-field",
        thumbnailUrl: "https://i1.sndcdn.com/artworks-000361514682-7htkhl-t500x500.jpg"
    },
    {
        id: "kaiser-dessert",
        title: "Kaiser Dessert",
        category: "game",
        tags: ["Strings", "Dark"],
        platform: "soundcloud",
        soundcloudUrl: "https://soundcloud.com/compyyh/kaiser-dessert",
        thumbnailUrl: "https://i1.sndcdn.com/artworks-000361514523-ik8vzo-t500x500.jpg"
    },

    // Animation Music
    { id: "2OCKBeDNenw", title: "Larva Season4 Opening Song (Trailer)", category: "animation", tags: ["Song", "Band", "Latin"] },
    { id: "eqN7X7NIZ2U", title: "T-Buster Ending Song", category: "animation", tags: ["Song", "Band"] },
    { id: "-jGvCDRONZQ", title: "Sealook Episode - DJ", category: "animation", tags: ["Electronic"] },
    { id: "9Z0jXwaY7p0", title: "Sealook Episode - Lo-fi", category: "animation", tags: ["Lo-fi", "Soul"] },
    { id: "sdp2rw53beE", title: "Sealook Music Collection", category: "animation", tags: ["Compilation"] },
    { id: "Ojj0I0eI6J0", title: "KaKao - Peach fiv Song", category: "animation", tags: ["Casual"] },
    { id: "UJTTMXzS7FY", title: "Hero Inside Great Finger Character Song", category: "animation", tags: ["Song", "Latin"] },
    { id: "1xOwM-eH6EA", title: "Hero Inside Mummy Girl Character Song", category: "animation", tags: ["Song", "Electronic"] },
    { id: "PF6gkw78KRE", title: "Hero Inside Disco Duo Character Song", category: "animation", tags: ["Song", "Disco"] },

    // POP Music
    { id: "iia2HAu-thE", title: "Sealook Ending Song - by Riize", category: "pop", tags: ["K-Pop", "Soul"] },
    { id: "8k0uwv9Y6ck", title: "출사표 OST 봄꽃 - by Chuu", category: "pop", tags: ["OST", "Drama"] },
    { id: "uH5U7VQfutY", title: "너도 올래", category: "pop", tags: ["CityPop", "Dance"] },
    { id: "N4daO4QF5_c", title: "왠지 좋은 일이 생길 것 같아", category: "pop", tags: ["K-Pop", "Dance"] },
    { id: "_az4BQMjXos", title: "하나 둘 셋", category: "pop", tags: ["R&B", "Urban"] },
    { id: "_qEQoewVzNs", title: "Certainty", category: "pop", tags: ["K-Pop", "Hiphop"] },
    { id: "sWp1PbafVOU", title: "Fly away", category: "pop", tags: ["Ballad", "Orchestra"] },
    { id: "qkinwyJhM6A", title: "Think about me", category: "pop", tags: ["R&B", "Urban"] },
    { id: "5JzZ5P0xAJ0", title: "놓자", category: "pop", tags: ["R&B", "Ballad"] },

];

export const categoryLabels: Record<MusicCategory | 'all', string> = {
    all: 'All',
    game: 'Game',
    animation: 'Animation',
    pop: 'POP'
};


