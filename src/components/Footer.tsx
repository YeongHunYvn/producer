export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-12 text-center">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <p className="text-xs font-light tracking-widest text-white/40 uppercase">
                    © {new Date().getFullYear()} Yun Yeong Hun · Music Producer
                </p>
            </div>
        </footer>
    );
}


