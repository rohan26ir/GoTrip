import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

// Hero section image import
import heroBg from '../../../../public/Section/hero-bg.webp';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 left-[-80%] lg:left-0">
        <Image
          src={heroBg}
          alt="Beautiful Bangladesh Landscape"
          className="w-full h-full object-cover"
          placeholder="blur"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[2500px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-medium">Explore Bangladesh Today</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Discover The
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Beauty of Bangladesh
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
            Experience breathtaking landscapes, rich cultural heritage, and unforgettable adventures.
            From the world-s longest sea beach to the mystical Sundarbans - your journey begins here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/packages">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 group">
                Explore Tours
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>

            <Link href="/destinations">
              <button className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm">
                View Destinations
              </button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 text-white">
            {[
              { number: '700+', label: 'Destinations' },
              { number: '50+', label: 'Tour Packages' },
              { number: '10K+', label: 'Travelers' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-green-400">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="">
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
      
      </a>

      {/* Featured Destinations Quick Access */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <h3 className="text-white font-semibold mb-3 text-sm">Popular Spots</h3>
          <div className="space-y-2">
            {[
              { name: 'Cox\'s Bazar', emoji: '🏖️' },
              { name: 'Sundarbans', emoji: '🐅' },
              { name: 'Sylhet', emoji: '🍵' }
            ].map((spot, index) => (
              <div key={index} className="flex items-center gap-2 text-white text-sm hover:text-green-300 transition-colors cursor-pointer">
                <span>{spot.emoji}</span>
                <span>{spot.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;