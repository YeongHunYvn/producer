import SocialIcons from "./SocialIcons";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-black via-zinc-900 to-black border-t border-white/5">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }} />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-20">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                            YUN YEONG HUN
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Music Producer & Composer<br />
                            Creating soundscapes that tell stories
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center">
                        <h4 className="text-white/80 font-semibold mb-6 text-sm tracking-widest uppercase">Contact</h4>
                        <div className="space-y-4">
                            <a
                                href="mailto:compyyh@gmail.com"
                                className="group flex items-center justify-center gap-3 text-white/60 hover:text-purple-400 transition-colors duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm">compyyh@gmail.com</span>
                            </a>
                            <div className="pt-2">
                                <SocialIcons />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-right">
                        <h4 className="text-white/80 font-semibold mb-6 text-sm tracking-widest uppercase">Navigate</h4>
                        <nav className="flex flex-col gap-3">
                            <a href="#hero" className="text-white/60 hover:text-purple-400 transition-colors duration-300 text-sm">
                                Home
                            </a>
                            <a href="#music" className="text-white/60 hover:text-purple-400 transition-colors duration-300 text-sm">
                                Music
                            </a>
                            <a href="#projects" className="text-white/60 hover:text-purple-400 transition-colors duration-300 text-sm">
                                Projects
                            </a>
                            <a href="#about" className="text-white/60 hover:text-purple-400 transition-colors duration-300 text-sm">
                                About
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs font-light tracking-widest text-white/40 uppercase">
                        © {new Date().getFullYear()} Yun Yeong Hun
                    </p>
                    <p className="text-xs text-white/30">
                        Crafted with passion for music and technology
                    </p>
                </div>
            </div>

            {/* Floating gradient effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </footer>
    );
}


