"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
    { id: "music", label: "MUSIC" },
    { id: "projects", label: "PROJECTS" },
    { id: "about", label: "ABOUT" },
    { id: "contact", label: "CONTACT" },
];

export default function Header() {
    const [active, setActive] = useState<string>("");
    const [solid, setSolid] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${solid
                ? "backdrop-blur-lg bg-black/80 border-b border-white/10"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 md:px-8 py-4 md:py-6">
                <div className="flex items-center justify-between">
                    {/* Logo/Name */}
                    <button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setActive("");
                        }}
                        className="group flex items-center gap-3 transition-all duration-300 cursor-pointer relative z-10 -ml-2 pl-2 pr-4 py-2 hover:bg-white/5 rounded-lg"
                        aria-label="Back to top"
                        type="button"
                    >
                        <div className="relative">
                            <span className="text-xl md:text-2xl font-black tracking-tighter font-oswald text-white select-none">
                                YYH
                            </span>
                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </div>
                        <span className="hidden lg:block text-xs text-white/60 font-light tracking-widest uppercase select-none group-hover:text-white/80 transition-colors">
                            Music Producer
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-12" aria-label="Main navigation">
                        {sections.map(({ id, label }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                className={`group relative text-xs lg:text-sm font-medium tracking-wider transition-all duration-300 ${active === id
                                    ? "text-white"
                                    : "text-white/60 hover:text-white"
                                    }`}
                                aria-current={active === id ? "page" : undefined}
                            >
                                {label}
                                <span
                                    className={`absolute -bottom-2 left-0 h-[1px] bg-white transition-all duration-300 ${active === id ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[3.75px]" : ""
                            }`} />
                        <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                            }`} />
                        <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[3.75px]" : ""
                            }`} />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-64 mt-6" : "max-h-0"
                        }`}
                    aria-label="Mobile navigation"
                >
                    <div className="flex flex-col gap-4 pb-4">
                        {sections.map(({ id, label }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-sm font-medium tracking-wider transition-all duration-300 ${active === id
                                    ? "text-white"
                                    : "text-white/60 hover:text-white"
                                    }`}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}


