"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
    { id: "music", label: "MUSIC" },
    { id: "projects", label: "PROJECTS" },
    { id: "about", label: "ABOUT" },
];

export default function Header() {
    const [active, setActive] = useState<string>("");
    const [solid, setSolid] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => {
            setSolid(window.scrollY > 8);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // 헤더 높이 고려

            // 각 섹션의 위치를 확인하고 현재 보이는 섹션 찾기
            let currentSection = "";

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i].id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const offsetTop = element.offsetTop;

                    if (scrollPosition >= offsetTop) {
                        currentSection = sections[i].id;
                        break;
                    }
                }
            }

            // 스크롤이 매우 적을 때는 아무것도 활성화하지 않음
            if (window.scrollY < 100) {
                currentSection = "";
            }

            setActive(currentSection);
        };

        // 초기 실행
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${solid
                ? "backdrop-blur-xl bg-gradient-to-b from-black/90 via-zinc-900/80 to-transparent border-b border-white/5"
                : "bg-gradient-to-b from-black/50 to-transparent"
                }`}
        >
            {/* Gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 md:px-8 py-5 md:py-6">
                <div className="flex items-center justify-between">
                    {/* Logo/Name */}
                    <button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setActive("");
                        }}
                        className="group flex items-center gap-3 transition-all duration-300 cursor-pointer relative z-10"
                        aria-label="Back to top"
                        type="button"
                    >
                        <div className="relative">
                            <span className="text-2xl md:text-3xl font-black tracking-tighter font-oswald bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent select-none">
                                YYH
                            </span>
                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </div>
                        <span className="hidden lg:block text-xs text-white/40 font-light tracking-widest uppercase select-none group-hover:text-white/60 transition-colors">
                            Music Producer
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
                        {sections.map(({ id, label }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onMouseEnter={() => setHoveredSection(id)}
                                onMouseLeave={() => setHoveredSection(null)}
                                className={`group relative px-6 py-2.5 rounded-xl transition-all duration-300 ${active === id
                                    ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                                    }`}
                                aria-current={active === id ? "page" : undefined}
                            >
                                <span className="text-xs lg:text-sm font-medium tracking-wider">
                                    {label}
                                </span>

                                {/* Active/Hover indicator */}
                                <span
                                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-300 ${active === id ? "w-full" : hoveredSection === id ? "w-1/2" : "w-0"
                                        }`}
                                />
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 flex flex-col justify-center items-center gap-1.5 group"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-[1.5px] bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[3.75px]" : ""
                            }`} />
                        <span className={`block w-5 h-[1.5px] bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                            }`} />
                        <span className={`block w-5 h-[1.5px] bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[3.75px]" : ""
                            }`} />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav
                    className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    aria-label="Mobile navigation"
                >
                    <div className="flex flex-col gap-2 pb-4">
                        {sections.map(({ id, label }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={() => setIsMenuOpen(false)}
                                className={`px-4 py-3 rounded-xl transition-all duration-300 ${active === id
                                    ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <span className="text-sm font-medium tracking-wider">
                                    {label}
                                </span>
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}


