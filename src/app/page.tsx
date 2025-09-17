import Image from "next/image";
import { withBasePath } from "@/lib/path";
import Footer from "@/components/Footer";
import MusicGrid from "@/components/MusicGrid";
import PosterRail from "@/components/PosterRail";
import SocialIcons from "@/components/SocialIcons";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* Hero Section - Fixed Background */}
      <HeroSection />

      {/* Spacer to push content down */}
      <div className="h-screen" />

      {/* Music Section - Covers Hero Section on Scroll */}
      <section id="music" className="relative min-h-screen py-32 z-10">
        {/* Subtle Gradient Mask for Smooth Transition - only at the top */}
        <div className="absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-transparent to-black pointer-events-none z-20" />

        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70 mb-4">
                Music
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </div>
            <p className="text-white/40 text-lg mt-6 font-light tracking-widest uppercase">Portfolio Collection</p>
          </div>
          <MusicGrid />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black z-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70 mb-4">
                Projects
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>
            <p className="text-white/40 text-lg mt-6 font-light tracking-widest uppercase">Game, Animation & Drama Soundtracks</p>
          </div>
          <PosterRail />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen py-32 z-10 bg-black">
        {/* Background Image - bigger and positioned higher */}
        <div className="absolute inset-0 flex items-start justify-center pt-20" style={{ zIndex: 0 }}>
          <div className="relative w-[700px] h-[900px] md:w-[800px] md:h-[1000px]">
            <Image
              src={withBasePath("/yyh.JPG")}
              alt=""
              fill
              priority
              className="object-contain opacity-50"
            />
            {/* Softer gradient fade edges - less aggressive */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
          </div>
        </div>

        {/* Overall dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Section Title with enhanced design */}
          <div className="text-center mb-24">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70 mb-4">
                About
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </div>
            <p className="text-white/40 text-lg mt-6 font-light tracking-widest uppercase">Career & Experience</p>
          </div>

          {/* Profile Section with enhanced typography */}
          <div className="relative mb-32">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 blur-3xl" />
            <div className="relative flex flex-col items-center">
              <blockquote className="text-3xl md:text-5xl font-bold text-white mb-16 text-center leading-tight">
                <span className="text-6xl text-purple-400/30 absolute -left-8 -top-4">&ldquo;</span>
                A Good Musician<br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Knows More Than Music
                </span>
                <span className="text-6xl text-blue-400/30 absolute -right-8 -bottom-4">&rdquo;</span>
              </blockquote>
              <div className="max-w-3xl text-center space-y-6">
                <p className="text-white/80 text-xl leading-relaxed">
                  좋은 프로젝트는 음악만으로 완성되지 않습니다.
                </p>
                <p className="text-white/60 text-lg leading-relaxed">
                  음악을 넘어 모두와 공감하는 능력을 바탕으로<br />
                  완성도 높은 음악을 만들어 냅니다.
                </p>
                <p className="text-white/50 leading-relaxed">
                  끊임없는 새로운 도전을 통해 쌓아온 경험이,<br />
                  장르의 경계를 넘어서는 다양한 음악을 만들어 냅니다.
                </p>
              </div>
            </div>
          </div>

          {/* Career Timeline with enhanced design */}
          <div className="mb-32">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Career Timeline
              </span>
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-30" />

              <div className="space-y-12">
                {/* Doong Sound */}
                <div className="relative flex items-center justify-center">
                  <div className="w-full md:w-5/12 md:pr-8 md:text-right">
                    <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                      <div className="flex items-center gap-4 md:flex-row-reverse">
                        <div className="w-20 h-20 flex-shrink-0 relative">
                          <Image
                            src={withBasePath("/images/doong.avif")}
                            alt="Doong Sound"
                            fill
                            className="rounded-xl object-contain"
                          />
                        </div>
                        <div className="flex-1 text-left md:text-right">
                          <h4 className="text-2xl font-bold text-white mb-1">둥사운드</h4>
                          <p className="text-purple-400 font-semibold">Music Director & Composer</p>
                          <p className="text-white/40 text-sm mt-2">2015 - 2022</p>
                        </div>
                      </div>
                      <ul className="mt-6 space-y-2 text-white/60 text-sm text-left md:text-right">
                        <li>게임, 애니메이션, 광고 음악 감독</li>
                        <li>다양한 장르의 음악 작곡 및 편곡</li>
                        <li>사운드 디자인 및 오디오 포스트 프로덕션</li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full ring-4 ring-purple-500/20" />
                  <div className="hidden md:block w-5/12" />
                </div>

                {/* MoleDrum */}
                <div className="relative flex items-center justify-center">
                  <div className="hidden md:block w-5/12" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/20" />
                  <div className="w-full md:w-5/12 md:pl-8">
                    <div className="bg-gradient-to-l from-blue-500/10 to-transparent p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 flex-shrink-0 relative">
                          <Image
                            src={withBasePath("/images/moledrum.png")}
                            alt="MoleDrum"
                            fill
                            className="rounded-xl object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-white mb-1">두더지드럼</h4>
                          <p className="text-blue-400 font-semibold">CEO & Director</p>
                          <p className="text-white/40 text-sm mt-2">2024 - Present</p>
                        </div>
                      </div>
                      <ul className="mt-6 space-y-2 text-white/60 text-sm">
                        <li>인디 게임 스튜디오 설립 및 운영</li>
                        <li>다수의 정부 지원 사업 선정</li>
                        <li>텍스트 게임 '조선몽록' 배포 및 운영</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Media Appearances Section with enhanced design */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 blur-3xl" />

            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Media Appearances
              </span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Recruit Interview */}
              <a
                href="http://www.hkrecruit.co.kr/news/articleView.html?idxno=24647"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg shadow-purple-500/20 bg-white">
                      <Image
                        src={withBasePath("/images/recruit.png")}
                        alt="HK Recruit"
                        width={80}
                        height={80}
                        className="object-contain w-full h-full p-2"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        Recruit Interview
                      </h4>
                      <p className="text-white/50 text-sm mb-3">HK Recruit</p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        음악 감독으로서의 철학과 경험을 담은 인터뷰
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-white/20 group-hover:text-purple-400 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* EBS 뭐든지 해결단 */}
              <a
                href="https://youtu.be/NRZPlBsfWlM?si=GYxcxHgWWFPMGQsW"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg shadow-red-500/20 bg-white">
                      <Image
                        src={withBasePath("/images/ebs.png")}
                        alt="EBS"
                        width={80}
                        height={80}
                        className="object-contain w-full h-full p-2"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                        EBS 뭐든지 해결단
                      </h4>
                      <p className="text-white/50 text-sm mb-3">교육방송 출연</p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        음악 감독의 역할과 업무에 대한 소개
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-white/20 group-hover:text-red-400 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
