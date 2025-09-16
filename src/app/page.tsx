import Image from "next/image";
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
      <section id="music" className="relative min-h-screen py-24 bg-black z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Music
            </h2>
            <p className="mt-4 text-white/60 text-lg font-light tracking-wide">Portfolio Collection</p>
          </div>
          <MusicGrid />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen py-24 overflow-hidden bg-black z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="mt-4 text-white/60 text-lg font-light tracking-wide">Game, Animation & Drama Soundtracks</p>
          </div>
          <PosterRail />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen py-24 z-10"
        style={{
          backgroundImage: 'url(/yyh.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'black'
        }}>
        {/* Simple overlay */}
        <div className="absolute inset-0 bg-black/85" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              About
            </h2>
            <p className="text-white/50 text-lg">Career & Experience</p>
          </div>

          {/* Profile Section - Text Only */}
          <div className="flex flex-col items-center mb-24">
            <blockquote className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              "A Good Musician Knows More Than Music."
            </blockquote>
            <div className="max-w-3xl text-center">
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                좋은 프로젝트는 음악만으로 완성되지 않습니다.<br />
                음악을 넘어 모두와 공감하는 능력을 바탕으로 완성도 높은 음악을 만들어 냅니다.
              </p>
              <p className="text-white/70 leading-relaxed">
                끊임없는 새로운 도전을 통해 쌓아온 경험이, 장르의 경계를 넘어서는 다양한 음악을 만들어 냅니다.
              </p>
            </div>
          </div>

          {/* Career Section - Clean Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Doong Sound */}
            <div className="bg-white/[0.08] rounded-2xl p-8 border border-white/20 hover:bg-white/[0.12] transition-all duration-300">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-[100px] h-[100px] flex-shrink-0 relative">
                  <Image
                    src="/images/doong.avif"
                    alt="Doong Sound"
                    fill
                    className="rounded-xl object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">둥사운드</h3>
                  <p className="text-purple-400 font-semibold text-sm">Music Director & Composer</p>
                  <p className="text-white/50 text-sm mt-1">2015 - 2022</p>
                </div>
              </div>
              <ul className="text-white/70 space-y-3 ml-[126px]">
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2 flex-shrink-0">▸</span>
                  <span>게임, 애니메이션, 광고 음악 감독</span>
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2 flex-shrink-0">▸</span>
                  <span>다양한 장르의 음악 작곡 및 편곡</span>
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2 flex-shrink-0">▸</span>
                  <span>사운드 디자인 및 오디오 포스트 프로덕션</span>
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2 flex-shrink-0">▸</span>
                  <span>클라이언트 요구사항 분석 및 맞춤형 솔루션 제공</span>
                </li>
              </ul>
            </div>

            {/* MoleDrum */}
            <div className="bg-white/[0.08] rounded-2xl p-8 border border-white/20 hover:bg-white/[0.12] transition-all duration-300">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-[100px] h-[100px] flex-shrink-0 relative">
                  <Image
                    src="/images/moledrum.png"
                    alt="MoleDrum"
                    fill
                    className="rounded-xl object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">두더지드럼</h3>
                  <p className="text-blue-400 font-semibold text-sm">CEO & Director</p>
                  <p className="text-white/50 text-sm mt-1">2024 - Present</p>
                </div>
              </div>
              <ul className="text-white/70 space-y-3 ml-[126px]">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2 flex-shrink-0">▸</span>
                  <span>인디 게임 스튜디오 설립 및 운영</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2 flex-shrink-0">▸</span>
                  <span>다수의 정부 지원사업 선정</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2 flex-shrink-0">▸</span>
                  <span>텍스트 게임 '조선몽록' 배포 및 운영</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2 flex-shrink-0">▸</span>
                  <span>프로젝트 관리 및 팀 리더십</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen py-24 bg-black z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Contact
            </h2>
          </div>
          <div className="mt-6 space-y-2 text-white/80 max-w-3xl mx-auto text-center">
            <p className="font-light">
              Email: <a href="mailto:compyyh@gmail.com" className="underline hover:text-white transition-colors">compyyh@gmail.com</a>
            </p>
            <div className="mt-4"><SocialIcons /></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
