"use client"

import { useEffect, useState } from "react"
import { Heart, Star, Flower, Sparkles, MessageSquare } from "lucide-react"
import CaminoProgressTracker from "./components/camino-progress-tracker"

export default function CelebrationPage() {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])
  const [flowers, setFlowers] = useState<Array<{ id: number; x: number; y: number; delay: number; rotation: number }>>(
    [],
  )

  useEffect(() => {
    // Generate random sparkles
    const newSparkles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }))
    setSparkles(newSparkles)

    // Generate random flowers
    const newFlowers = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6,
      rotation: Math.random() * 360,
    }))
    setFlowers(newFlowers)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-purple-100 overflow-hidden relative">
      {/* Animated Background Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: "2s",
          }}
        >
          <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" style={{ animationDuration: "3s" }} />
        </div>
      ))}

      {/* Animated Background Flowers */}
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute animate-bounce"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            animationDelay: `${flower.delay}s`,
            animationDuration: "4s",
            transform: `rotate(${flower.rotation}deg)`,
          }}
        >
          <Flower className="w-6 h-6 text-pink-400 opacity-60" />
        </div>
      ))}

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <Heart
            key={i}
            className="absolute w-8 h-8 text-red-300 animate-pulse opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-4 mb-6">
            <Star className="w-12 h-12 text-yellow-500 animate-spin" style={{ animationDuration: "4s" }} />
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-pulse">
              ¡Felicidades!
            </h1>
            <Star className="w-12 h-12 text-yellow-500 animate-spin" style={{ animationDuration: "4s" }} />
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-purple-700 mb-4 animate-bounce">Luc & Loli</h2>
          <div className="flex justify-center gap-4 mb-8">
            <Flower className="w-16 h-16 text-pink-500 animate-pulse" />
            <Sparkles className="w-16 h-16 text-yellow-500 animate-spin" />
            <Flower className="w-16 h-16 text-purple-500 animate-pulse" />
          </div>
        </div>

        {/* Luc's Portrait Section */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-amber-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-md transform scale-110 animate-pulse"></div>
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="/images/luc-portrait.png"
                    alt="Luc smiling with his characteristic white beard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 border-2 border-orange-300">
                  <Sparkles className="w-8 h-8 text-yellow-500 animate-spin" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-orange-800 mb-4">Luc</h3>
                <p className="text-xl text-gray-700 leading-relaxed italic">
                  "The founding light of The Constellation, now illuminating the ancient Camino path with the same
                  wisdom, warmth, and wonder that has guided so many communities around the world."
                </p>
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    Founding Member
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Visionary Leader
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Camino Pilgrim
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-pink-200 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-purple-800 mb-6 flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-yellow-500" />A Journey of Stars and Steps
              <Sparkles className="w-8 h-8 text-yellow-500" />
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              What a magnificent constellation of moments you've created, dear Luc! From the very first spark of
              <span className="font-bold text-purple-600"> The Constellation</span> in 2005, you've been the guiding
              star, the founding light that brought together souls and dreams across the cosmos of possibility.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              And now, as your feet trace the ancient paths of the{" "}
              <span className="font-bold text-orange-600">Camino in Spain</span>, each step echoes with the wisdom of
              years spent nurturing, leading, and inspiring. What poetry in motion! What beautiful symmetry between the
              journey within and the journey without!
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 shadow-2xl border-4 border-yellow-200 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <h3 className="text-3xl font-bold text-pink-800 mb-6 flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-red-500 animate-pulse" />
              Seven Years of Stardust
              <Heart className="w-8 h-8 text-red-500 animate-pulse" />
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Seven years! Like the seven colors of the rainbow, the seven notes of music, the seven wonders of the
              world - your leadership has painted <span className="font-bold text-purple-600">The Constellation</span>{" "}
              in brilliant hues, composed symphonies of collaboration, and created wonders of human connection.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              You didn't just chair meetings, Luc - you orchestrated dreams! You didn't just manage - you inspired! You
              didn't just lead - you illuminated the path for others to find their own light.
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-8 shadow-2xl border-4 border-pink-200 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <h3 className="text-3xl font-bold text-orange-800 mb-6 flex items-center justify-center gap-3">
              <Flower className="w-8 h-8 text-pink-500 animate-bounce" />
              Loli, Partner in Wonder
              <Flower className="w-8 h-8 text-pink-500 animate-bounce" />
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              And Loli, what joy to celebrate you both! As Luc walks the Camino, you walk alongside in spirit, in love,
              in the shared adventure of life. Together you've created your own constellation of love, support, and
              shared dreams. May every sunrise on the Camino bring you both new wonders to discover!
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl border-4 border-yellow-200 animate-fade-in-up"
            style={{ animationDelay: "1.5s" }}
          >
            <h3 className="text-3xl font-bold text-purple-800 mb-6 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-yellow-500 animate-spin" />
              The Path Ahead Sparkles
              <Star className="w-8 h-8 text-yellow-500 animate-spin" />
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              As you step down from the Chair, you're not stepping away - you're stepping into a new dance! The
              Constellation will forever bear the imprint of your founding vision, your gentle strength, your unwavering
              commitment to the SALT-CLCP principles that flow like rivers of wisdom.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              May the Camino fill your hearts with wonder, your spirits with peace, and your souls with the deep
              satisfaction of a mission beautifully accomplished. The stars you've helped others reach will forever
              shine with gratitude for your gift of leadership and love.
            </p>
          </div>

          <div className="mt-12 mb-12 animate-fade-in-up" style={{ animationDelay: "2s" }}>
            <CaminoProgressTracker />
          </div>
        </div>

        {/* Closing Celebration */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "2s" }}>
          <div className="inline-flex items-center gap-6 mb-8">
            <Sparkles className="w-16 h-16 text-yellow-500 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              ¡Buen Camino!
            </h2>
            <Sparkles className="w-16 h-16 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-2xl text-purple-700 font-semibold mb-8">
            With infinite appreciation, boundless admiration, and sparkling wishes for your journey ahead!
          </p>
          <div className="flex justify-center gap-4">
            <Heart className="w-12 h-12 text-red-500 animate-bounce" />
            <Star className="w-12 h-12 text-yellow-500 animate-spin" />
            <Flower className="w-12 h-12 text-pink-500 animate-pulse" />
            <Sparkles className="w-12 h-12 text-purple-500 animate-ping" />
          </div>
        </div>

        {/* Contact footer */}
        <div className="border-t border-gray-200 p-4 text-center text-sm text-gray-600 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 w-full mt-8 rounded-lg">
          <div className="flex items-center justify-center mb-1">
            <MessageSquare className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
            <span>
              For suggestions WhatsApp{" "}
              <a
                href="https://cvemrafi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Rafique
              </a>{" "}
              at +91 7558845528
            </span>
          </div>
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 496.08 512" className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400">
              <path
                fill="currentColor"
                d="M245.83 214.87l-33.22 17.28c-9.43-19.58-25.24-19.93-27.46-19.93-22.13 0-33.22 14.61-33.22 43.84 0 23.57 9.21 43.84 33.22 43.84 14.47 0 24.65-7.09 30.57-21.26l30.55 15.5c-6.17 11.51-25.69 38.98-65.1 38.98-22.6 0-73.96-10.32-73.96-77.05 0-58.69 43-77.06 72.63-77.06 30.72-.01 52.7 11.95 65.99 35.86zm143.05 0l-32.78 17.28c-9.5-19.77-25.72-19.93-27.9-19.93-22.14 0-33.22 14.61-33.22 43.84 0 23.55 9.23 43.84 33.22 43.84 14.45 0 24.65-7.09 30.54-21.26l31 15.5c-2.1 3.75-21.39 38.98-65.09 38.98-22.69 0-73.96-9.87-73.96-77.05 0-58.67 42.97-77.06 72.63-77.06 30.71-.01 52.58 11.95 65.56 35.86zM247.56 8.05C104.74 8.05 0 123.11 0 256.05c0 138.49 113.6 248 247.56 248 129.93 0 248.44-100.87 248.44-248 0-137.87-106.62-248-248.44-248zm.87 450.81c-112.54 0-203.7-93.04-203.7-202.81 0-105.42 85.43-203.27 203.72-203.27 112.53 0 202.82 89.46 202.82 203.26-.01 121.69-99.68 202.82-202.84 202.82z"
              />
            </svg>
            <span>
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                License 4.0
              </a>{" "}
              • The Constellation 💡 Faiths & Non-Faiths Team
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  )
}
