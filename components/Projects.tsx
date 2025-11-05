"use client"

import Image from "next/image"
import React, { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {ArrowLeft, ArrowRight, ChevronLeft, ChevronRight} from "lucide-react"

const projects = [
    {
        title: "TestBase",
        description:
            "TestBase is an end-to-end, AI-powered test automation tool that redefines how teams approach quality assurance. Instead of manually repeating test cases, TestBase records user actions, understands scenarios, and automates them for future runs",
        image: "testBase.png",
        tags: ["React", "Node.js", "MongoDB", "Express", "TailwindCss", "Jenkins", "Playwright", "Docker"],
    },
    {
        title: "Agency Website",
        description: "A dark-themed, modern agency website with dynamic animations and creative portfolio showcase.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XBQiY8S0RicSuHjJrGUi6RxTSeYqDd.png",
        tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    },
    {
        title: "Shopify",
        description: "Shopify Website & Store setup on mobile ",
        image: "shopify.png",
        tags: ["React", "TypeScript", "TailwindCss","Liquid"],
    },
    {
        title: "Netflix Clone",
        description: "Netflix Clone Page",
        image: "netflix.png",
        tags: ["React", "TypeScript", "TailwindCss"],
    },
    {
        title: "Frigocan",
        description: "Dedicated company site for mobile and web responsive design about Refrigeration Systems and Cold Storage",
        image: "frigocan.png",
        tags: ["Next.Js", "TypeScript", "TailwindCss","shadcnUI"],
    },
    {
        title: "Twitter Clone",
        description: "Twitter Clone Page",
        image: "twitter.png",
        tags: ["Next.Js", "TypeScript", "TailwindCss","shadcnUI"],
    },
    {
        title: "Alcohol Menü Page",
        description: "Study showing General Alcohol Prices in Turkey",
        image: "alcohol.png",
        tags: ["Vue.js","Vue3", "TypeScript", "TailwindCss","Node.js","Express.js","MongoDB"],
    },
    {
        title: "BusX",
        description: "Bus Ticket Application that Shows Bus Schedules and makes purchases",
        image: "busx.png",
        tags: ["Vite", "TypeScript", "TailwindCss","Node.js","Express.js","MongoDB","Playwright", "Cypress"],
    },
]

interface ProjectsProps {
    title?: string
    subtitle?: string
    description?: string
}
type Skill = { name: string }
type SkillCategory = { name: string; icon: React.ReactNode; skills: Skill[] }

export default function Projects({ title }: ProjectsProps) {
    // Ekran genişliğine göre sayfa başına kart sayısı: <md=1, <lg=2, >=lg=3



    const [pageSize, setPageSize] = useState(3)
    useEffect(() => {
        const compute = () => {
            if (typeof window === "undefined") return 3
            if (window.innerWidth < 768) return 1
            if (window.innerWidth < 1024) return 2
            return 3
        }
        const onResize = () => setPageSize(compute())
        setPageSize(compute())
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    const totalPages = Math.max(1, Math.ceil(projects.length / pageSize))
    const [page, setPage] = useState(0)
    const [direction, setDirection] = useState<1 | -1>(1) // animasyon yönü
    const pages: SkillCategory[][] = []
    const isFirst = page === 0
    const isLast = page === totalPages - 1

    const visibleProjects = useMemo(() => {
        const start = page * pageSize
        return projects.slice(start, start + pageSize)
    }, [page, pageSize])

    const next = () => {
        setDirection(1)
        setPage((p) => (p + 1) % totalPages)
    }
    const prev = () => {
        setDirection(-1)
        setPage((p) => (p - 1 + totalPages) % totalPages)
    }

    const variants = {
        enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.98 }),
        center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45 } },
        exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.98, transition: { duration: 0.35 } }),
    }

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center pt-20 bg-quaternary">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">{title ?? "My Projects"}</h2>

                <div className="relative">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={`${page}-${pageSize}`}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {visibleProjects.map((project, index) => (
                                <motion.div
                                    key={project.title + index}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <div className="relative  h-48 md:h-64">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            fill
                                            className="object-cover "
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-gray-600 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="bg-gray-200 text-primary px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Alt dolaşım butonları */}
                    <div className="mt-8 flex  items-center justify-center gap-3">
                        <button
                            onClick={prev}
                            aria-label="Previous projects"
                            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-white/10 text-white border-white/40"
                        >
                            <motion.span
                                aria-hidden
                                animate={isFirst ? { x: 0 } : { x: [0, -8, 0] }}
                                transition={{ duration: 1.1, repeat: isFirst ? 0 : Infinity, ease: "easeInOut" }}
                                className="inline-flex transform-gpu will-change-transform"
                            >

                                <ArrowLeft className="h-5 w-5" />
                            </motion.span>
                            Prev
                        </button>

                        <button
                            onClick={next}
                            aria-label="Next projects"
                            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-white/10 text-white border-white/40"
                        >
                            Next
                            <motion.span
                                aria-hidden
                                animate={isLast ? { x: 0 } : { x: [0, 8, 0] }}
                                transition={{ duration: 1.1, repeat: isLast ? 0 : Infinity, ease: "easeInOut" }}
                                className="inline-flex transform-gpu will-change-transform"
                            >

                                <ArrowRight className="h-5 w-5" />
                            </motion.span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
