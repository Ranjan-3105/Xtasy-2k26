import { Link } from 'react-router-dom';
import portraitImg from '../assets/merch_model/merch_band.jpeg';
import landscapeImg from '../assets/merch_model/merch_band_landscape.png';

export function MerchBand() {
    return (
        <section className="relative w-full py-16 md:py-24 flex items-center justify-center overflow-hidden bg-black border-y border-white/5">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-neon-yellow/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] bg-hot-pink/15 blur-[100px] rounded-full pointer-events-none" />

            {/* Noise overlay for grunge feel */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />

            <div className="relative z-10 w-full flex flex-col items-center px-4 md:px-8">

                {/* Poster Wrapper */}
                <div className="relative group w-[98%] sm:w-[90%] md:w-[85%] lg:w-[75%] max-w-5xl flex justify-center items-center">

                    {/* Animated Glow Border Frame behind poster */}
                    <div className="absolute inset-0 bg-gradient-to-r from-hot-pink via-neon-yellow to-hot-pink opacity-40 blur-xl md:blur-2xl group-hover:opacity-75 transition-opacity duration-700 animate-pulse rounded-xl" />

                    {/* Main Poster Image */}
                    <picture className="relative w-full flex justify-center items-center transform transition-transform duration-500 group-hover:scale-[1.01] md:group-hover:scale-[1.02]">
                        <source media="(min-width: 768px)" srcSet={landscapeImg} />
                        <img
                            src={portraitImg}
                            alt="Xtasy Merch Offer"
                            className="w-full max-h-[75vh] md:max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] z-10 bg-black/50"
                        />
                    </picture>

                    {/* Sticker / Badge */}
                    <div className="absolute -top-3 -right-2 md:-top-6 md:-right-6 z-30 bg-neon-yellow text-black font-heading text-sm md:text-xl tracking-widest px-4 md:px-6 py-2 transform rotate-12 shadow-[0_0_20px_rgba(215,255,0,0.6)] border-2 border-black group-hover:rotate-6 transition-transform duration-300">
                        SPECIAL OFFER
                    </div>

                    <div className="absolute -bottom-3 -left-2 md:-bottom-6 md:-left-6 z-30 bg-hot-pink text-white font-heading text-sm md:text-lg tracking-widest px-4 md:px-6 py-2 transform -rotate-6 shadow-[0_0_20px_rgba(230,0,126,0.6)] border-2 border-black group-hover:-rotate-12 transition-transform duration-300">
                        FREE BAND inside
                    </div>

                    {/* Floating Action Button */}
                    <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 z-40 w-[80%] md:w-auto">
                        <Link
                            to="/merch"
                            className="group/btn w-full md:w-auto relative inline-flex items-center justify-center px-6 md:px-12 py-4 md:py-5 font-bold text-white transition-all duration-300 bg-black border-2 border-hot-pink overflow-hidden hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(230,0,126,0.6)] hover:shadow-[0_0_50px_rgba(230,0,126,1)]"
                        >
                            {/* Button Glitch/Color Fill */}
                            <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out bg-hot-pink group-hover/btn:bg-neon-yellow transform translate-y-full group-hover/btn:translate-y-0"></span>

                            <span className="relative flex items-center justify-center gap-2 md:gap-3 text-lg md:text-2xl tracking-[0.15em] font-heading uppercase group-hover/btn:text-black transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover/btn:drop-shadow-none whitespace-nowrap">
                                AVAIL MINE
                                <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
