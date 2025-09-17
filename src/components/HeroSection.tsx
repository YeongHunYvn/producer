'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
    const [displayedText1, setDisplayedText1] = useState('');
    const [displayedText2, setDisplayedText2] = useState('');
    const [showCursor1, setShowCursor1] = useState(true);
    const [showCursor2, setShowCursor2] = useState(false);
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const text1 = 'MUSIC PRODUCER';
    const text2 = 'YUN YEONG HUN';

    // Mouse move effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        let currentIndex1 = 0;
        let currentIndex2 = 0;
        let typingInterval1: NodeJS.Timeout;
        let typingInterval2: NodeJS.Timeout;
        let cursorInterval1: NodeJS.Timeout;
        let cursorInterval2: NodeJS.Timeout;

        // 첫 번째 텍스트 타이핑
        const startTyping1 = () => {
            // 커서 깜빡임 시작
            cursorInterval1 = setInterval(() => {
                setShowCursor1(prev => !prev);
            }, 530);

            typingInterval1 = setInterval(() => {
                if (currentIndex1 < text1.length) {
                    setDisplayedText1(text1.slice(0, currentIndex1 + 1));
                    currentIndex1++;
                } else {
                    clearInterval(typingInterval1);
                    clearInterval(cursorInterval1);
                    setShowCursor1(false);

                    // 첫 번째 텍스트 완료 후 두 번째 텍스트 시작
                    setTimeout(() => {
                        startTyping2();
                    }, 200);
                }
            }, 100); // 타이핑 속도
        };

        // 두 번째 텍스트 타이핑
        const startTyping2 = () => {
            setShowCursor2(true);

            // 커서 깜빡임 시작
            cursorInterval2 = setInterval(() => {
                setShowCursor2(prev => !prev);
            }, 530);

            typingInterval2 = setInterval(() => {
                if (currentIndex2 < text2.length) {
                    setDisplayedText2(text2.slice(0, currentIndex2 + 1));
                    currentIndex2++;
                } else {
                    clearInterval(typingInterval2);

                    // 타이핑 완료 후 커서 계속 깜빡임
                    setTimeout(() => {
                        clearInterval(cursorInterval2);
                        setShowCursor2(true);
                        setIsTypingComplete(true);

                        // 완료 후에도 커서 깜빡임 유지
                        const finalCursorInterval = setInterval(() => {
                            setShowCursor2(prev => !prev);
                        }, 530);

                        // cleanup에서 제거
                        return () => clearInterval(finalCursorInterval);
                    }, 500);
                }
            }, 100); // 타이핑 속도
        };

        // 초기 딜레이 후 타이핑 시작
        const initialDelay = setTimeout(() => {
            startTyping1();
        }, 500);

        return () => {
            clearTimeout(initialDelay);
            clearInterval(typingInterval1);
            clearInterval(typingInterval2);
            clearInterval(cursorInterval1);
            clearInterval(cursorInterval2);
        };
    }, []);

    return (
        <section
            id="hero"
            className="fixed top-0 left-0 right-0 min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black z-0"
        >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                }} />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    style={{
                        transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                    style={{
                        transform: `translate(${-mousePosition.x * 2}px, ${-mousePosition.y * 2}px)`
                    }}
                />
            </div>

            {/* 타이핑 텍스트 컨테이너 */}
            <div className="relative w-full h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 xl:px-24">
                {/* Small Label */}
                <div className={`mb-8 transition-all duration-1000 ${displayedText1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    <span className="text-white/40 text-sm font-light tracking-[0.3em] uppercase">Creative</span>
                </div>

                {/* 첫 번째 줄: MUSIC PRODUCER */}
                <div className="w-full flex justify-center mb-2 md:mb-4 lg:mb-6">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-black tracking-tighter leading-none font-oswald whitespace-nowrap relative">
                        <span className="inline-block typing-text bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                            {displayedText1}
                        </span>
                        <span
                            className={`inline-block ml-2 w-1 md:w-2 bg-gradient-to-b from-purple-400 to-blue-400 transition-opacity duration-100 ${showCursor1 ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                height: '0.8em',
                                verticalAlign: 'middle'
                            }}
                        />
                    </h1>
                </div>

                {/* 두 번째 줄: YUN YEONG HUN with gradient */}
                <div className="w-full flex justify-center">
                    <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-black tracking-tighter leading-none font-oswald whitespace-nowrap relative">
                        <span className="inline-block typing-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-300%">
                            {displayedText2}
                        </span>
                        <span
                            className={`inline-block ml-2 w-1 md:w-2 bg-gradient-to-b from-purple-400 to-blue-400 transition-opacity duration-100 ${showCursor2 ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                height: '0.8em',
                                verticalAlign: 'middle'
                            }}
                        />
                    </h2>
                </div>

                {/* 서브텍스트 - 타이핑 완료 후 페이드인 */}
                <div className={`mt-8 md:mt-12 text-center transition-all duration-1000 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex items-center justify-center gap-8 text-white/40">
                        <span className="text-sm font-light tracking-widest uppercase">Composer</span>
                        <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                        <span className="text-sm font-light tracking-widest uppercase">Music Producer</span>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="mt-16 animate-bounce">
                        <svg className="w-6 h-6 text-white/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}


