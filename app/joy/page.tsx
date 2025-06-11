"use client"

import React, { useState } from 'react';
import {
  Bug,
  Heart,
  Laugh,
  Users,
  User,
  Laptop,
  History,
  ThumbsUp,
  Smile,
  ArrowDown,
  MessageSquare,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  Wrench,
  Sparkles
} from 'lucide-react';

const ProcessFlow: React.FC = () => {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">
          Joy & JEMA's bug <Bug className="inline blink" size={24} color="green" /> & our{' '}
          <Heart className="inline" size={24} color="red" fill="red" />{' '}
          <span className="text-blue-600">Solo</span>
          
          <span className="text-gray-600">Learn</span>!
        </h1>
      </header>

      {/* Process 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Process 1: What do SoloLearners like Joy{' '}
          & JEMA{' '}
          want?
        </h2>

        <div className="bg-blue-100 p-4 rounded-lg text-center mb-4">
          <p className="text-blue-800 font-medium inline-flex items-center">
            <Bug className="mr-2 tinRightOut" size={24} color="green" />
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
                Hurrah! <Laugh className="mx-2 wrench" size={24} color="crimson" /> Go to Process 2.
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
                Let's share <Bug className="mx-2 pulse" size={24} color="green" /> bug details?
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
                    Okay! Then the best <Users className="mx-1 pulse" size={20} color="black" /> in SL can join to solve
                    the <Bug className="mx-1" size={20} color="green" /> Bug. So, we proceed to step 2.
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
                    21 <Bug className="mx-1" size={20} color="green" /> Bug!
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
          <Laptop className="mx-2 blink" size={24} color="blue" /> SoloLearners to fix the Bug.
        </h2>

        <div className="bg-blue-100 p-4 rounded-lg text-center mb-4">
          <p className="text-blue-800 font-medium inline-flex items-center">
            SL gains a system to fix <Bug className="mx-2 tinUpOut" size={24} color="green" /> bugs?
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
                    <History className="mx-1 blink" size={20} color="blue" /> results.
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
              SL asks feedback on <Bug className="inline mx-2 burst" size={24} color="black" /> bugs?
            </button>
            <ArrowDown className="mx-auto mb-4" />
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-green-800 inline-flex items-center">
                Okay! SL acts on feedback{' '}
                <MessageSquare className="mx-2 wrench" size={24} color="indigo" />
              </p>
            </div>
            <ArrowDown className="mx-auto mb-4" />
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 inline-flex items-center">
                SL has an unique team <Laugh className="mx-2 animate-spin" size={24} color="crimson" /> of happy
                talented coder volunteers!
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-12 border-t pt-6">
        <p className="italic">
          Some of us <User className="inline pulse" size={24} color="blue" /> may be in SL for a long time. Who knows,
          maybe a life time! And, each one of us can do our bit for the SL dream team!{' '}
          <ThumbsUp className="inline" size={24} color="purple" /> For a start, we can get the correct and latest
          information on the Level 21 Bug, <Bug className="inline burst" size={24} color="green" /> or if you have more
          time, please call the person in SoloLearn that you know the most! This is just a{' '}
          <Smile className="inline wrench" size={24} color="crimson" /> demo of what I could do!
        </p>
      </footer>

      {/* Back to Top Button */}
      <a
        href="#"
        id="back2Top"
        title="Back to top"
        className="hidden fixed bottom-12 right-0 bg-gray-300 text-gray-700 text-center w-10 h-10 leading-10 rounded-l-lg hover:bg-blue-200 hover:text-black"
      >
        ↑
      </a>
    </div>
  );
};

useEffect(() => {
  const backToTop = document.getElementById('back2Top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop?.classList.remove('hidden');
    } else {
      backToTop?.classList.add('hidden');
    }
  });
  
  return () => window.removeEventListener('scroll');
}, []);

export default ProcessFlow;
