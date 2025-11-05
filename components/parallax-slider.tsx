"use client"

import { useRef, useState, forwardRef, useImperativeHandle } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Parallax, EffectFade, Mousewheel, Keyboard } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

import "swiper/css"
import "swiper/css/parallax"
import "swiper/css/effect-fade"

export type SliderApi = {
    slideTo: (index: number) => void
    next: () => void
    prev: () => void
}

type ParallaxSliderProps = React.PropsWithChildren<{
    className?: string
}>

const ParallaxSlider = forwardRef<SliderApi, ParallaxSliderProps>(({ children, className }, ref) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const swiperRef = useRef<SwiperType | null>(null)


    useImperativeHandle(ref, () => ({
        slideTo: (i: number) => swiperRef.current?.slideTo(i),
        next: () => swiperRef.current?.slideNext(),
        prev: () => swiperRef.current?.slidePrev(),
    }), [])

    const slides = (Array.isArray(children) ? children : [children]).filter(Boolean) as React.ReactElement[]

    return (
        <div className={`relative h-screen w-full bg-transparent ${className ?? ""}`}>
            <Swiper
                modules={[Parallax, EffectFade, Mousewheel, Keyboard]}
                direction="vertical"
                parallax
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={900}
                mousewheel={{ forceToAxis: true, releaseOnEdges: true, sensitivity: 0.8, thresholdDelta: 20 }}
                keyboard={{ enabled: true }}
                onSwiper={(s) => (swiperRef.current = s)}
                onSlideChange={(s) => setActiveIndex(s.activeIndex)}
                className="h-full w-full"
                data-swiper-parallax="-23%"
            >
                {slides.map((node, idx) => (
                    <SwiperSlide key={idx} className="relative">
                        {node}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center space-y-6">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => swiperRef.current?.slideTo(i)}
                        className={`relative transition-all duration-300 ${i === activeIndex ? "scale-110" : "scale-100 hover:scale-105"}`}
                        aria-label={`Go to section ${i + 1}`}
                    >
                        <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${i === activeIndex ? "border-white bg-white" : "border-white/40 bg-transparent hover:border-white/60"}`} />
                    </button>
                ))}
            </div>


            <div className="absolute left-8 bottom-8 z-20">
        <span className="text-white/60 text-sm font-light">
          {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
            </div>
        </div>
    )
})

ParallaxSlider.displayName = "ParallaxSlider"
export default ParallaxSlider
