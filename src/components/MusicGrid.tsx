"use client";
import { useState } from "react";
import Image from "next/image";
import { musicItems, type MusicItem } from "@/data/music";

function youtubeThumbnailUrl(id: string) {
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export default function MusicGrid() {
    const [active, setActive] = useState<MusicItem | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {musicItems.map((item, index) => (
                    <button
                        key={item.id}
                        className="group relative text-left rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/40"
                        onClick={() => setActive(item)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Gradient overlay on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src={youtubeThumbnailUrl(item.id)}
                                alt={item.title}
                                fill
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                className="object-cover transition-all duration-700 group-hover:scale-[1.1] group-hover:brightness-110"
                            />
                            {/* Play button overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                                {item.title}
                            </h3>
                            {item.tags && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {item.tags.map((t, i) => (
                                        <span
                                            key={t}
                                            className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 text-white/60 group-hover:text-white/80 transition-colors duration-300"
                                            style={{
                                                animationDelay: `${i * 50}ms`
                                            }}
                                        >
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



