import React from 'react';
import heroImage from './assets/hero_ss-left.png';
import logo from './assets/image2vector.svg';

const HeroSection = () => {
    return (
        <div>
            <header className="py-4 bg-gray-900 sm:py-6">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="shrink-0">
                            <a href="#" title="" className="flex">
                                <img className="w-auto h-9" src={logo} alt="" />
                            </a>
                        </div>

                        <div className="flex md:hidden">
                            <button type="button" className="text-white">
                                <span aria-hidden="true">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        {/* TODO: Remove maybe */}
                        <nav className="hidden space-x-10 md:flex md:items-center md:justify-center lg:space-x-12">
                            <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Home </a>
                            <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Privacy Policy </a>
                            <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> About Us </a>
                            <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>
                        </nav>

                        <div className="relative hidden md:justify-center md:items-center md:inline-flex group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                            <a href="#" title="" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button">Sign Up</a>
                        </div>
                    </div>

                    <nav className="md:hidden">
                        <div className="flex flex-col pt-8 pb-4 space-y-6">
                            <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Home </a>
                            <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </a>
                            <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> About Us </a>
                            <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>
                            <div className="relative inline-flex items-center justify-center group">
                                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                <a href="#" title="" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Download Now </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <section className="py-12 bg-gray-900 sm:pb-16 lg:pb-20 xl:pb-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center max-w-5xl grid-cols-1 mx-auto gap-y-8 lg:grid-cols-5 gap-x-16">
                        <div className="max-w-md mx-auto text-center lg:max-w-none lg:col-span-3">
                            <h1 className="text-4xl font-normal text-white uppercase sm:text-5xl lg:text-6xl xl:text-8xl">Personal Training <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">any time, any place</span></h1>
                            <p className="mt-6 text-lg font-normal text-white sm:text-xl">The ultimate personal trainer that fits in your pocket! We tailor fitness plans to your unique needs and goals, offering personalized workouts and guidance directly to you—for free.</p>
                            <div className="mt-8 sm:mt-10">
                                <a href="#" title="" className="inline-flex items-center justify-center px-8 py-4 text-base font-normal text-white transition-all duration-200 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150" role="button"> Download Now </a>
                            </div>
                            <p className="max-w-xs mx-auto mt-4 text-base font-normal text-gray-400 sm:mt-8">
                                Limited time only:<br />
                                Free 30-day trial with full access to all features!
                            </p>
                        </div>
                        <div className="lg:col-span-2 lg:order-first">
                            <img className="w-full max-w-sm mx-auto" src={heroImage} /> 
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HeroSection;
