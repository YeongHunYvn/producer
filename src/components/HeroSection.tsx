'use client';

import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
    const [displayedText1, setDisplayedText1] = useState('');
    const [displayedText2, setDisplayedText2] = useState('');
    const [showCursor1, setShowCursor1] = useState(true);
    const [showCursor2, setShowCursor2] = useState(false);
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    const text1 = 'MUSIC PRODUCER';
    const text2 = 'YUN YEONG HUN';

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
            className="fixed top-0 left-0 right-0 min-h-screen w-full flex items-center justify-center overflow-hidden bg-black z-0"
        >
            {/* 타이핑 텍스트 컨테이너 */}
            <div className="relative w-full h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 xl:px-24">
                {/* 첫 번째 줄: MUSIC PRODUCER */}
                <div className="w-full flex justify-center mb-2 md:mb-4 lg:mb-6">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-black tracking-tighter text-white leading-none font-oswald whitespace-nowrap relative">
                        <span className="inline-block typing-text">
                            {displayedText1}
                        </span>
                        <span
                            className={`inline-block ml-2 w-1 md:w-2 bg-white transition-opacity duration-100 ${showCursor1 ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                height: '0.8em',
                                verticalAlign: 'middle'
                            }}
                        />
                    </h1>
                </div>

                {/* 두 번째 줄: YUN YEONG HUN */}
                <div className="w-full flex justify-center">
                    <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-black tracking-tighter text-white leading-none font-oswald whitespace-nowrap relative">
                        <span className="inline-block typing-text">
                            {displayedText2}
                        </span>
                        <span
                            className={`inline-block ml-2 w-1 md:w-2 bg-white transition-opacity duration-100 ${showCursor2 ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                height: '0.8em',
                                verticalAlign: 'middle'
                            }}
                        />
                    </h2>
                </div>

                {/* 서브텍스트 - 타이핑 완료 후 페이드인 */}
                <div className={`mt-4 md:mt-6 text-center transition-all duration-1000 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-xs md:text-sm lg:text-base text-white/60 font-light tracking-widest uppercase">
                        Composer • Music Producer
                    </p>
                </div>
            </div>
        </section>
    );
}


