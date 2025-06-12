'use client';

import React, { useState, useEffect } from 'react';
import { 
  Bug, Heart, Laugh, Users, User, Laptop, History, 
  ThumbsUp, Smile, ArrowDown, MessageSquare, AlertCircle 
} from 'lucide-react';
import Image from 'next/image';

const JoyPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Animation styles
  const animationStyles = {
    blink: {
      animation: 'blink 1s step-end infinite'
    },
    pulse: {
      animation: 'pulse 1s ease-in-out infinite'
    },
    tinRightOut: {
      animation: 'tinRightOut 3s ease-in-out infinite'
    },
    tinUpOut: {
      animation: 'tinUpOut 3s ease-in-out infinite'
    },
    wrench: {
      animation: 'wrench 3s ease-in-out infinite'
    },
    burst: {
      animation: 'burst 3s ease-in-out infinite'
    }
  };

  useEffect(() => {
    setIsMounted(true);
    
    // Add global styles for animations
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 0.5; }
        50% { transform: scale(1.2); opacity: 1; }
      }
      @keyframes tinRightOut {
        0%, 20%, 40%, 50% { opacity: 1; transform: scale(1, 1) translateX(0); }
        10%, 30% { transform: scale(1.1, 1.1) translateX(0); }
        100% { opacity: 0; transform: scale(1, 1) translateX(900%); }
      }
      @keyframes tinUpOut {
        0%, 20%, 40%, 50% { opacity: 1; transform: scale(1, 1) translateY(0); }
        10%, 30% { transform: scale(1.1, 1.1) translateY(0); }
        100% { opacity: 0; transform: scale(1, 1) translateY(-900%); }
      }
      @keyframes wrench {
        0 { transform: rotate(-12deg); }
        8% { transform: rotate(12deg); }
        10% { transform: rotate(24deg); }
        18% { transform: rotate(-24deg); }
        20% { transform: rotate(-24deg); }
        28% { transform: rotate(24deg); }
        30% { transform: rotate(24deg); }
        38% { transform: rotate(-24deg); }
        40% { transform: rotate(-24deg); }
        48% { transform: rotate(24deg); }
        50% { transform: rotate(24deg); }
        58% { transform: rotate(-24deg); }
        60% { transform: rotate(-24deg); }
        68% { transform: rotate(24deg); }
        75%, 100% { transform: rotate(0); }
      }
      @keyframes burst {
        0 { opacity: .6; }
        50% { transform: scale(1.8); opacity: 0; }
        100% { opacity: 0; }
      }
    `;
    document.head.appendChild(styleElement);

    const handleScroll = () => {
      const backToTop = document.getElementById('back2Top');
      if (backToTop) {
        backToTop.style.display = window.pageYOffset > 300 ? 'block' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(styleElement);
    };
  }, []);

  if (!isMounted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="h-screen flex items-center justify-center">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">
          Joy &amp; JEMA&apos;s bug <Bug style={animationStyles.blink} size={24} color="green" /> &amp; our{' '}
          <Heart className="inline" size={24} color="red" fill="red" />{' '}
          <span className="text-blue-600">Solo</span>
          <Image
            src="https://kyft.club/wp-content/uploads/2020/10/sololearn200.png"
            alt="SoloLearn"
            width={30}
            height={30}
            className="inline"
            unoptimized
          />
          <span className="text-gray-600">Learn</span>!
        </h1>
      </header>

      {/* Example usage of animations */}
      <div className="mb-4">
        <Bug style={animationStyles.tinRightOut} size={24} color="green" />
        <Laugh style={animationStyles.wrench} size={24} color="crimson" className="ml-4" />
        <Users style={animationStyles.pulse} size={24} color="black" className="ml-4" />
      </div>

      {/* Back to Top Button */}
      <a
        href="#"
        id="back2Top"
        title="Back to top"
        className="fixed hidden bottom-12 right-0 bg-gray-300 text-gray-700 text-center w-10 h-10 leading-10 rounded-l-lg hover:bg-blue-200 hover:text-black"
      >
        ↑
      </a>
    </div>
  );
};

export default JoyPage;
