"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants, Transition } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Server, Database, Cpu, ArrowRight, ArrowLeft } from "lucide-react"

type Skill = { name: string }
type SkillCategory = { name: string; icon: React.ReactNode; skills: Skill[] }

export default function Skills() {
    const skillCategories: SkillCategory[] = [
        {
            name: "Frontend",
            icon: <Globe className="h-6 w-6" />,
            skills: [
                { name: "HTML" }, { name: "HTML5" },{ name: "Liquid" }, { name: "Java" }, { name: "CSS" },{ name: "Polaris" }, { name: "App Bridge" },{ name: "JavaScript (ES6+)" },
                { name: "TypeScript" }, { name: "JQuery" },{ name: "React" }, { name: "Vue.js" }, { name: "Next.js" },
                { name: "Vuetify" }, { name: "Tailwind CSS" }, { name: "PostCSS" }, { name: "Vite" },
            ],
        },
        { name: "State Management", icon: <Server className="h-6 w-6" />, skills: [{ name: "Vuex" }, { name: "Redux" }, { name: "Pinia" }] },
        { name: "QA & Test Automation", icon: <Cpu className="h-6 w-6" />, skills: [{ name: "Playwright" }, { name: "Selenium" }, { name: "JMeter" }, { name: "Puppeteer" }, { name: "Cypress" }] },
        { name: "API Development & Integration", icon: <Server className="h-6 w-6" />, skills: [{ name: "RESTful API" }, { name: "GraphQL" }, { name: "Express.js" }, { name: "SQL" }, { name: "SQLite" }] },
        { name: "Data & Tools", icon: <Database className="h-6 w-6" />, skills: [{ name: "AWS S3" }, { name: "MongoDB" }, { name: "Postman" }] },
        { name: "CI/CD", icon: <Cpu className="h-6 w-6" />, skills: [{ name: "Jenkins" }, { name: "Docker" }, { name: "Shopify CLI" }] },
    ]

    const CHUNK = 4
    const pages: SkillCategory[][] = []
    for (let i = 0; i < skillCategories.length; i += CHUNK) {
        pages.push(skillCategories.slice(i, i + CHUNK))
    }
    const totalPages = pages.length

    const [page, setPage] = useState(0)
    const isFirst = page === 0
    const isLast = page === totalPages - 1
    const visible = pages[page]

    const SPRING: Transition = { type: "spring", stiffness: 260, damping: 28, mass: 0.8 }
    const gridVariants: Variants = {
        initial: { opacity: 0, x: 24, scale: 0.985 },
        animate: { opacity: 1, x: 0, scale: 1, transition: { ...SPRING, staggerChildren: 0.08 } },
        exit: { opacity: 0, x: -24, scale: 0.985, transition: { duration: 0.2 } },
    }
    const itemVariants: Variants = {
        initial: { opacity: 0, y: 16, scale: 0.995 },
        animate: { opacity: 1, y: 0, scale: 1, transition: SPRING },
        exit: { opacity: 0, y: -10, transition: { duration: 0.18 } },
    }

    return (
        <section id="skills" className="pt-20 min-h-screen px-4 md:px-6 lg:px-8 scroll-mt-16  relative">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technical Skills</h2>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={page}
                        variants={gridVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {visible.map((category) => (
                            <motion.div key={category.name} variants={itemVariants} layout>
                                {/* Scroll yerine min yükseklik + doğal akış */}
                                <Card className="min-h-[16rem] md:min-h-[20rem] h-auto bg-gradient-to-br from-white/30 to-white/10  rounded-2xl">
                                    <CardContent className="flex flex-col px-6 py-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-full bg-primary/10 text-white">{category.icon}</div>
                                            <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                                        </div>


                                        <ul
                                            className="
                        list-disc list-outside pl-5
                        columns-1 md:columns-2 [column-gap:1rem]
                        text-sm text-gray-700
                      "
                                        >
                                            {category.skills.map((skill) => (
                                                <li
                                                    key={skill.name}
                                                    className="mb-1 break-inside-avoid text-white"
                                                >
                                                    {skill.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="fixed left-1/2 bottom-8 -translate-x-1/2 z-30 pointer-events-none">
                <div className="pointer-events-auto flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => !isFirst && setPage((p) => p - 1)}
                        disabled={isFirst}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium border border-white/20 hover:bg-white/10
              ${isFirst ? "opacity-40 cursor-not-allowed hover:bg-transparent" : "cursor-pointer"}`}
                        aria-label="Previous skills"
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
                        onClick={() => !isLast && setPage((p) => p + 1)}
                        disabled={isLast}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium border border-white/20 hover:bg-white/10
              ${isLast ? "opacity-40 cursor-not-allowed hover:bg-transparent" : "cursor-pointer"}`}
                        aria-label="Next skills"
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
        </section>
    )
}
