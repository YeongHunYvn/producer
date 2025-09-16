"use client";
import { useState } from "react";
import Image from "next/image";
import { musicItems, type MusicItem } from "@/data/music";

function youtubeThumbnailUrl(id: string) {
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export default function MusicGrid() {
    const [active, setActive] = useState<MusicItem | null>(null);

    return (
        <>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {musicItems.map((item) => (
                    <button
                        key={item.id}
                        className="group text-left rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                        onClick={() => setActive(item)}
                    >
                        <div className="relative aspect-video">
                            <Image
                                src={youtubeThumbnailUrl(item.id)}
                                alt={item.title}
                                fill
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-sm font-medium">{item.title}</h3>
                            {item.tags && (
                                <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-white/60">
                                    {item.tags.map((t) => (
                                        <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {active && (
                <div
                    className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setActive(null)}
                >
                    <div className="w-full max-w-4xl aspect-video bg-black border border-white/10" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
                            title={active.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                    <button
                        className="absolute top-4 right-4 text-white/80 hover:text-white underline"
                        onClick={() => setActive(null)}
                        aria-label="닫기"
                    >
                        닫기
                    </button>
                </div>
            )}
        </>
    );
}



