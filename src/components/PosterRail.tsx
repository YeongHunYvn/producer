"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projectPosters, type ProjectPoster } from "@/data/projects";
import { withBasePath } from "@/lib/path";

function PosterCard({ poster }: { poster: ProjectPoster }) {
    return (
        <div className="group snap-center shrink-0 transform-gpu">
            <div
                className="relative w-[280px] md:w-[320px] aspect-[2/3] rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-500 ease-out hover:scale-105 hover:border-blue-500/30 hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.3)] hover:z-10"
            >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                {/* Main Poster Image */}
                <Image
                    src={withBasePath(poster.image)}
                    alt={poster.title}
                    fill
                    sizes="(min-width: 768px) 320px, 280px"
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

                {/* Featured Badge */}
                {poster.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
                        FEATURED
                    </div>
                )}

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                            {poster.title}
                        </h3>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-sm font-semibold">
                            {poster.role}
                        </p>
                        <p className="text-white/70 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {poster.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                            {poster.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm text-white/80 text-xs rounded-full border border-white/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500" />
                </div>
            </div>
        </div>
    );
}

function ScrollButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="absolute top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm text-white rounded-full shadow-2xl hover:from-purple-500/30 hover:to-blue-500/30 hover:scale-110 transition-all duration-300 group border border-white/10"
            style={{ [direction]: "-28px" }}
            aria-label={direction === "left" ? "이전 프로젝트" : "다음 프로젝트"}
        >
            <svg
                className={`w-6 h-6 mx-auto transition-transform duration-200 group-hover:scale-125 ${direction === "right" ? "rotate-180" : ""
                    }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    );
}

function ProgressIndicator({ total, current }: { total: number; current: number }) {
    return (
        <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === current
                            ? "w-12 bg-gradient-to-r from-purple-400 to-blue-400"
                            : "w-2 bg-white/20 hover:bg-white/30"
                        }`}
                />
            ))}
        </div>
    );
}

export default function PosterRail() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToIndex = (index: number) => {
        if (!scrollRef.current) return;
        const cardWidth = window.innerWidth >= 768 ? 320 + 32 : 280 + 32; // card width + gap
        scrollRef.current.scrollTo({
            left: index * cardWidth,
            behavior: "smooth",
        });
    };

    const scrollBy = (direction: "left" | "right") => {
        const newIndex = direction === "left"
            ? Math.max(0, currentIndex - 1)
            : Math.min(projectPosters.length - 1, currentIndex + 1);
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex);
    };

    // 휠 이벤트 리스너 제거 - 자연스러운 페이지 스크롤을 위해

    // Update current index based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;
            const cardWidth = window.innerWidth >= 768 ? 352 : 312; // card + gap
            const scrollLeft = scrollRef.current.scrollLeft;
            const newIndex = Math.round(scrollLeft / cardWidth);
            setCurrentIndex(newIndex);
        };

        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
            return () => scrollContainer.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <>
            <div className="relative mt-12">
                {/* Gradient Fade Edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-900 via-zinc-900/50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-900 via-zinc-900/50 to-transparent z-10 pointer-events-none" />

                {/* Scroll Buttons */}
                <ScrollButton direction="left" onClick={() => scrollBy("left")} />
                <ScrollButton direction="right" onClick={() => scrollBy("right")} />

                {/* Poster Rail */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    <div className="w-10 shrink-0" /> {/* Left padding */}
                    {projectPosters.map((poster) => (
                        <PosterCard key={poster.id} poster={poster} />
                    ))}
                    <div className="w-10 shrink-0" /> {/* Right padding */}
                </div>

                <ProgressIndicator total={projectPosters.length} current={currentIndex} />
            </div>

            {/* 상세 모달 제거됨 */}

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </>
    );
}
