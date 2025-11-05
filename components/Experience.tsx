"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants, Transition } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight } from "lucide-react"

type Experience = {
    company: string
    position: string
    period: string
    description: string
    technologies: string[]
    responsibilities: string[]
}

export default function Experience() {
    const experiences: Experience[] = [
        {
            company: "Heybooster",
            position: "Front-End Developer Testing/QA and Automation Developer",
            period: "MAY 2023 - APRİL 2025",
            description: "At Heybooster, I contributed to an AI-powered analytics tool designed to optimize digital marketing performance. As a\n" +
                "Frontend Developer in the team, I took responsibility for improving frontend infrastructure, architecting the test framework,\n" +
                "and enhancing product quality.",
            technologies: ["ReactJS", "Vue3","Vite","Vue2", "Node.js", "TypeScript", "Playwright", "AWS", "Docker", "Jenkins","TailwindCSS", "Bosstrap"],
            responsibilities: [
                "At the beginning, the application faced significant performance bottlenecks, including excessive data fetching, lack of state management, and unnecessarily large package sizes. By replacing costly npm packages, implementing Vuex for state management, and applying lazy loading strategies, I was able to reduce page load time from 35 seconds to under 3 seconds.",
                " Additionally, I developed a custom test automation system for Heybooster, enabling the automation of E2E test processes and establishing a comprehensive test infrastructure." ,
                "Furthermore, I played a key role in migrating Heybooster’s app.heybooster.ai project from Vue.js 2 and Webpack to Vue.js 3 and Vite.js, resulting in faster build times and significant performance improvements. This transition contributed to a scalable andmaintainable development environment.",
            ],
        },
        {
            company: "PixaSoftware",
            position: "Front-End Developer Testing/QA and Automation Developer",
            period: "MAY 2025 - OCTOBER 2025",
            description: "Developed data visualization and analytics platforms for business intelligence.",
            technologies: ["Vite","Vue3", "Vue2",  "MongoDB", "GraphQL", "SAAS", "LESS", "Vuetify", "TailwindCSS", "Java", "Bosstrap","Pinia","PostCss"],
            responsibilities: [
                "I transferred and developed designs for the V2 version of Pixa Software's WMS/OMS product that manages the marketplace.",
                " I implemented UI/UX design, design system/component library, E2E scenarios, and API tests in an architecture based on Vue 3, Vite, Tailwind, PostCss, Vuetify, and Pinia/GraphQL.",
                "Working closely with the design and development team, I focused on coding UI/UX designs using Vue 3 and Tailwind."
            ],
        },
    ]

    const [idx, setIdx] = useState(0)
    const [dir, setDir] = useState<1 | -1>(1)
    const isFirst = idx === 0
    const isLast = idx === experiences.length - 1
    const exp = experiences[idx]
    const SPRING: Transition = { type: "spring", stiffness: 260, damping: 28, mass: 0.8 }
    const cardVariants: Variants = {
        initial: (d: 1 | -1) => ({ opacity: 0, x: d * 24, scale: 0.985 }),
        animate: { opacity: 1, x: 0, scale: 1, transition: SPRING },
        exit: (d: 1 | -1) => ({ opacity: 0, x: d * -24, scale: 0.985, transition: { duration: 0.2 } }),
    }

    const handlePrev = () => { if (!isFirst) { setDir(-1); setIdx((i) => i - 1) } }
    const handleNext = () => { if (!isLast)  { setDir( 1); setIdx((i) => i + 1) } }

    return (
        <section id="experience" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16 pb-28">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Work Experience</h2>
                    <div className="h-1 w-20 bg-primary mx-auto" />
                    <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                        My professional journey building real-world applications
                    </p>
                </motion.div>


                <div className="space-y-8">
                    <AnimatePresence mode="wait" custom={dir}>
                        <motion.div
                            key={`${exp.company}-${idx}`}
                            custom={dir}
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Card className="bg-gradient-to-br from-white/30 to-white/10 ">
                                <CardHeader className="pb-2">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                                        <CardTitle className="text-xl text-white">{exp.position}</CardTitle>
                                        <Badge variant="outline" className="md:ml-auto w-fit text-white">
                                            {exp.period}
                                        </Badge>
                                    </div>
                                    <div className="text-lg font-medium text-white">{exp.company}</div>
                                </CardHeader>

                                <CardContent>
                                    <p className="mb-4 text-white">{exp.description}</p>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold mb-2 text-white">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2 text-white">
                                            {exp.technologies.map((tech) => (
                                                <Badge key={tech} variant="secondary" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold mb-2 text-white">Key Responsibilities:</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-white">
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i} className="text-sm">
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    <div
                        className="fixed left-1/2 bottom-[calc(1rem+env(safe-area-inset-bottom))] -translate-x-1/2 z-30
             pointer-events-none w-fit"
                    >
                        <div
                            className="pointer-events-auto flex items-center justify-center gap-4
                backdrop-blur-md  px-3 py-2"

                        >
                            {/* Prev */}
                            <button
                                type="button"
                                onClick={handlePrev}
                                disabled={isFirst}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium border border-white/20 hover:bg-white/10
        ${isFirst ? "opacity-40 cursor-not-allowed hover:bg-transparent" : "cursor-pointer"}`}
                                aria-label="Previous experience"
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
                                type="button"
                                onClick={handleNext}
                                disabled={isLast}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium border border-white/20 hover:bg-white/10
        ${isLast ? "opacity-40 cursor-not-allowed hover:bg-transparent" : "cursor-pointer"}`}
                                aria-label="Next experience"
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



                    <p className="text-center text-white/70 text-sm">
                    </p>
                </div>
            </div>
        </section>
    )
}
