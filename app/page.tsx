"use client"

import { useRef, useState } from "react"
import ParallaxSlider, { type SliderApi } from "@/components/parallax-slider"
import SlideSection from "@/components/SlideSection"
import { GL } from "@/components/gl"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Testimonials from "@/components/Testimonials"
import Experience from "@/components/Experience";

export default function Home() {
    const [hovering, setHovering] = useState(false)
    const sliderRef = useRef<SliderApi | null>(null)

    const ABOUT_INDEX = 1

    return (
        <>
            <GL hovering={hovering} />

            <main
                className="min-h-screen bg-transparent relative z-10"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                <ParallaxSlider ref={sliderRef} className="bg-transparent">
                    <SlideSection
                        title="Front-End Engineer & QA Automation"
                        subtitle="Clean UI, Reliable Systems"
                        description="I build modern, accessible interfaces and back them with end-to-end testing, automation, and performance-focused engineering. Design quality and product stability are not separate goals — they ship together."

                        onArrowClick={() => sliderRef.current?.slideTo(ABOUT_INDEX)}
                    />

                    <Hero/>
                    <About/>
                    <Experience/>
                    <Projects/>
                    <Skills />
                    <Testimonials />
                </ParallaxSlider>
            </main>
        </>
    )
}
