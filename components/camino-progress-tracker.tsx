"use client"

import { useEffect, useState } from "react"
import { MapPin, Flag, Footprints, Star, Sparkles, Calendar } from 'lucide-react'

// Define the Camino route milestones
const caminoMilestones = [
  { name: "Saint-Jean-Pied-de-Port", distance: 0, description: "Traditional starting point of the French Way" },
  { name: "Roncesvalles", distance: 25, description: "First major stop after crossing the Pyrenees" },
  { name: "Pamplona", distance: 70, description: "Famous for the running of the bulls" },
  { name: "Logroño", distance: 170, description: "Capital of La Rioja wine region" },
  { name: "Burgos", distance: 280, description: "Luc & Loli's starting point - Gothic cathedral city" },
  { name: "León", distance: 450, description: "Known for its Gothic cathedral and Roman walls" },
  { name: "San Martin del Camino", distance: 485, description: "Small village on the Meseta plateau" },
  { name: "Astorga", distance: 515, description: "Historic city with Gaudí's Episcopal Palace" },
  { name: "O Cebreiro", distance: 600, description: "Mystical mountain village entering Galicia" },
  { name: "Santiago de Compostela", distance: 774, description: "The final destination" },
]

// Journey details based on real information from Luc
const startDate = new Date("2024-05-18") // May 18 start date from Burgos
const sanMartinDate = new Date("2024-05-28") // Today they reached San Martin del Camino
const startingPoint = 280 // Burgos (their actual starting point)
const currentProgress = 485 // San Martin del Camino (current location)
const todayPosition = 485 // San Martin del Camino (where they are today)
const tomorrowPosition = 515 // Astorga (tomorrow's destination)

// Calculate days walking and distance walked
const daysWalking = Math.floor((sanMartinDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
const distanceWalked = currentProgress - startingPoint // 485 - 280 = 205 km
const averageDailyDistance = Math.round(distanceWalked / daysWalking)

export default function CaminoProgressTracker() {
  const [animatedProgress, setAnimatedProgress] = useState(startingPoint)
  const [activeIndex, setActiveIndex] = useState(0)
  const totalDistance = caminoMilestones[caminoMilestones.length - 1].distance

  // Calculate percentage for the progress bar
  const progressPercentage = (currentProgress / totalDistance) * 100

  // Find the current milestone index
  useEffect(() => {
    // Animate the progress from starting point to current progress
    const animationDuration = 2000 // 2 seconds
    const startTime = Date.now()

    const animateProgress = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / animationDuration, 1)
      const animatedValue = startingPoint + (distanceWalked * progress)
      setAnimatedProgress(animatedValue)

      if (progress < 1) {
        requestAnimationFrame(animateProgress)
      }
    }

    requestAnimationFrame(animateProgress)

    // Find the current milestone
    for (let i = caminoMilestones.length - 1; i >= 0; i--) {
      if (currentProgress >= caminoMilestones[i].distance) {
        setActiveIndex(i)
        break
      }
    }
  }, [currentProgress, startingPoint, distanceWalked])

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-yellow-200 animate-fade-in-up max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-orange-800 mb-6 flex items-center justify-center gap-3">
        <Footprints className="w-8 h-8 text-orange-600 animate-bounce" />
        Luc & Loli's Camino Journey
        <Footprints className="w-8 h-8 text-orange-600 animate-bounce" />
      </h3>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-4 border-2 border-blue-200">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h4 className="font-bold text-blue-800">Journey Timeline</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-sm text-gray-600">Started From</div>
              <div className="font-bold text-blue-600">Burgos</div>
              <div className="text-sm">May 18, 2024</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Days Walking</div>
              <div className="font-bold text-purple-600 text-2xl">{daysWalking}</div>
              <div className="text-sm">Steady progress!</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Distance Walked</div>
              <div className="font-bold text-green-600">{distanceWalked} km</div>
              <div className="text-sm">From Burgos</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Average Daily</div>
              <div className="font-bold text-orange-600">{averageDailyDistance} km/day</div>
              <div className="text-sm">Perfect pace!</div>
            </div>
          </div>
        </div>

        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          Follow Luc and Loli's incredible progress on the Camino de Santiago! Starting from{" "}
          <span className="font-bold text-blue-600">Burgos on May 18th</span>, they've been walking for{" "}
          <span className="font-bold text-purple-600">{daysWalking} days</span> and have covered{" "}
          <span className="font-bold text-green-600">{distanceWalked} km</span>, reaching{" "}
          <span className="font-bold text-orange-600">San Martin del Camino</span> today! Tomorrow they're aiming for
          <span className="font-bold text-green-600"> Astorga</span>, continuing their journey to Santiago de Compostela!
        </p>
      </div>

      {/* Map visualization */}
      <div className="relative mb-8">
        <div className="h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full relative overflow-hidden border-2 border-amber-300">
          {/* Path line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-amber-300 transform -translate-y-1/2"></div>

          {/* Starting point highlight */}
          <div
            className="absolute top-1/2 h-3 bg-blue-400 transform -translate-y-1/2 rounded-full"
            style={{ 
              left: `${(startingPoint / totalDistance) * 100}%`, 
              width: `${((currentProgress - startingPoint) / totalDistance) * 100}%`,
              transition: "width 0.5s ease-out" 
            }}
          ></div>

          {/* Animated progress */}
          <div
            className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-orange-500 to-red-500 transform -translate-y-1/2 rounded-full"
            style={{ width: `${(animatedProgress / totalDistance) * 100}%`, transition: "width 0.5s ease-out" }}
          ></div>

          {/* Milestone markers */}
          {caminoMilestones.map((milestone, index) => {
            const position = (milestone.distance / totalDistance) * 100
            const isPassed = currentProgress >= milestone.distance
            const isCurrent = index === activeIndex
            const isStartingPoint = milestone.distance === startingPoint

            return (
              <div
                key={milestone.name}
                className="absolute top-1/2 transform -translate-y-1/2"
                style={{ left: `${position}%` }}
              >
                {isCurrent ? (
                  <div className="relative">
                    <MapPin
                      className="w-8 h-8 text-red-600 transform -translate-x-1/2 -translate-y-full animate-bounce"
                      style={{ animationDuration: "2s" }}
                    />
                    <div className="absolute top-0 left-0 w-12 h-12 bg-red-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                  </div>
                ) : isStartingPoint ? (
                  <Flag className="w-6 h-6 text-blue-600 transform -translate-x-1/2 -translate-y-full" />
                ) : isPassed ? (
                  <Star className="w-6 h-6 text-yellow-500 transform -translate-x-1/2 -translate-y-full" />
                ) : (
                  <div className="w-4 h-4 rounded-full bg-gray-300 transform -translate-x-1/2"></div>
                )}
              </div>
            )
          })}

          {/* End marker */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-yellow-500 transform -translate-x-1/2 -translate-y-full" />
              <div className="absolute w-6 h-6 rounded-full bg-yellow-300/30 animate-ping transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Milestone details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {caminoMilestones.map((milestone, index) => {
          const isPassed = currentProgress >= milestone.distance
          const isCurrent = index === activeIndex
          const isStartingPoint = milestone.distance === startingPoint

          return (
            <div
              key={milestone.name}
              className={`p-4 rounded-xl transition-all duration-300 ${
                isCurrent
                  ? "bg-orange-100 border-2 border-orange-300 shadow-lg transform scale-105"
                  : isStartingPoint
                    ? "bg-blue-50 border-2 border-blue-300"
                  : isPassed
                    ? "bg-amber-50 border border-amber-200"
                    : "bg-gray-50 border border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {isCurrent ? (
                  <MapPin className="w-5 h-5 text-red-600 animate-pulse" />
                ) : isStartingPoint ? (
                  <Flag className="w-5 h-5 text-blue-600" />
                ) : isPassed ? (
                  <Star className="w-5 h-5 text-yellow-500" />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                )}
                <h4
                  className={`font-bold ${
                    isCurrent 
                      ? "text-orange-800" 
                      : isStartingPoint 
                        ? "text-blue-800"
                        : isPassed 
                          ? "text-amber-800" 
                          : "text-gray-600"
                  }`}
                >
                  {milestone.name}
                </h4>
              </div>
              <p className="text-sm text-gray-600 ml-7">{milestone.description}</p>
              <p className="text-sm font-medium ml-7 mt-1">
                {milestone.distance} km{" "}
                {index > 0 && `(+${milestone.distance - caminoMilestones[index - 1].distance} km from previous)`}
                {isStartingPoint && (
                  <span className="ml-2 text-blue-600 font-bold">← Starting Point (May 18)</span>
                )}
                {milestone.distance === todayPosition && (
                  <span className="ml-2 text-orange-600 font-bold animate-pulse">← Today</span>
                )}
                {milestone.distance === tomorrowPosition && (
                  <span className="ml-2 text-green-600 font-bold animate-pulse">← Tomorrow (goal)</span>
                )}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border-2 border-green-200">
        <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
          <Footprints className="w-5 h-5" />
          Recent Progress
        </h4>
        <div className="flex justify-between items-center">
          <div className="text-center p-2">
            <div className="text-sm text-gray-600">Today</div>
            <div className="font-bold text-orange-600">San Martin del Camino</div>
            <div className="text-sm">485 km total / 205 km walked</div>
          </div>
          <div className="flex-1 h-1 bg-gradient-to-r from-orange-300 to-green-300 mx-4 rounded-full"></div>
          <div className="text-center p-2">
            <div className="text-sm text-gray-600">Tomorrow (goal)</div>
            <div className="font-bold text-green-600">Astorga</div>
            <div className="text-sm">515 km total / 235 km walked</div>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Walking at a perfect Camino pace of {averageDailyDistance}km per day! They've walked {distanceWalked}km from Burgos and have about {774 - currentProgress}km remaining to Santiago de Compostela.
        </p>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
        <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
          <Star className="w-5 h-5" />
          Journey Highlights
        </h4>
        <div className="text-sm text-gray-700 space-y-1">
          <p>
            • <span className="font-semibold">Started:</span> May 18, 2024 from Burgos (skipping the first 280km)
          </p>
          <p>
            • <span className="font-semibold">Days walking:</span> {daysWalking} days of steady progress
          </p>
          <p>
            • <span className="font-semibold">Distance walked:</span> {distanceWalked}km through the Spanish Meseta
          </p>
          <p>
            • <span className="font-semibold">Remaining:</span> ~{774 - currentProgress}km to Santiago de Compostela
          </p>
          <p>
            • <span className="font-semibold">Estimated completion:</span> Early June at their perfect pace!
          </p>
        </div>
      </div>

      {/* Inspirational quote */}
      <div className="mt-8 text-center italic text-gray-700">
        "The Camino provides what the pilgrim needs, not what they want."
        <div className="text-sm mt-1">— Camino de Santiago proverb</div>
      </div>
    </div>
  )
}
