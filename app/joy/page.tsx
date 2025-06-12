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
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">
          Joy & JEMA's bug <Bug className={animationStyles.blink} size={24} color="green" /> & our{' '}
          <Heart className="inline" size={24} color="red" fill="red" />{' '}
          <span className="text-blue-600">Solo</span>
          <span className="text-gray-600">Learn</span>!
        </h1>
      </header>

      {/* Rest of your JSX remains the same but: */}
      {/* Replace all animation classes with styles.module.css references */}
      {/* Example:    <Bug className={animationStyles.blink} size={24} color="green" />   */}
    


            {/* Process 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Process 1: What do SoloLearners like Joy{' '}
         {' '}
          & JEMA{' '}
          {' '}
          want?
        </h2>

        <div className="bg-blue-100 p-4 rounded-lg text-center mb-4">
          <p className="text-blue-800 font-medium inline-flex items-center">
            <Bug className={animationStyles.blink} size={24} color="green" />
            Want the Level 21 bug solved in SL quickly!
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <ArrowDown className="mx-auto" />
          </div>
          <div className="text-center">
            <ArrowDown className="mx-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Yes Path */}
          <div className="text-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold mb-4">
              Yes! <br /> We are Quick!
            </button>
            <ArrowDown className="mx-auto mb-4" />
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 inline-flex items-center">
                Hurrah! <Laugh className={animationStyles.wrench} size={24} color="crimson" className="ml-4" /> Go to Process 2.
              </p>
            </div>
          </div>

          {/* No Path */}
          <div className="text-center">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold mb-4">
              No! <br /> We are slow!
            </button>
            <ArrowDown className="mx-auto mb-4" />
            <div className="bg-blue-100 p-4 rounded-lg mb-4">
              <p className="text-blue-800 inline-flex items-center">
                Let's share <Bug className={animationStyles.tinRightOut} size={24} color="green" /> bug details?
              </p>
            </div>

            <div className="flex justify-center space-x-8 mb-4">
              <ArrowDown className="mx-auto" />
              <ArrowDown className="mx-auto" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Yes Sub-path */}
              <div className="text-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  Yes
                </button>
                <ArrowDown className="mx-auto mb-2" />
                <div className="bg-green-100 p-2 rounded-lg">
                  <p className="text-green-800 text-sm inline-flex items-center">
                    Okay! Then the best <Users className={animationStyles.tinUpOut} size={20} color="black" /> in SL can join to solve
                    the <Bug className={animationStyles.tinUpOut} size={24} color="green" /> Bug. So, we proceed to step 2.
                  </p>
                </div>
              </div>

              {/* No Sub-path */}
              <div className="text-center">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  No
                </button>
                <ArrowDown className="mx-auto mb-2" />
                <div className="bg-red-100 p-2 rounded-lg">
                  <p className="text-red-800 text-sm inline-flex items-center">
                    Too Bad! Every one who crosses level 20 will have to wait till the small team at SL solves the Level
                    21 <Bug className={animationStyles.tinRightOut} size={24} color="green" /> Bug!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process 2 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 inline-flex items-center">
          Process 2: SL joins with the best Coders among{' '}
          <Laptop className={animationStyles.blink} size={20} color="green" /> SoloLearners to fix the Bug.
        </h2>

        <div className="bg-blue-100 p-4 rounded-lg text-center mb-4">
          <p className="text-blue-800 font-medium inline-flex items-center">
            SL gains a system to fix <Bug className={animationStyles.tinUpOut} size={24} color="green" /> bugs?
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <ArrowDown className="mx-auto" />
          <ArrowDown className="mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Teams Path */}
          <div className="text-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold mb-4">
              SL forms Teams <Users className="inline ml-2" size={24} color="white" />
            </button>
            <ArrowDown className="mx-auto mb-4" />
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-green-800 inline-flex items-center">
                Joint teams <Users className="mx-2" size={24} color="gold" /> solves all SL bugs?
              </p>
            </div>

            <div className="flex justify-center space-x-8 mb-4">
              <ArrowDown className="mx-auto" />
              <ArrowDown className="mx-auto" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Yes Sub-path */}
              <div className="text-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  Yes!
                </button>
                <ArrowDown className="mx-auto mb-2" />
                <div className="bg-green-100 p-2 rounded-lg">
                  <p className="text-green-800 text-sm inline-flex items-center">
                    Many hands solve more bugs. Also, team work yields quicker{' '}
                    <History className={animationStyles.blink} size={24} color="blue" /> results.
                  </p>
                </div>
              </div>

              {/* No Sub-path */}
              <div className="text-center">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  No
                </button>
                <ArrowDown className="mx-auto mb-2" />
                <div className="bg-red-100 p-2 rounded-lg">
                  <p className="text-red-800 text-sm inline-flex items-center">
                    SL and SoloLearners can put their heads{' '}
                    <AlertCircle className="mx-1" size={20} color="red" /> together and think of another process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Path */}
          <div className="text-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold mb-4">
              SL asks feedback on <Bug className={animationStyles.burst} size={24} color="black" /> bugs?
            </button>
            <ArrowDown className="mx-auto mb-4" />
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-green-800 inline-flex items-center">
                Okay! SL acts on feedback{' '}
                <MessageSquare className={animationStyles.wrench} size={24} color="indigo" />
              </p>
            </div>
            <ArrowDown className="mx-auto mb-4" />
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 inline-flex items-center">
                SL has an unique team <Laugh className={animationStyles.spin} size={24} color="green" /> of happy
                talented coder volunteers!
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-12 border-t pt-6">
        <p className="italic">
          Some of us <User className={animationStyles.pulse} size={24} color="blue" /> may be in SL for a long time. Who knows,
          maybe a life time! And, each one of us can do our bit for the SL dream team!{' '}
          <ThumbsUp className="inline" size={24} color="purple" /> For a start, we can get the correct and latest
          information on the Level 21 Bug, <Bug className={animationStyles.burst} size={24} color="black" /> or if you have more
          time, please call the person in SoloLearn that you know the most! This is just a{' '}
          <Smile className={animationStyles.wrench} size={24} color="crimson" /> demo of what I could do!
        </p>
      </footer>

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
