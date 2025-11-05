"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

type SlideSectionProps = {
    title: string
    subtitle?: string
    description?: string
    // @ts-ignore
    onArrowClick?: () => void
}

export default function SlideSection({ title, subtitle, description, onArrowClick }: SlideSectionProps) {
    return (
        <div className="relative z-10 flex items-center justify-center h-full px-8">
            <div className="text-center max-w-4xl">
                {subtitle && (
                    <div className="mb-4 opacity-70" data-swiper-parallax="-100">
                        <span className="text-white/60 text-lg font-light tracking-wider uppercase">{subtitle}</span>
                    </div>
                )}
                <h1 className="text-6xl md:text-8xl font-light text-white mb-8 leading-tight" data-swiper-parallax="-200">
                    {title}
                </h1>
                {description && (
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto" data-swiper-parallax="-300">
                        {description}
                    </p>
                )}
            </div>


            <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-48 grid place-items-center rounded-full p-3
                   cursor-pointer pointer-events-auto"
                aria-label="Go to section"
                onPointerDown={(e) => e.stopPropagation()} // swiper drag'i tetiklenmesin
                onClick={(e) => {
                    e.stopPropagation()
                    onArrowClick?.()
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        onArrowClick?.()
                    }
                }}
            >
                <ArrowDown className="h-6 w-6 text-white animate-bounce" />
            </motion.button>
        </div>
    )
}
