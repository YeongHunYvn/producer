"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projectPosters, type ProjectPoster } from "@/data/projects";
import { withBasePath } from "@/lib/path";

function PosterCard({ poster, onClick }: { poster: ProjectPoster; onClick: () => void }) {
    return (
        <div className="group snap-center shrink-0 transform-gpu">
            <div
                className="relative w-[280px] md:w-[320px] aspect-[2/3] rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:z-10 cursor-pointer"
                onClick={onClick}
            >
                {/* Main Poster Image */}
                <Image
                    src={withBasePath(poster.image)}
                    alt={poster.title}
                    fill
                    sizes="(min-width: 768px) 320px, 280px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Featured Badge */}
                {poster.featured && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-amber-400 to-amber-600 text-black text-xs font-bold rounded-full shadow-lg">
                        FEATURED
                    </div>
                )}

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold leading-tight">{poster.title}</h3>
                        <p className="text-amber-300 text-sm font-medium">{poster.role}</p>
                        <p className="text-white/80 text-xs leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            {poster.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                            {poster.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs rounded-full border border-white/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
            </div>
        </div>
    );
}

function ScrollButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/80 backdrop-blur-sm text-white rounded-full shadow-2xl hover:bg-black/90 hover:scale-110 transition-all duration-300 group"
            style={{ [direction]: "-24px" }}
            aria-label={direction === "left" ? "이전 프로젝트" : "다음 프로젝트"}
        >
            <svg
                className={`w-5 h-5 mx-auto transition-transform duration-200 group-hover:scale-125 ${direction === "right" ? "rotate-180" : ""
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
        <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-amber-400" : "w-2 bg-white/20"
                        }`}
                />
            ))}
        </div>
    );
}

export default function PosterRail() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedPoster, setSelectedPoster] = useState<ProjectPoster | null>(null);
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
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0b0b0f] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0b0b0f] to-transparent z-10 pointer-events-none" />

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
                        <PosterCard
                            key={poster.id}
                            poster={poster}
                            onClick={() => setSelectedPoster(poster)}
                        />
                    ))}
                    <div className="w-10 shrink-0" /> {/* Right padding */}
                </div>

                <ProgressIndicator total={projectPosters.length} current={currentIndex} />
            </div>

            {/* Modal */}
            {selectedPoster && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setSelectedPoster(null)}
                >
                    <div className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 relative aspect-[2/3] md:aspect-auto">
                                <Image
                                    src={selectedPoster.image}
                                    alt={selectedPoster.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8 space-y-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">{selectedPoster.title}</h2>
                                    <p className="text-amber-400 text-lg font-medium">{selectedPoster.role}</p>
                                    {selectedPoster.year && (
                                        <p className="text-white/60 text-sm mt-1">{selectedPoster.year}</p>
                                    )}
                                </div>

                                <p className="text-white/80 leading-relaxed">{selectedPoster.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {selectedPoster.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-white/10 text-white/90 text-sm rounded-full border border-white/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setSelectedPoster(null)}
                                    className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold py-3 px-6 rounded-xl hover:from-amber-300 hover:to-amber-500 transition-all duration-200"
                                >
                                    닫기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
