type Social = {
    name: string;
    href: string;
    label: string;
    svg: string; // inline svg path or full svg
};

const socials: Social[] = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/compyh",
        label: "Instagram",
        svg: '<path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.4 1.4.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1-1.4 1.4-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.7-1.4-1.4-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.7-1 1.4-1.4.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.6.1 4.7.3 3.9.7 3 .1 2 .1 1.4 3.9.7 4.7.5 5.6.5 7 .4 8.3.4 8.7.4 12s0 3.7.1 5c.1 1.4.3 2.3.7 3.1.6.9 1.6 1.9 3.1 2.2.8.4 1.7.6 3.1.7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.4-.1 2.3-.3 3.1-.7 1.5-.3 2.5-1.3 3.1-2.2.4-.8.6-1.7.7-3.1.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.4-.3-2.3-.7-3.1-.6-.9-1.6-1.9-3.1-2.2-.8-.4-1.7-.6-3.1-.7C15.7 0 15.3 0 12 0z"/><circle cx="12" cy="12" r="3.2"/><circle cx="18.4" cy="5.6" r="1.2"/>'
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@yeonghunyun4406",
        label: "YouTube",
        svg: '<path d="M23.5 6.2c-.3-1.2-1.3-2.1-2.5-2.4C19 3.3 12 3.3 12 3.3s-7 0-9 .5C1.8 4.1.8 5 .5 6.2 0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1.2 1.3 2.1 2.5 2.4 2 .5 9 .5 9 .5s7 0 9-.5c1.2-.3 2.2-1.2 2.5-2.4.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.5V8.5L15.8 12l-6.2 3.5z"/>'
    },
    {
        name: "SoundCloud",
        href: "https://soundcloud.com/compyyh",
        label: "SoundCloud",
        svg: '<path d="M17.3 9.2c-.6 0-1.2.2-1.7.5-.2-2.8-2.5-5-5.4-5-.8 0-1.6.2-2.3.5-.3.1-.4.3-.4.6v10.6h9.8c2 0 3.7-1.6 3.7-3.6 0-2-1.7-3.6-3.7-3.6z"/>'
    },
    {
        name: "GitHub",
        href: "https://github.com/YeonghunYvn",
        label: "GitHub",
        svg: '<path d="M12 .5C5.7.5.7 5.5.7 11.9c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.1 2 2.8 1.4 3.5 1.1.1-.8.4-1.4.7-1.7-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.5-2.4 1.3-3.3-.1-.3-.6-1.6.1-3.3 0 0 1.1-.4 3.4 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.7 3.4-1.3 3.4-1.3.7 1.7.2 3 .1 3.3.8.9 1.3 2 1.3 3.3 0 4.5-2.6 5.4-5.1 5.7.4.3.7 1 .7 2.1v3.1c0 .3.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.7C23.3 5.5 18.3.5 12 .5z"/>'
    },
];

export default function SocialIcons() {
    return (
        <div className="flex gap-4 justify-center">
            {socials.map((s) => (
                <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="size-9 rounded-full grid place-items-center bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-white">
                        <g dangerouslySetInnerHTML={{ __html: s.svg }} />
                    </svg>
                </a>
            ))}
        </div>
    );
}


