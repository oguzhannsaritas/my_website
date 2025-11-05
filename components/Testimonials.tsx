"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants, Transition } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

type Contact = {
    name: string
    company: string
    phone: string
    email: string
    title:string
}

const contacts: Contact[] = [
    { name: "Şahin SEÇİL",  company: "Heybooster", phone: "(+90) 554 770 90 68", email: "sahin@boostroas.com",title:"Co-founder & CEO" },
    { name: "Neslihan EMİKOĞLU", company: "Heybooster", phone: "-", email: "neslihan@heybooster.ai", title:"Co-founder" },
    { name: "Hakan BUDAK", company: "Heybooster", phone: "(+90) 539 506 51 27", email: "hakanbudak1@gmail.com" , title:"Middle Frontend Developer"},
    { name: "Abdullah KÜLCÜ", company: "Heybooster ", phone: "(+90) 539 883 61 80", email: "abdullahkulcu@outlook.com" , title:"CTO"},
    { name: "Ali Ilteriş KESKİN", company: "Heybooster", phone: "(+90) 544 250 60 99 ", email: " aliilterskeskin@gmail.com" , title:"Senior Software Developer & Team Lead"},
    { name: "Ferhat ATAGÜN", company: "Hangi Kredi", phone: "(+90) 538 891 34 25", email: "ferhatatagun2@gmail.com" , title:" Frontend Development Team Lead"},
    { name: "Emre BOSTAN", company: "Pixa Software", phone: "(+90) 536 635 93 41", email: "emre@pixasoftware.com" , title:"Co-Founder & CTO "},
    { name: "Bilal BÜYÜKDERE", company: "Pixa Software", phone: "-", email: " bilal@pixasoftware.com" , title:"Co-Founder & CEO"},
]

export default function Testimonials() {
    const CHUNK = 3
    const pages: Contact[][] = []
    for (let i = 0; i < contacts.length; i += CHUNK) {
        pages.push(contacts.slice(i, i + CHUNK))
    }
    const totalPages = pages.length
    const [page, setPage] = useState(0)
    const isFirst = page === 0
    const isLast = page === totalPages - 1
    const visible = pages[page] ?? []

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
        <section id="testimonials" className="min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">REFERENCES</h2>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={page}
                        variants={gridVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {visible.map((c, i) => (
                            <motion.div key={`${c.email}-${i}`} variants={itemVariants} className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-white/30 to-white/10 text-white">
                                <p className="text-sm text-white/60 ">{c.company}</p>
                                <p className="font-semibold mb-4 ">{c.name} ({c.title})</p>


                                <div className="space-y-1">
                                    <p className="text-xs uppercase tracking-wider text-white/60">Phone</p>
                                    <a
                                        className="block text-white hover:underline"
                                        href={`tel:${c.phone.replace(/[^\d+]/g, "")}`}
                                    >
                                        {c.phone}
                                    </a>
                                </div>

                                <div className="space-y-1 mt-4">
                                    <p className="text-xs uppercase tracking-wider text-white/60">Email</p>
                                    <a
                                        className="block text-white hover:underline break-all"
                                        href={`mailto:${c.email}`}
                                    >
                                        {c.email}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {totalPages > 1 && (
                    <div className="mt-10 flex items-center justify-center gap-4">
                        <button
                            type="button"
                            onClick={() => !isFirst && setPage((p) => p - 1)}
                            disabled={isFirst}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium border border-white/20 hover:bg-white/10 ${
                                isFirst ? "opacity-40 cursor-not-allowed hover:bg-transparent" : "cursor-pointer"
                            }`}
                            aria-label="Previous contacts"
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
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium border border-white/20 hover:bg-white/10 ${
                                isLast ? "opacity-40 cursor-not-allowed hover:bg-transparent" : "cursor-pointer"
                            }`}
                            aria-label="Next contacts"
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
                )}
            </div>
        </section>
    )
}
