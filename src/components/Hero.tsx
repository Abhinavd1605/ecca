'use client'

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import LightRays from './LightRays';
import { CalendlyModal } from './CalendlyModal';
import Hyperspeed from './ui/hyper';

export function SplineSceneBasic() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <Card className="w-full min-h-screen bg-black relative overflow-hidden border-0">
      
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0x131318,
              brokenLines: 0x131318,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3
            }
          }}
        />
      </div>

      {/* Light rays */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-10"
        fill="white"
      />

      {/* Main Layout - Text on top */}
      <div className="relative z-20 h-full pt-24 sm:pt-32 md:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-center h-full min-h-[calc(100vh-12rem)] max-w-7xl mx-auto">

            {/* Center Text Content */}
            <div className="space-y-6 sm:space-y-8 text-center max-w-4xl mx-auto">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-heading font-black leading-tight sm:leading-[1.1] animate-fade-in drop-shadow-2xl">
                ECCA Car Wash <br />
                Waterless Car Wash <br />
                <span className="gradient-text font-black">Effortlessly.</span>
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glow-border text-base group shadow-xl"
                  onClick={() => setShowCalendly(true)}
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <CalendlyModal open={showCalendly} onOpenChange={setShowCalendly} />

    </Card>
  )
}

export default SplineSceneBasic;
