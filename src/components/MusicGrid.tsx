"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { musicItems, categoryLabels, type MusicItem, type MusicCategory } from "@/data/music";

function getThumbnailUrl(item: MusicItem) {
    // 커스텀 썸네일 URL이 있으면 우선 사용
    if (item.thumbnailUrl) {
        return item.thumbnailUrl;
    }
    // SoundCloud 플랫폼인데 썸네일이 없는 경우 플레이스홀더 사용
    if (item.platform === 'soundcloud') {
        return '/images/soundcloud-placeholder.svg';
    }
    // YouTube 썸네일
    return `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`;
}

export default function MusicGrid() {
    const [active, setActive] = useState<MusicItem | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<MusicCategory | 'all'>('all');

    // 카테고리별로 필터링된 아이템
    const filteredItems = useMemo(() => {
        if (selectedCategory === 'all') {
            return musicItems;
        }
        return musicItems.filter(item => item.category === selectedCategory);
    }, [selectedCategory]);

    // 카테고리별 아이템 개수 계산
    const categoryCounts = useMemo(() => {
        return {
            all: musicItems.length,
            game: musicItems.filter(item => item.category === 'game').length,
            animation: musicItems.filter(item => item.category === 'animation').length,
            pop: musicItems.filter(item => item.category === 'pop').length,
        };
    }, []);

    const categories: Array<MusicCategory | 'all'> = ['all', 'game', 'animation', 'pop'];

    return (
        <>
            {/* 카테고리 탭 네비게이션 */}
            <div className="mb-12">
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`
                                relative px-6 py-3 rounded-full font-medium transition-all duration-300
                                ${selectedCategory === category
                                    ? 'text-white'
                                    : 'text-white/60 hover:text-white/80'
                                }
                            `}
                        >
                            {/* 배경 그라디언트 */}
                            <div
                                className={`
                                    absolute inset-0 rounded-full transition-all duration-300
                                    ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 opacity-100'
                                        : 'bg-white/5 hover:bg-white/10 opacity-100'
                                    }
                                `}
                            />

                            {/* 선택된 탭 하이라이트 효과 */}
                            {selectedCategory === category && (
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl" />
                            )}

                            {/* 텍스트와 카운트 */}
                            <span className="relative flex items-center gap-2">
                                <span>{categoryLabels[category]}</span>
                                <span className={`
                                    text-xs px-2 py-0.5 rounded-full
                                    ${selectedCategory === category
                                        ? 'bg-white/20 text-white'
                                        : 'bg-white/10 text-white/50'
                                    }
                                `}>
                                    {categoryCounts[category]}
                                </span>
                            </span>
                        </button>
                    ))}
                </div>

                {/* 카테고리 설명 */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-white/50">
                        {selectedCategory === 'all' && 'Browse all music productions'}
                        {selectedCategory === 'game' && 'Game trailers and background music'}
                        {selectedCategory === 'animation' && 'Animation OSTs, openings, endings, and character songs'}
                        {selectedCategory === 'pop' && 'K-POP, R&B, City Pop, and other popular music'}
                    </p>
                </div>
            </div>

            {/* 음악 그리드 */}
            <div className="relative">
                {/* 그리드 컨테이너에 애니메이션 효과 추가 */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    style={{
                        animation: 'fadeIn 0.5s ease-out'
                    }}
                >
                    {filteredItems.map((item, index) => (
                        <button
                            key={`${selectedCategory}-${item.id}`}
                            className="group relative text-left rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/40"
                            onClick={() => setActive(item)}
                            style={{
                                animation: `slideUp 0.5s ease-out ${index * 50}ms both`
                            }}
                        >
                            {/* 카테고리별 색상 그라디언트 */}
                            <div className={`
                                absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                                ${item.category === 'game'
                                    ? 'bg-gradient-to-br from-red-600/20 to-orange-600/20'
                                    : item.category === 'animation'
                                        ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20'
                                        : 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20'
                                }
                            `} />

                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={getThumbnailUrl(item)}
                                    alt={item.title}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover transition-all duration-700 group-hover:scale-[1.1] group-hover:brightness-110"
                                />

                                {/* 카테고리 라벨 & 플랫폼 표시 */}
                                <div className="absolute top-4 left-4 z-10 flex gap-2">
                                    <span className={`
                                        px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm
                                        ${item.category === 'game'
                                            ? 'bg-red-500/20 text-red-200 border border-red-500/30'
                                            : item.category === 'animation'
                                                ? 'bg-purple-500/20 text-purple-200 border border-purple-500/30'
                                                : 'bg-blue-500/20 text-blue-200 border border-blue-500/30'
                                        }
                                    `}>
                                        {categoryLabels[item.category]}
                                    </span>
                                    {item.platform === 'soundcloud' && (
                                        <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-orange-500/20 text-orange-200 border border-orange-500/30">
                                            SoundCloud
                                        </span>
                                    )}
                                </div>

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
                                {item.subtitle && (
                                    <p className="text-sm text-white/60 mt-1">
                                        {item.subtitle}
                                    </p>
                                )}
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

                {/* 아이템이 없을 때 메시지 */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-white/50">No music found in this category.</p>
                    </div>
                )}
            </div>

            {/* 플레이어 모달 */}
            {active && (
                <div
                    className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setActive(null)}
                >
                    <div
                        className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            animation: 'scaleIn 0.3s ease-out'
                        }}
                    >
                        {active.platform === 'soundcloud' ? (
                            // SoundCloud 임베드 플레이어
                            <iframe
                                className="w-full h-full"
                                scrolling="no"
                                frameBorder="no"
                                allow="autoplay"
                                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(active.soundcloudUrl || '')}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                                title={active.title}
                            />
                        ) : (
                            // YouTube 임베드 플레이어
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
                                title={active.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        )}
                    </div>
                    <button
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
                        onClick={() => setActive(null)}
                        aria-label="닫기"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}

            {/* 애니메이션 스타일 */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </>
    );
}