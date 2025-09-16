"use client";
import Image from "next/image";
import { useRef } from "react";
import { projectPosters, type ProjectPoster } from "@/data/projects";
import { withBasePath } from "@/lib/path";

// Derive lists from source data
const gameProjects: ProjectPoster[] = projectPosters.filter((p) => p.tags.includes("Game"));
const animationProjects: ProjectPoster[] = projectPosters.filter((p) => p.tags.includes("Animation"));

function Row({ items }: { items: ProjectPoster[] }) {
    const scroller = useRef<HTMLDivElement>(null);
    const scrollBy = (dx: number) => scroller.current?.scrollBy({ left: dx, behavior: "smooth" });
    return (
        <div className="relative">
            <div ref={scroller} className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory">
                <div className="flex gap-4 min-w-full pr-4">
                    {items.map((p) => (
                        <div key={p.title} className="snap-start shrink-0 w-[280px] md:w-[360px]">
                            <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
                                <div className="relative aspect-video">
                                    <Image src={withBasePath(p.image)} alt={p.title} fill className="object-cover" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-sm font-semibold">{p.title}</h3>
                                    {p.role && <p className="text-xs text-white/60 mt-1">{p.role}</p>}
                                    {p.description && <p className="text-xs text-white/70 mt-2">{p.description}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                <button onClick={() => scrollBy(-320)} className="px-3 py-2 rounded bg-white/10 hover:bg-white/20" aria-label="왼쪽으로">‹</button>
                <button onClick={() => scrollBy(320)} className="px-3 py-2 rounded bg-white/10 hover:bg-white/20" aria-label="오른쪽으로">›</button>
            </div>
        </div>
    );
}

export default function ProjectsCarousel() {
    return (
        <div className="mt-8 space-y-10">
            <div>
                <h3 className="text-xl font-semibold">게임</h3>
                <Row items={gameProjects} />
            </div>
            <div>
                <h3 className="text-xl font-semibold">애니메이션</h3>
                <Row items={animationProjects} />
            </div>
        </div>
    );
}



