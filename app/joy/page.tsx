'use client';

import React, { useState, useEffect } from 'react';
import { 
  Bug, Heart, Laugh, Users, User, Laptop, History, 
  ThumbsUp, Smile, ArrowDown, MessageSquare, AlertCircle 
} from 'lucide-react';

const JoyPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Animation styles with proper React.CSSProperties typing
  const animationStyles: Record<string, React.CSSProperties> = {
    blink: {
      animation: 'blink 1s step-end infinite',
      display: 'inline-block'
    },
    pulse: {
      animation: 'pulse 1s ease-in-out infinite',
      display: 'inline-block'
    },
    tinRightOut: {
      animation: 'tinRightOut 3s ease-in-out infinite',
      display: 'inline-block'
    },
    tinUpOut: {
      animation: 'tinUpOut 3s ease-in-out infinite',
      display: 'inline-block'
    },
    wrench: {
      animation: 'wrench 3s ease-in-out infinite',
      display: 'inline-block'
    },
    burst: {
      animation: 'burst 3s ease-in-out infinite',
      display: 'inline-block'
    },
    spin: {
      animation: 'spin 3s linear infinite',
      display: 'inline-block'
    }
  };

  useEffect(() => {
    setIsMounted(true);
    
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
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
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
          <Heart style={{display: 'inline-block'}} size={24} color="red" fill="red" />{' '}
          <span className="text-blue-600">Solo</span>
          <span className="text-gray-600">Learn</span>!
        </h1>
      </header>

      {/* Process 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Process 1: What do SoloLearners like Joy &amp; JEMA want?
        </h2>

        <div className="bg-blue-100 p-4 rounded-lg text-center mb-4">
          <p className="text-blue-800 font-medium inline-flex items-center">
            <Bug style={animationStyles.tinRightOut} size={24} color="green" />
            <span className="ml-2">Want the Level 21 bug solved in SL quickly!</span>
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <ArrowDown style={{display: 'block', margin: '0 auto'}} />
          </div>
          <div className="text-center">
            <ArrowDown style={{display: 'block', margin: '0 auto'}} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Yes Path */}
          <div className="text-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold mb-4">
              Yes! <br /> We are Quick!
            </button>
            <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-4" />
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 inline-flex items-center">
                Hurrah! <Laugh style={animationStyles.wrench} size={24} color="crimson" className="ml-2" /> 
                <span>Go to Process 2.</span>
              </p>
            </div>
          </div>

          {/* No Path */}
          <div className="text-center">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold mb-4">
              No! <br /> We are slow!
            </button>
            <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-4" />
            <div className="bg-blue-100 p-4 rounded-lg mb-4">
              <p className="text-blue-800 inline-flex items-center">
                <Bug style={animationStyles.pulse} size={24} color="green" />
                <span className="ml-2">Let's share bug details?</span>
              </p>
            </div>

            <div className="flex justify-center space-x-8 mb-4">
              <ArrowDown style={{display: 'block', margin: '0 auto'}} />
              <ArrowDown style={{display: 'block', margin: '0 auto'}} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Yes Sub-path */}
              <div className="text-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  Yes
                </button>
                <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-2" />
                <div className="bg-green-100 p-2 rounded-lg">
                  <p className="text-green-800 text-sm inline-flex items-center">
                    <Users style={animationStyles.tinUpOut} size={24} color="black" />
                    <span>Okay! Then the best in SL can join to solve the Bug. So, we proceed to step 2.</span>
                  </p>
                </div>
              </div>

              {/* No Sub-path */}
              <div className="text-center">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  No
                </button>
                <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-2" />
                <div className="bg-red-100 p-2 rounded-lg">
                  <p className="text-red-800 text-sm inline-flex items-center">
                    <span>Too Bad! Every one who crosses level 20 will have to wait till the small team at SL solves the Level 21 </span>
                    <Bug style={animationStyles.tinRightOut} size={24} color="green" />
                    <span>Bug!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process 2 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Process 2: SL joins with the best Coders among{' '}
          <Laptop style={animationStyles.blink} size={20} color="blue" /> SoloLearners to fix the Bug.
        </h2>

        <div className="bg-blue-100 p-4 rounded-lg text-center mb-4">
          <p className="text-blue-800 font-medium inline-flex items-center">
            <Bug style={animationStyles.tinUpOut} size={24} color="green" />
            <span className="ml-2">SL gains a system to fix bugs?</span>
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <ArrowDown style={{display: 'block', margin: '0 auto'}} />
          <ArrowDown style={{display: 'block', margin: '0 auto'}} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Teams Path */}
          <div className="text-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold mb-4">
              SL forms Teams <Users style={{display: 'inline-block'}} size={24} color="white" className="ml-2" />
            </button>
            <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-4" />
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-green-800 inline-flex items-center">
                <Users style={{color: 'gold', display: 'inline-block'}} size={24} />
                <span>Joint teams solves all SL bugs?</span>
              </p>
            </div>

            <div className="flex justify-center space-x-8 mb-4">
              <ArrowDown style={{display: 'block', margin: '0 auto'}} />
              <ArrowDown style={{display: 'block', margin: '0 auto'}} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Yes Sub-path */}
              <div className="text-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  Yes!
                </button>
                <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-2" />
                <div className="bg-green-100 p-2 rounded-lg">
                  <p className="text-green-800 text-sm inline-flex items-center">
                    <span>Many hands solve more bugs. Also, team work yields quicker </span>
                    <History style={animationStyles.blink} size={24} color="blue" />
                    <span>results.</span>
                  </p>
                </div>
              </div>

              {/* No Sub-path */}
              <div className="text-center">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  No
                </button>
                <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-2" />
                <div className="bg-red-100 p-2 rounded-lg">
                  <p className="text-red-800 text-sm inline-flex items-center">
                    <span>SL and SoloLearners can put their heads </span>
                    <AlertCircle style={{display: 'inline-block'}} size={24} color="red" />
                    <span>together and think of another process.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Path */}
          <div className="text-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold mb-4">
              SL asks feedback on <Bug style={animationStyles.burst} size={24} color="black" /> bugs?
            </button>
            <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-4" />
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-green-800 inline-flex items-center">
                <MessageSquare style={animationStyles.wrench} size={24} color="indigo" />
                <span>Okay! SL acts on feedback</span>
              </p>
            </div>
            <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-4" />
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 inline-flex items-center">
                <Laugh style={animationStyles.spin} size={24} color="crimson" />
                <span>SL has an unique team of happy talented coder volunteers!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-12 border-t pt-6">
        <p className="italic">
          Some of us <User style={animationStyles.pulse} size={24} color="blue" /> may be in SL for a long time. Who knows,
          maybe a life time! And, each one of us can do our bit for the SL dream team!{' '}
          <ThumbsUp style={{display: 'inline-block'}} size={24} color="purple" /> For a start, we can get the correct and latest
          information on the Level 21 Bug, <Bug style={animationStyles.burst} size={24} color="black" /> or if you have more
          time, please call the person in SoloLearn that you know the most! This is just a{' '}
          <Smile style={animationStyles.wrench} size={24} color="crimson" /> demo of what I could do!
        </p>
      </footer>

      {/* Back to Top Button */}
      <a
        href="#"
        id="back2Top"
        title="Back to top"
        style={{
          position: 'fixed',
          display: 'none',
          bottom: '50px',
          right: '0',
          backgroundColor: '#DDD',
          color: '#555',
          textAlign: 'center',
          width: '40px',
          height: '40px',
          lineHeight: '40px',
          textDecoration: 'none',
          borderRadius: '4px 0 0 4px'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#DDF';
          e.currentTarget.style.color = '#000';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#DDD';
          e.currentTarget.style.color = '#555';
        }}
      >
        ↑
      </a>
    </div>
  );
};

export default JoyPage;
